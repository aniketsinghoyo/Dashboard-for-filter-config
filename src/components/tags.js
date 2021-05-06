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

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,
            id:'',
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
    handleChange1= (event,key,keys) => {
        let x=this.state.tile;
        x[key][keys][event.target.name]=event.target.value;
        this.setState({tile:x});
    }
    handleChange2= (event,key,keys,keyss) => {
        let x=this.state.tile;
        x[key][keys][event.target.name][keyss]=event.target.value;
        this.setState({tile:x});

    }
    handleChange3= (event) => {
     this.setState({id:event.target.value});
    }
    handleChange4= (event) => {
        this.setState({val1:event.target.value});
    }
    handleChange5= (event) => {
        this.setState({val2:event.target.value});
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
        console.log(this.state.tile[this.state.key]);
    }
    handleSubmit1=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        x[this.state.key].push({});
        let len=x[this.state.key].length;
        x[this.state.key][len-1]["id"]=this.state.id;
        x[this.state.key][len-1]["languageWiseWidgetHeaderText"]={};
        x[this.state.key][len-1]["languageWiseWidgetHeaderText"]["en"]=this.state.val1;
        x[this.state.key][len-1]["languageWiseWidgetHeaderText"]["hi"]=this.state.val2;

        this.setState({tile:x});
        console.log(this.state.tile[this.state.key]);
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
        console.log(this.state.tile[this.state.key]);
    }
    delete(keys)
    {
        let x=this.state.tile;
        // var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
        //     return key !== keys ? value : undefined;
        // }));
        // x[this.state.key]=result;
        x[this.state.key]=x[this.state.key].filter((drink, index) => index != keys);
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
                    <AccordionDetails>
                        <Typography>
                            <div>
                                {this.generateData(tile[key]).map(keys=>
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography><b>{keys} &nbsp;<button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                                <div>
                                                                            <pre><b>id: <input type="text" name="id" style={{'width':'220px','height':'20px'}} value={tile[key][keys]['id']} onChange={(event)=>this.handleChange1(event,key,keys)} />
                                                                                </b>
                                                                                <Accordion>
                                                                                <AccordionSummary>
                                                                                <Typography>languageWiseDisplayHeader</Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                <Typography>
                                                                                <div>
                                                                            {
                                                                                this.generateData(tile[key][keys]['languageWiseWidgetHeaderText']).map(keyss=>
                                                                                    <pre><b>{keyss} : <input type="text" name="languageWiseWidgetHeaderText" style={{'width':'220px','height':'20px'}} value={tile[key][keys]['languageWiseWidgetHeaderText'][keyss]} onChange={(event)=>this.handleChange2(event,key,keys,keyss)} /></b></pre>
                                                                                )}
                                                                                </div>
                                                                                </Typography>
                                                                                </AccordionDetails>
                                                                                </Accordion>
                                                                                            </pre>

                                                </div>
                                                <form onSubmit={this.handleSubmit}>
                                                    <input type="submit" value="Post" />
                                                </form>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                                }<form onSubmit={this.handleSubmit}><br/>
                                <input type="submit" value="Post" /><br/><br/>
                            </form>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>Add</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <form onSubmit={this.handleSubmit1}>
                                            <div>
                                                                            <pre><b>id: <input type="text" name="id" style={{'width':'220px','height':'20px'}} value={this.state.id} onChange={(event)=>this.handleChange3(event)} />
                                                                                </b>
                                                                                <Accordion>
                                                                                <AccordionSummary>
                                                                                <Typography>languageWiseDisplayHeader</Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                <Typography>
                                                                                <div>


                                                                                <pre><b>en : <input type="text" name="languageWiseWidgetHeaderText" style={{'width':'220px','height':'20px'}} value={this.state.val1} onChange={(event)=>this.handleChange4(event)} /></b></pre>
                                                                                <pre><b>hi : <input type="text" name="languageWiseWidgetHeaderText" style={{'width':'220px','height':'20px'}} value={this.state.val2} onChange={(event)=>this.handleChange5(event)} /></b></pre>

                                                                                </div>
                                                                                </Typography>
                                                                                </AccordionDetails>
                                                                                </Accordion>
                                                                                            </pre>

                                            </div>

                                                <input type="submit" value="Add & Post" />
                                            </form>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}