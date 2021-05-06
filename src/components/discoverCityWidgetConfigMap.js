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

export default class DiscoverCity extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,
            nam:'',
            val:''
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
        this.setState({tile:x});
        console.log(this.state.tile[key][keys]);
    }
    handleChange1(event){
        this.setState({val: event.target.value});

    }
    handleChange2 = (event)=> {
        this.setState({val: event.target.value});
    }
    handleSubmit=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");
            })
            .catch(error=>{
                alert('something went wrong... ');
                console.log(error);
            })
    }
    handleSubmit1=(event,key,keys)=> {
       // alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        x[key][keys].push(this.state.val);
        this.setState({tile:x});
        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");
            })
            .catch(error=>{
                alert('something went wrong... ');
                console.log(error);
            })
    }
    delete(keys,keyss)
    {
        let x=this.state.tile;
        // var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
        //     return key !== keys ? value : undefined;
        // }));
        // x[this.state.key]=result;
        x[this.state.key][keys]=x[this.state.key][keys].filter((drink, index) => index != keyss);
        this.setState({tile:x});
        console.log(this.state.tile[keys]);
    }

    render() {
        let key=this.state.key;
        let tile=this.state.tile;

        return(<div>
                <Accordion>
                    <AccordionSummary>
                        <Typography><b>{key}</b></Typography>
                    </AccordionSummary>
                    {this.generateData(tile[key]).map(keys=>
                        <Accordion>
                            <AccordionSummary>
                                <Typography><b>{keys}</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div>
                                        {
                                            this.generateData(tile[key][keys]).map(keyss=>
                                                <pre><b>{tile[key][keys][keyss]}      <button onClick={this.delete.bind(this,keys,keyss)}>Delete</button></b></pre>
                                            )}
                                        <form onSubmit={this.handleSubmit}>
                                        <input type="submit" value="Post" />
                                    </form>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>Add</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <form onSubmit={(event)=>this.handleSubmit1(event,key,keys)}>
                                                    <label>

                                                        <input type="text" name="" style={{'width':'70px','height':'20px'}} value={this.state.val} onChange={(event)=>this.handleChange1(event)} />
                                                    </label>
                                                    &nbsp;<input type="submit" value="Add & Post" />
                                                </form>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                    }

                </Accordion>
            </div>

        );
    }
}