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

export default class PromotedCity extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,col:false,
            nam: '',
            val1:'',
            val2:''
        }
    }
    generateData(data) {

        const newData = Object.keys(data).reduce((result, currentKey) => {

            result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    handleChange(event,key,keys) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys]=event.target.value;
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys]);
    }
    handleChange1= (event) => {
        this.setState({nam: event.target.value,col:true});
    }
    handleChange2 = (event)=> {
        this.setState({val1: event.target.value,col:true});
    }
    handleChange3= (event) => {
        this.setState({val2: event.target.value,col:true});
    }
    handleSubmit=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
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
    handleSubmit1=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        console.log(this.state.nam);
        if(this.state.nam.length!=0) {
            x[this.state.key][this.state.nam] = {};
            //x[this.state.key][this.state.nam][this.state.val1]='';
            x[this.state.key][this.state.nam][this.state.val1] = this.state.val2;
        }
        this.setState({tile:x});

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
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
        // var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
        //     return key !== keys ? value : undefined;
        // }));
        // x[this.state.key]=result;
        delete x[this.state.key][keys];
        this.setState({tile:x,col:true});
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
                    {
                        this.generateData(tile[key]).map(keys=>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography><b>{keys}    <button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            {
                                                this.generateData(tile[key][keys]).map(keyss=>
                                                    <pre><b>{keyss} : {tile[key][keys][keyss]}  </b></pre>
                                                )}


                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                    }
                    <br/>
                            <form onSubmit={this.handleSubmit}>
                                <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
                        </form></div></AccordionDetails>
                    <Accordion>
                        <AccordionSummary>
                            <Typography><b>Add</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={this.handleSubmit1}>
                                <label>
                                    key :
                                    <input type="text" name="" style={{'width':'60px','height':'20px'}} value={this.state.nam} onChange={this.handleChange1} /><br/>
                                    <br/>value <br/><br/>
                                    <input type="text" name="" style={{'width':'240px','height':'20px'}} value={this.state.val1} onChange={this.handleChange2} /> :&nbsp;
                                    <input type="text" name="" style={{'width':'240px','height':'20px'}} value={this.state.val2} onChange={this.handleChange3} />
                                </label>
                                <br/><br/>
                                <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </Accordion>
            </div>

        );
    }
}