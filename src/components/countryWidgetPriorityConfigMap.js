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

export default class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles, col:false,
            kay:'',
            val1:'',val2:'',val3:'',val4:'',val5:'',
            val6:'', val7:'', val8:'',val9:'',val10:'',
            val11:'',val12:'',val13:'',val14:'',val15:'',val16:'',val17:'',
            val18:'', val19:'', val20:'',val21:'',val22:'',
            val23:'',val24:''
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
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handleChange2(event,key,keys,keyss,keysss,keyssss,keysssss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][keyssss][keysssss]=event.target.value;
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handleChange3(event,key,keys,keyss,keysss,keyssss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][keyssss]=event.target.value;
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handleSubmit=(event)=> {
       // alert('A name was submitted: ');
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
    handleChangek = (event)=>{
        this.setState({kay: event.target.value,col:true});
    }
    // handleChange1 = (event)=>{
    //     this.setState({val1: event.target.value});
    // }
    // handleChange2 = (event)=>{
    //     this.setState({val2: event.target.value});
    // }
    // handleChange3 = (event)=>{
    //     this.setState({val3: event.target.value});
    // }
    handleChange4 = (event)=>{
        this.setState({val4: event.target.value,col:true});
    }
    handleChange5 = (event)=>{
        this.setState({val5: event.target.value,col:true});
    }
    handleChange6 = (event)=>{
        this.setState({val6: event.target.value,col:true});
    }
    handleChange7 = (event)=>{
        this.setState({val7: event.target.value,col:true});
    }
    handleChange8 = (event)=>{
        this.setState({val8: event.target.value,col:true});
    }
    handleChange9 = (event)=>{
        this.setState({val9: event.target.value,col:true});
    }
    handleChange10 = (event)=> {
        this.setState({val10: event.target.value,col:true});
    }
    handleChange11 = (event)=> {
        this.setState({val11: event.target.value,col:true});
    }
    handleChange12 = (event)=> {
        this.setState({val12: event.target.value,col:true});
    }
    handleChange13 = (event)=> {
        this.setState({val13: event.target.value,col:true});
    }
    handleChange14 = (event)=> {
        this.setState({val14: event.target.value,col:true});
    }
    handleChange15 = (event)=> {
        this.setState({val15: event.target.value,col:true});
    }
    handleChange16 = (event)=> {
        this.setState({val16: event.target.value,col:true});
    }
    handleChange17 = (event)=> {
        this.setState({val17: event.target.value,col:true});
    }
    handleChange18 = (event)=> {
        this.setState({val18: event.target.value,col:true});
    }
    handleChange19 = (event)=> {
        this.setState({val19: event.target.value,col:true});
    }
    handleChange20 = (event)=> {
        this.setState({val20: event.target.value,col:true});
    }
    handleChange21 = (event)=> {
        this.setState({val21: event.target.value,col:true});
    }
    handleChange22 = (event)=> {
        this.setState({val22: event.target.value,col:true});
    }
    handleChange23 = (event)=> {
        this.setState({val23: event.target.value,col:true});
    }
    handleChange24 = (event)=> {
        this.setState({val24: event.target.value, col: true});
    }

    handleSubmit1=(event)=> {
        alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        x[this.state.key][this.state.kay]={};
        if(this.state.kay.length!=0) {
            x[this.state.key][this.state.kay]['countryWidgetConfig']={};
            x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET'] = {};
            x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET']['priorityWiseFilterName'] = {};
            if(this.state.val4.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET']['priorityWiseFilterName']['1'] = this.state.val4;
            }
            if(this.state.val5.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET']['priorityWiseFilterName']['2'] = this.state.val5;
            }
            if(this.state.val6.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET']['priorityWiseFilterName']['3'] = this.state.val6;
            }
            x[this.state.key][this.state.kay]['countryWidgetConfig']['TAG_FILTER_WIDGET']['enabled'] = this.state.val7;

        }
        if(this.state.val8.length!=0) {
            x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET'] = {};
            x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET']['priorityWiseFilterName'] = {};
            if(this.state.val8.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET']['priorityWiseFilterName']['1'] = this.state.val8;
            }
            if(this.state.val9.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET']['priorityWiseFilterName']['2'] = this.state.val9;
            }
            if(this.state.val10.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET']['priorityWiseFilterName']['3'] = this.state.val10;
            }
            x[this.state.key][this.state.kay]['countryWidgetConfig']['PROPERTY_TYPE_FILTER_WIDGET']['enabled'] = this.state.val11;

        }
        if(this.state.val12.length!=0) {
            x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET'] = {};
            x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['priorityWiseFilterName'] = {};
            if(this.state.val12.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['priorityWiseFilterName']['1'] = this.state.val12;
            }
            if(this.state.val13.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['priorityWiseFilterName']['2'] = this.state.val13;
            }
            if(this.state.val14.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['priorityWiseFilterName']['3'] = this.state.val14;
            }
            if(this.state.val15.length!=0) {
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['priorityWiseFilterName']['4'] = this.state.val15;
            }
            if(this.state.val16.length!=0){
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['en'] = {};
            }
            if(this.state.val16.length!=0){
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['en'][this.state.val16] = this.state.val17;
            }
            if(this.state.val18.length!=0){
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['en'][this.state.val18] = this.state.val19;
            }
            if(this.state.val20.length!=0){
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['en'][this.state.val20] = this.state.val21
            }
            if(this.state.val22.length!=0){
                x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['en'][this.state.val22] = this.state.val23;
            }

            x[this.state.key][this.state.kay]['countryWidgetConfig']['AMENITY_FILTER_WIDGET']['enabled'] = this.state.val24;

        }
        this.setState({tile:x,col:false});

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");alert('posted successfully...');this.setState({col:false});
            })
            .catch(error=>{
                alert('someething went wrong...');
                console.log(error);
        })
    }
    delete(keys)
    {
        let x=this.state.tile;
        // var result = JSON.parse(JSON.stringify(this.state.tile[this.state.key], function(key, value) {
        //     return key !== keys ? value : undefined;
        // }));
        delete x[this.state.key][keys];
        // x[this.state.key]=result;
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
                        <Typography>
                            <div>
                                {
                                    this.generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}&nbsp;&nbsp;<button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {this.generateData(tile[key][keys]).map(keyss=>
                                                            <Accordion>
                                                                <AccordionSummary>
                                                                    <Typography><b>{keyss}</b></Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>
                                                                        <div>
                                                                            {this.generateData(tile[key][keys][keyss]).map(keysss=>
                                                                                <Accordion>
                                                                                    <AccordionSummary>
                                                                                        <Typography><b>{keysss}</b></Typography>
                                                                                    </AccordionSummary>
                                                                                    <AccordionDetails>
                                                                                        <Typography>
                                                                                            <form onSubmit={this.handleSubmit}>
                                                                                            <div>
                                                                                                {
                                                                                                    this.generateData(tile[key][keys][keyss][keysss]).map(keyssss => {
                                                                                                            if(keyssss!='enabled')
                                                                                                            {
                                                                                                                return <div>
                                                                                                                    <Accordion>
                                                                                                                        <AccordionSummary>
                                                                                                                            <Typography><b>{keyssss}</b></Typography>
                                                                                                                        </AccordionSummary>
                                                                                                                        <AccordionDetails>
                                                                                                                            <Typography>
                                                                                                                                <div>
                                                                                                                                    {
                                                                                                                                        this.generateData(tile[key][keys][keyss][keysss][keyssss]).map(keysssss => {
                                                                                                                                                if(keysssss=='en')
                                                                                                                                                {
                                                                                                                                                    return <div>
                                                                                                                                                        <Accordion>
                                                                                                                                                            <AccordionSummary>
                                                                                                                                                                <Typography><b>{keysssss}</b></Typography>
                                                                                                                                                            </AccordionSummary>
                                                                                                                                                            <AccordionDetails>
                                                                                                                                                                <Typography>

                                                                                                                                                                    <div>
                                                                                                                                                                        {
                                                                                                                                                                            this.generateData(tile[key][keys][keyss][keysss][keyssss][keysssss]).map(keyssssss=>
                                                                                                                                                                                <pre><b>{keyssssss} : <input type="text" name="priority" style={{'width':'270px'}} value={tile[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]} onChange={(event)=>this.handleChange1(event,key,keys,keyss,keysss,keyssss,keysssss,keyssssss)}/></b></pre>


                                                                                                                                                                            )
                                                                                                                                                                        }
                                                                                                                                                                    </div>
                                                                                                                                                                </Typography>
                                                                                                                                                            </AccordionDetails>
                                                                                                                                                        </Accordion>

                                                                                                                                                    </div>
                                                                                                                                                }
                                                                                                                                                else { return <pre><b>{keysssss} : <input type="text" name="maxWidgetCount" style={{'width':'270px'}} value={tile[key][keys][keyss][keysss][keyssss][keysssss]} onChange={(event)=>this.handleChange2(event,key,keys,keyss,keysss,keyssss,keysssss)}/></b></pre> }
                                                                                                                                            }

                                                                                                                                        )

                                                                                                                                    }
                                                                                                                                </div>
                                                                                                                            </Typography>
                                                                                                                        </AccordionDetails>
                                                                                                                    </Accordion>
                                                                                                                </div>
                                                                                                            }
                                                                                                            else {return <pre><b>{keyssss} : <input type="text" name="maxWidgetCount" style={{'width':'70px'}} value={tile[key][keys][keyss][keysss][keyssss]} onChange={(event)=>this.handleChange3(event,key,keys,keyss,keysss,keyssss)}/></b></pre>}
                                                                                                        }
                                                                                                    )

                                                                                                }
                                                                                            </div>
                                                                                            <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
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
                                <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
                            </form>
                            </div>
                        </Typography>
                    </AccordionDetails>
                    <Accordion>
                        <AccordionSummary>
                            <Typography><b>Add</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <form onSubmit={this.handleSubmit1}>
                                <label>

                                    key:<input type="text" name="kay" style={{'width':'28px'}} value={this.state.kay} onChange={this.handleChangek} /><br/>
                                </label>
                                <Typography><b>countryWidgetConfig</b></Typography>
                                <label>
                                   <pre> <b>TAG_FILTER_WIDGET :</b><br/>
                                   <b>priorityWiseFilterName:</b><br/>
                                    1 : <input type="text" name="1" value={this.state.val4} onChange={this.handleChange4} /><br/>
                                    2 : <input type="text" name="2" value={this.state.val5} onChange={this.handleChange5} /><br/>
                                    3 : <input type="text" name="3" value={this.state.val6} onChange={this.handleChange6} /><br/>

                                    enabled : <input type="text" name="priority" value={this.state.val7} onChange={this.handleChange7} /><br/><br/><br/>

                                    <b>PROPERTY_TYPE_FILTER_WIDGET :</b><br/>
                                    <b>priorityWiseFilterName : </b><br/>
                                    1 : <input type="text" name="1" value={this.state.val8} onChange={this.handleChange8} /><br/>
                                    2 : <input type="text" name="2" value={this.state.val9} onChange={this.handleChange9} /><br/>
                                    3 : <input type="text" name="3" value={this.state.val10} onChange={this.handleChange10} /><br/>

                                    enabled : <input type="text" name="priority" value={this.state.val11} onChange={this.handleChange11} /><br/><br/><br/>

                                       <b>AMENITY_FILTER_WIDGET :</b><br/>
                                       <b>priorityWiseFilterName : </b><br/>
                                    1 : <input type="text" name="1" value={this.state.val12} onChange={this.handleChange12} /><br/>
                                    2 : <input type="text" name="2" value={this.state.val13} onChange={this.handleChange13} /><br/>
                                    3 : <input type="text" name="3" value={this.state.val14} onChange={this.handleChange14} /><br/>
                                    4 : <input type="text" name="4" value={this.state.val15} onChange={this.handleChange15} /><br/>
                                       <b>languageWiseFilterWiseDisplayHeader</b><br/>
                                       <b>en :</b> <br/><br/>
                                       <input type="text" name="en" style={{'width':'28px'}} value={this.state.val16} onChange={this.handleChange16} />&nbsp;:&nbsp;
                                       <input type="text" name="en" style={{'width':'70px'}} value={this.state.val17} onChange={this.handleChange17} /><br/>
                                       <input type="text" name="en" style={{'width':'28px'}} value={this.state.val18} onChange={this.handleChange18} />&nbsp;:&nbsp;
                                       <input type="text" name="en" style={{'width':'70px'}} value={this.state.val19} onChange={this.handleChange19} /><br/>
                                       <input type="text" name="en" style={{'width':'28px'}} value={this.state.val20} onChange={this.handleChange20} />&nbsp;:&nbsp;
                                       <input type="text" name="en" style={{'width':'70px'}} value={this.state.val21} onChange={this.handleChange21} /><br/>
                                       <input type="text" name="en" style={{'width':'28px'}} value={this.state.val22} onChange={this.handleChange22} />&nbsp;:&nbsp;
                                       <input type="text" name="en" style={{'width':'70px'}} value={this.state.val23} onChange={this.handleChange23} /><br/><br/>
                                       enabled : <input type="text" style={{'width':'50px'}} name="enabled" value={this.state.val24} onChange={this.handleChange24} /><br/><br/><br/>

                                </pre>
                                </label>
                                <input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </Accordion>
            </div>

        );
    }
}