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
            tile:this.props.tiles, col:false,
            kay:'',
            val1:'',val2:'',val3:'',val4:'',val5:'',
            val6:'', val7:'', val8:'',val9:'',val10:'',
            val11:'',val12:'',val13:'',val14:'',val15:'',val16:'',val17:'',
            val18:'', val19:'', val20:'',val21:'',val22:'',
            val23:'',val24:'',val25:'',val26:'',val27:'',val28:'',val29:'',
            val30:'', val31:'', val32:'',val33:'',val34:'',
            val35:'',val36:'',val37:'',val38:'',val39:'',val40:'',val41:'',
            val42:'', val43:'', val44:'',val45:'',val46:'',
            val47:'',val48:''
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
    handleChange2(event,key,keys,keyss,keysss,keyssss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][keysss][keyssss]=event.target.value;
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][keysss]);
    }
    handleChangek=(event)=>{
        this.setState({kay:event.target.value,col:true});
    }
    handleSubmit=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");this.setState({col:false});
            alert('posted successfully');
            })
            .catch(error=>{
                alert('something went wrong... ');
                console.log(error);
        })
    }
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
        this.setState({val24: event.target.value,col:true});
    }
    handleChange25 = (event)=> {
        this.setState({val25: event.target.value,col:true});
    }
    handleChange26 = (event)=> {
        this.setState({val26: event.target.value,col:true});
    }
    handleChange27 = (event)=> {
        this.setState({val27: event.target.value,col:true});
    }
    handleChange28 = (event)=> {
        this.setState({val28: event.target.value,col:true});
    }
    handleChange29 = (event)=> {
        this.setState({val29: event.target.value,col:true});
    }
    handleChange30 = (event)=> {
        this.setState({val30: event.target.value,col:true});
    }
    handleChange31 = (event)=> {
        this.setState({val31: event.target.value,col:true});
    }
    handleChange32 = (event)=> {
        this.setState({val32: event.target.value,col:true});
    }
    handleChange33 = (event)=> {
        this.setState({val33: event.target.value,col:true});
    }
    handleChange34 = (event)=> {
        this.setState({val34: event.target.value,col:true});
    }
    handleChange35 = (event)=> {
        this.setState({val35: event.target.value,col:true});
    }
    handleChange36 = (event)=> {
        this.setState({val36: event.target.value,col:true});
    }
    handleChange37 = (event)=> {
        this.setState({val37: event.target.value,col:true});
    }
    handleChange38 = (event)=> {
        this.setState({val38: event.target.value,col:true});
    }
    handleChange39 = (event)=> {
        this.setState({val39: event.target.value,col:true});
    }
    handleChange40 = (event)=> {
        this.setState({val40: event.target.value,col:true});
    }
    handleChange41 = (event)=> {
        this.setState({val41: event.target.value,col:true});
    }
    handleChange42 = (event)=> {
        this.setState({val42: event.target.value,col:true});
    }
    handleChange43 = (event)=> {
        this.setState({val43: event.target.value,col:true});
    }
    handleChange44 = (event)=> {
        this.setState({val44: event.target.value,col:true});
    }
    handleChange45 = (event)=> {
        this.setState({val45: event.target.value,col:true});
    }
    handleChange46 =(event)=> {
        this.setState({val46: event.target.value,col:true});
    }
    handleChange47 = (event)=> {
        this.setState({val47: event.target.value,col:true});
    }
    handleChange48 = (event)=> {
        this.setState({val48: event.target.value,col:true});
    }
    handleSubmit1=(event)=> {
        //alert('A name was submitted: ');
        event.preventDefault();
        let x=this.state.tile;
        if(this.state.kay.length!=0)
        {
            x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]= {};
            if(this.state.val4.length!=0||this.state.val5.length!=0||this.state.val6.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['WIZARD']= {};
                if(this.state.val4.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['WIZARD']['name']=this.state.val4;
                }
                if(this.state.val5.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['WIZARD']['isEnabled']=this.state.val5;
                }
                if(this.state.val6.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['WIZARD']['priority']=this.state.val6;
                }
            }
            if(this.state.val7.length!=0||this.state.val8.length!=0||this.state.val9.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['AMENITY']= {};
                if(this.state.val7.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['AMENITY']['name']=this.state.val7;
                }
                if(this.state.val8.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['AMENITY']['isEnabled']=this.state.val8;
                }
                if(this.state.val9.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['AMENITY']['priority']=this.state.val9;
                }
            }
            if(this.state.val10.length!=0||this.state.val11.length!=0||this.state.val12.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_TYPE']= {};
                if(this.state.val10.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_TYPE']['name']=this.state.val10;
                }
                if(this.state.val11.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_TYPE']['isEnabled']=this.state.val11;
                }
                if(this.state.val12.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_TYPE']['priority']=this.state.val12;
                }
            }
            if(this.state.val13.length!=0||this.state.val14.length!=0||this.state.val15.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['COORDINATE']= {};
                if(this.state.val13.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['COORDINATE']['name']=this.state.val13;
                }
                if(this.state.val14.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['COORDINATE']['isEnabled']=this.state.val14;
                }
                if(this.state.val15.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['COORDINATE']['priority']=this.state.val15;
                }
            }
            if(this.state.val16.length!=0||this.state.val17.length!=0||this.state.val18.length!=0||this.state.val19.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']= {};
                if(this.state.val16.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['name']=this.state.val16;
                }
                if(this.state.val17.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['isEnabled']=this.state.val17;
                }
                if(this.state.val18.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['priority']=this.state.val18;
                }
                if(this.state.val19.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['displayable']=this.state.val19;
                }
                if(this.state.val20.length!=0||this.state.length!=24)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']={};

                }
                if(this.state.val20.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitized_stays']={};
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitized_stays']['id']=this.state.val20;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitized_stays']['name']=this.state.val21;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitized_stays']['priority']=this.state.val22;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitized_stays']['isEnabled']=this.state.val23;
                }

                if(this.state.val24.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitised_b4_ur_eyes']={};
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitised_b4_ur_eyes']['id']=this.state.val24;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitised_b4_ur_eyes']['name']=this.state.val25;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitised_b4_ur_eyes']['priority']=this.state.val26;
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['TAG']['itemDetailsMap']['sanitised_b4_ur_eyes']['isEnabled']=this.state.val27;
                }

            }
            if(this.state.val28.length!=0||this.state.val29.length!=0||this.state.val30.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['POSTPAID_ALLOWED']= {};
                if(this.state.val28.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['POSTPAID_ALLOWED']['name']=this.state.val28;
                }
                if(this.state.val29.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['POSTPAID_ALLOWED']['isEnabled']=this.state.val29;
                }
                if(this.state.val30.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['POSTPAID_ALLOWED']['priority']=this.state.val30;
                }
            }
            if(this.state.val31.length!=0||this.state.val32.length!=0||this.state.val33.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PROPERTY_TYPE']= {};
                if(this.state.val31.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PROPERTY_TYPE']['name']=this.state.val31;
                }
                if(this.state.val32.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PROPERTY_TYPE']['isEnabled']=this.state.val32;
                }
                if(this.state.val33.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PROPERTY_TYPE']['priority']=this.state.val33;
                }
            }
            if(this.state.val34.length!=0||this.state.val35.length!=0||this.state.val36.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['GUEST_RATING']= {};
                if(this.state.val34.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['GUEST_RATING']['name']=this.state.val34;
                }
                if(this.state.val35.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['GUEST_RATING']['isEnabled']=this.state.val35;
                }
                if(this.state.val36.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['GUEST_RATING']['priority']=this.state.val36;
                }
            }
            if(this.state.val37.length!=0||this.state.val38.length!=0||this.state.val39.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['MIN_RATING']= {};
                if(this.state.val37.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['MIN_RATING']['name']=this.state.val37;
                }
                if(this.state.val38.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['MIN_RATING']['isEnabled']=this.state.val38;
                }
                if(this.state.val39.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['MIN_RATING']['priority']=this.state.val39;
                }
            }
            if(this.state.val40.length!=0||this.state.val41.length!=0||this.state.val42.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PRICE_RANGE']= {};
                if(this.state.val40.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PRICE_RANGE']['name']=this.state.val40;
                }
                if(this.state.val41.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PRICE_RANGE']['isEnabled']=this.state.val41;
                }
                if(this.state.val42.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['PRICE_RANGE']['priority']=this.state.val42;
                }
            }
            if(this.state.val43.length!=0||this.state.val44.length!=0||this.state.val45.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_AMENITY']= {};
                if(this.state.val43.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_AMENITY']['name']=this.state.val43;
                }
                if(this.state.val44.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_AMENITY']['isEnabled']=this.state.val44;
                }
                if(this.state.val45.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['HOTEL_AMENITY']['priority']=this.state.val45;
                }
            }
            if(this.state.val46.length!=0||this.state.val47.length!=0||this.state.val48.length!=0)
            {
                x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['ROOM_AMENITY']= {};
                if(this.state.val46.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['ROOM_AMENITY']['name']=this.state.val46;
                }
                if(this.state.val47.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['ROOM_AMENITY']['isEnabled']=this.state.val47;
                }
                if(this.state.val48.length!=0)
                {
                    x[this.state.key]["countryWiseApplicableFilterInfoMap"][this.state.kay]['ROOM_AMENITY']['priority']=this.state.val48;
                }
            }
        }

        console.log(x[this.state.key]["countryWiseApplicableFilterInfoMap"]);
        this.setState({tile:x});
        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",this.state.tile,
            {
                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");this.setState({col:false});alert('posted successfully...');
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
                                <Typography><b>countryWiseApplicableFilterInfoMap</b></Typography>
                                <label>
                                   <pre> <b>WIZARD :</b><br/>
                                    name : <input type="text" name="name" value={this.state.val4} onChange={this.handleChange4} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val5} onChange={this.handleChange5} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val6} onChange={this.handleChange6} /><br/><br/>

                                    <b>AMENITY :</b><br/>
                                    name : <input type="text" name="name" value={this.state.val7} onChange={this.handleChange7} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val8} onChange={this.handleChange8} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val9} onChange={this.handleChange9} /><br/><br/>

                                    <b>HOTEL_TYPE :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val10} onChange={this.handleChange10} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val11} onChange={this.handleChange11} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val12} onChange={this.handleChange12} /><br/><br/>

                                    <b>COORDINATE :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val13} onChange={this.handleChange13} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val14} onChange={this.handleChange14} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val15} onChange={this.handleChange15} /><br/><br/>

                                    <b>TAG :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val16} onChange={this.handleChange16} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val17} onChange={this.handleChange17} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val18} onChange={this.handleChange18} /><br/>
                                    displayable: <input type="text" name="displayble" value={this.state.val19} onChange={this.handleChange19} /><br/>
                                      <b>itemDetailsMap</b><br/>
                                       <b>sanitized_stays :</b> <br/>
                                    id : <input type="text" name="id" value={this.state.val20} onChange={this.handleChange20} /><br/>
                                    name : <input type="text" name="name" value={this.state.val21} onChange={this.handleChange21} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val22} onChange={this.handleChange22} /><br/>
                                    isEnabled: <input type="text" name="isEnabled" value={this.state.val23} onChange={this.handleChange23} /><br/>
                                    <b>sanitized_stays :</b> <br/>
                                    id : <input type="text" name="id" value={this.state.val24} onChange={this.handleChange24} /><br/>
                                    name : <input type="text" name="name" value={this.state.val25} onChange={this.handleChange25} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val26} onChange={this.handleChange26} /><br/>
                                    isEnabled: <input type="text" name="3" isEnabled={this.state.val27} onChange={this.handleChange27} /><br/><br/><br/>

                                    <b>POSTPAID_ALLOWED :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val28} onChange={this.handleChange28} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val29} onChange={this.handleChange29} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val30} onChange={this.handleChange30} /><br/><br/>

                                    <b>PROPERTY_TYPE :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val31} onChange={this.handleChange31} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val32} onChange={this.handleChange32} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val33} onChange={this.handleChange33} /><br/><br/>

                                    <b>GUEST_RATING :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val34} onChange={this.handleChange34} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val35} onChange={this.handleChange35} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val36} onChange={this.handleChange36} /><br/><br/>

                                    <b>MIN_RATING :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val37} onChange={this.handleChange37} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val38} onChange={this.handleChange38} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val39} onChange={this.handleChange39} /><br/><br/>

                                    <b>PRICE_RANGE :</b><br/>

                                    name : <input type="text" name="name" value={this.state.val40} onChange={this.handleChange40} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val41} onChange={this.handleChange41} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val42} onChange={this.handleChange42} /><br/><br/>

                                   <b>HOTEL_AMENITY :</b><br/>
                                    name : <input type="text" name="name" value={this.state.val43} onChange={this.handleChange43} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val44} onChange={this.handleChange44} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val45} onChange={this.handleChange45} /><br/><br/>

                                    <b>ROOM_AMENITY :</b><br/>
                                    name : <input type="text" name="name" value={this.state.val46} onChange={this.handleChange46} /><br/>
                                    isEnabled : <input type="text" name="isEnabled" value={this.state.val47} onChange={this.handleChange47} /><br/>
                                    priority : <input type="text" name="priority" value={this.state.val48} onChange={this.handleChange48} /><br/><br/>

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