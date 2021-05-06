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

export default class CityAB extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,
            kay:'',
            val1:'',val2:'',val3:'',val4:'',val5:'',
            val6:'', val7:'', val8:'',val9:'',val10:'',
            val11:'',val12:''
        }
    }
    generateData(data) {

        const newData = Object.keys(data).reduce((result, currentKey) => {

            result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    handleChange=(event,key,keys,keyss,keysss)=> {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][event.target.name]=event.target.value;
        this.setState({tile:x});
        console.log(this.state.tile[key][keys][keyss][keysss]);
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
    handleChangek = (event)=>{
        this.setState({kay: event.target.value});
    }
    handleChange1 = (event)=>{
        this.setState({val1: event.target.value});
    }
    handleChange2 = (event)=>{
        this.setState({val2: event.target.value});
    }
    handleChange3 = (event)=>{
        this.setState({val3: event.target.value});
    }
    handleChange4 = (event)=>{
        this.setState({val4: event.target.value});
    }
    handleChange5 = (event)=>{
        this.setState({val5: event.target.value});
    }
    handleChange6 = (event)=>{
        this.setState({val6: event.target.value});
    }
    handleChange7 = (event)=>{
        this.setState({val7: event.target.value});
    }
    handleChange8 = (event)=>{
        this.setState({val8: event.target.value});
    }
    handleChange9 = (event)=>{
        this.setState({val9: event.target.value});
    }
    handleChange10 = (event)=> {
        this.setState({val10: event.target.value});
    }
    handleChange11 = (event)=> {
        this.setState({val11: event.target.value});
    }
    handleChange12 = (event)=> {
        this.setState({val12: event.target.value});
    }

    handleSubmit1=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        x[this.state.key][this.state.kay]={};
        x[this.state.key][this.state.kay]['DISCOVER_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['enabled']=this.state.val1;
        x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['priority']=parseInt(this.state.val2);
        x[this.state.key][this.state.kay]['NEARBY_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['enabled']=this.state.val3;
        x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['priority']=parseInt(this.state.val4);
        x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['enabled']=this.state.val5;
        x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['priority']=parseInt(this.state.val6);
        x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['enabled']=this.state.val7;
        x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['priority']=parseInt(this.state.val8);
        x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['enabled']=this.state.val9;
        x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['priority']=parseInt(this.state.val10);
        x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET']=[{}];
        x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['enabled']=this.state.val11;
        x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['priority']=parseInt(this.state.val12);
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
    delete(keys)
    {
        let x=this.state.tile;
        var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
            return key !== keys ? value : undefined;
        }));
        x[this.state.key]=result;
        this.setState({tile:x});
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
                                <Typography><b>{keys}  <button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div>
                                        {this.generateData(tile[key][keys]).map(keyss=>
                                            <Accordion>
                                                <AccordionSummary>
                                                    <Typography><b>{keyss}  </b></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>

                                                        <div>
                                                            {
                                                                this.generateData(tile[key][keys][keyss]).map(keysss=>

                                                                    <pre><b>
                                                                          enabled: <input type="text" name="enabled"  style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][keysss]['enabled']} onChange={(event)=>this.handleChange(event,key,keys,keyss,keysss)}/>
                                                                        <br/>
                                                                          prority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][keysss]['priority']} onChange={(event)=>this.handleChange(event,key,keys,keyss,keysss)}/>
                                                                    </b></pre>

                                                                )
                                                            }
                                                        </div>

                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                        }
                                        <form onSubmit={this.handleSubmit}>
                                            <input type="submit" value="Post" />
                                        </form>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                    }
                    <br/><form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Post" />
                </form><br/>
                    <Accordion>
                        <AccordionSummary>
                            <Typography><b>Add</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={this.handleSubmit1}>
                                <label>

                                    key:<input type="text" name="" style={{'width':'28px'}} value={this.state.kay} onChange={this.handleChangek} /><br/>
                                </label>
                                <label>
                                   <pre> <b>DISCOVER_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val1} onChange={this.handleChange1} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val2} onChange={this.handleChange2} /><br/>
                                    <b>NEARBY_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val3} onChange={this.handleChange3} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val4} onChange={this.handleChange4} /><br/>
                                    <b>POPULAR_HOTELS_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val5} onChange={this.handleChange5} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val6} onChange={this.handleChange6} /><br/>
                                    <b>TAG_FILTER_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val7} onChange={this.handleChange7} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val8} onChange={this.handleChange8} /><br/>
                                    <b>PRICE_FILTER_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val9} onChange={this.handleChange9} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val10} onChange={this.handleChange10} /><br/>
                                    <b>LOCATION_FILTER_WIDGET :</b><br/>
                                    enabled : <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={this.state.val11} onChange={this.handleChange11} /><br/>
                                    priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={this.state.val12} onChange={this.handleChange12} /><br/>
                                </pre>
                                </label>
                                <input type="submit" value="Post" />
                            </form>
                        </AccordionDetails>
                    </Accordion>

                </Accordion>
            </div>

        );
    }
}