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

export default class Applicable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles,
            kay:'',val1:''
        }
    }
    generateData(data) {

        const newData = Object.keys(data).reduce((result, currentKey) => {

            result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    handleChange1(event,key,keys,keyss,keysss,keyssss,keysssss,keyssssss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]=event.target.value;
        this.setState({tile:x});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handleChange2(event,key,keys,keyss,keysss,keyssss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][keyssss]=event.target.value;
        this.setState({tile:x});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handlechange3=(event)=>{
        this.setState({val:event.target.value});
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
    handleSubmit1=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        x[this.state.key]["countryWiseApplicableFilterInfoMap"]["250"]=this.state.val;


        console.log(x[this.state.key]["countryWiseApplicableFilterInfoMap"]);

        // axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
        //     {
        //
        //         headers: {  'x-api-key':'DemoKeyForDemoClient',
        //             'oyo-client':'demo'} })
        //     .then(response=>{ console.log("hari ke charno me pranaam");
        //     })
        //     .catch(error=>{
        //         console.log("vffdbgfhgnbvcv");
        //         console.log(error);
        // })
        alert('something went wrong... ');
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
                    <AccordionDetails>
                        <Typography>
                            <div>
                                {
                                    this.generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {this.generateData(tile[key][keys]).map(keyss=>
                                                            <Accordion>
                                                                <AccordionSummary>
                                                                    <Typography><b>{keyss}&nbsp;&nbsp;<button onClick={this.delete.bind(this,keyss)}>Delete</button></b></Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>

                                                                        <div>
                                                                            {
                                                                                this.generateData(tile[key][keys][keyss]).map(keysss=>
                                                                                    <Accordion>
                                                                                        <AccordionSummary>
                                                                                            <Typography><b>{keysss}</b></Typography>
                                                                                        </AccordionSummary>
                                                                                        <AccordionDetails>
                                                                                            <Typography>
                                                                                                <form onSubmit={this.handleSubmit}>
                                                                                                <div>
                                                                                                    {
                                                                                                        this.generateData(tile[key][keys][keyss][keysss]).map(keyssss=> {
                                                                                                                if(keyssss=='itemDetailsMap'||keyssss=='Amenity')
                                                                                                                { return <div>
                                                                                                                    <Accordion>
                                                                                                                        <AccordionSummary>
                                                                                                                            <Typography><b>{keyssss}</b></Typography>
                                                                                                                        </AccordionSummary>
                                                                                                                        <AccordionDetails>
                                                                                                                            <div>{
                                                                                                                                this.generateData(tile[key][keys][keyss][keysss][keyssss]).map(keysssss=>
                                                                                                                                    <Accordion>
                                                                                                                                        <AccordionSummary>
                                                                                                                                            <Typography><b>{keysssss}</b></Typography>
                                                                                                                                        </AccordionSummary>
                                                                                                                                        <AccordionDetails>
                                                                                                                                            <Typography>
                                                                                                                                                <div>
                                                                                                                                                    {
                                                                                                                                                        this.generateData(tile[key][keys][keyss][keysss][keyssss][keysssss]).map(keyssssss=>
                                                                                                                                                            <pre><b>{keyssssss} : <input type="text" name="priority" style={{'width':'170px'}} value={tile[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]}onChange={(event)=>this.handleChange1(event,key,keys,keyss,keysss,keyssss,keysssss,keyssssss)}/></b></pre>
                                                                                                                                                        )}
                                                                                                                                                </div>
                                                                                                                                            </Typography>
                                                                                                                                        </AccordionDetails>
                                                                                                                                    </Accordion>
                                                                                                                                )}</div>
                                                                                                                        </AccordionDetails>
                                                                                                                    </Accordion>




                                                                                                                </div>}

                                                                                                                else if(keyssss=='isEnabled'||keyssss=='displayable')
                                                                                                                {return <pre><b>{keyssss} : <input type="text" name="maxWidgetCount" style={{'width':'170px'}} value={tile[key][keys][keyss][keysss][keyssss]}onChange={(event)=>this.handleChange2(event,key,keys,keyss,keysss,keyssss)}/></b></pre>}
                                                                                                                else {return <pre><b>{keyssss} : <input type="text" name="maxWidgetCount" style={{'width':'170px'}} value={tile[key][keys][keyss][keysss][keyssss]}onChange={(event)=>this.handleChange2(event,key,keys,keyss,keysss,keyssss)}/></b></pre>}
                                                                                                            }
                                                                                                        )

                                                                                                    }
                                                                                                </div>
                                                                                                    <input type="submit" value="Post" />
                                                                                                </form>
                                                                                            </Typography>
                                                                                        </AccordionDetails>
                                                                                    </Accordion>
                                                                                )
                                                                            }

                                                                        </div>
                                                                    </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>
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
                    <form onSubmit={this.handleSubmit1}>
                        <textarea value={this.state.val} onChange={this.handlechange3}/>
                        <input type="submit" value="Post" />
                    </form>
                </Accordion>
            </div>

        );
    }
}