import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .08)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '10px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,
            col:false,
            kay:'',
            val1:'',val2:''
        }
    }
     generateData(data) {

        const newData = Object.keys(data).reduce((result, currentKey) => {

            result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    handleChange(event,key,keys,keyss)
    {
        let x=this.state.tile;
        x[key][keys][keyss]=event.target.value;
        this.setState({tile:x,col:true});
    }
    handleChange1=(event)=>{
        this.setState({kay:event.target.value,col:true});
    }
    handleChange2=(event)=> {
        this.setState({val1:event.target.value,col:true});
    }
    handleChange3=(event)=> {
        this.setState({val2:event.target.value,col:true});
    }
    handleSubmit=(event)=>{
       // alert('A name was submitted: ');
        event.preventDefault();
        console.log(this.state.tile[this.state.key])
        const x=this.state.tile;

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");this.setState({col:false});alert('posted successfully');
            })
            .catch(error=>{
                alert('something went wrong... ');
                console.log(error);
           })

    }
    handleSubmit1=(event)=>{
       // alert('A name was submitted: ');
        event.preventDefault();
        //console.log(this.state.tile[this.state.key])
        const x=this.state.tile;
        if(this.state.kay.length!=0) {
            x[this.state.key][this.state.kay] = {};
            x[this.state.key][this.state.kay]['isEnable'] = this.state.val1;
            x[this.state.key][this.state.kay]['distance'] = this.state.val2;
        }
        this.setState({tile:x});
        console.log(this.state.tile[this.state.key][this.state.kay]);
        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
            {
                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");this.setState({col:false});alert('posted successfully');
            })
            .catch(error=>{
                alert('something went wrong... ');
                console.log(error);
        })

    }
    delete(keys)
    {
        let x=this.state.tile;
        var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
            return key !== keys ? value : undefined;
        }));
        x[this.state.key]=result;
        // x[this.state.key]=x[this.state.key].filter((drink, index) => index != keys);
        this.setState({tile:x,col:true});
        console.log(this.state.tile[this.state.key]);
    }

    render() {
        let key=this.state.key;
        let tile=this.state.tile;

        return(<div>
                    <Accordion>
                        <AccordionSummary>
                            <Typography><p style={{'color': this.state.col ? "red" : "green"}}><b>{key}</b></p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                            {this.generateData(tile[key]).map(keys=>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{keys}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <form onSubmit={this.handleSubmit}>
                                                {
                                                    this.generateData(tile[key][keys]).map(keyss=>
                                                        <pre><b>{keyss} : <input type="text" name={keys} value={tile[key][keys][keyss]} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/></b></pre>
                                                    )}
                                                <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post"/>
                                            </form>
                                        </Typography>

                                    </AccordionDetails>

                                </Accordion>

                            )
                            }
                            <br/>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post"/>
                                </form><br/>
                                <Accordion>
                                <AccordionSummary>
                                    <Typography><b>Add</b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <form onSubmit={this.handleSubmit1}>
                                            <label>
                                                <b>key </b>
                                                <input type="text" name="kay" value={this.state.name} style={{width: "25px"}} onChange={this.handleChange1} />
                                                <pre><b>isEnable:</b>
                                                  <input type="text" name="isEnable" value={this.state.name} onChange={this.handleChange2} /></pre>
                                                <pre><b>distance:</b><input type name="distance" value={this.state.val} onChange={this.handleChange3} /></pre>
                                            </label>
                                            <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Add & Post"/>
                                        </form>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            </div>
                        </AccordionDetails>

                    </Accordion>
                </div>

        );
    }
}