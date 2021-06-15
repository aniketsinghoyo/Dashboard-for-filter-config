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

export default class CountryWid extends React.Component {
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
            val47:'',val48:'',val49:'',val50:'',val51:'',val52:'',val53:'',
            val54:'', val55:'', val56:'',val57:'',val58:'',
            val59:'',val60:'',val61:'',val62:'',val63:'',val64:'',val65:'',
            val66:'',val67:'',val68:'',val69:'',val70:'',val71:'',val72:'',
            val73:'',val74:'',val75:'',val76:'',val77:'',val78:''
        }
    }
    generateData(data) {

        const newData = Object.keys(data).reduce((result, currentKey) => {

            result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    handleChange(event,key,keys,keyss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][0][event.target.name]=event.target.value;

        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][0][event.target.name]);
    }
    handleChangel(event,key,keys,keyss,keysss) {
        //console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss][0][event.target.name][keysss]=event.target.value;
        this.setState({tile:x,col:true});
        console.log(this.state.tile[key][keys][keyss][0][event.target.name]);
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
                alert('something went wrong... ');alert('posted successfully');
                console.log(error);
        })
    }
    handleChangek = (event)=>{
        this.setState({kay: event.target.value,col:true});
    }
    handleChange1 = (event)=>{
        this.setState({val1: event.target.value,col:true});
    }
    handleChange2 = (event)=>{
        this.setState({val2: event.target.value,col:true});
    }
    handleChange3 = (event)=>{
        this.setState({val3: event.target.value,col:true});
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
    handleChange49 = (event)=> {
        this.setState({val49: event.target.value,col:true});
    }
    handleChange50 = (event)=> {
        this.setState({val50: event.target.value,col:true});
    }
    handleChange51 = (event)=> {
        this.setState({val51: event.target.value,col:true});
    }
    handleChange52 = (event)=> {
        this.setState({val52: event.target.value,col:true});
    }
    handleChange53 = (event)=> {
        this.setState({val53: event.target.value,col:true});
    }
    handleChange54 = (event)=> {
        this.setState({val54: event.target.value,col:true});
    }
    handleChange55 = (event)=> {
        this.setState({val55: event.target.value,col:true});
    }
    handleChange56 = (event)=> {
        this.setState({val56: event.target.value,col:true});
    }
    handleChange57 = (event)=> {
        this.setState({val57: event.target.value,col:true});
    }
    handleChange58 = (event)=> {
        this.setState({val58: event.target.value,col:true});
    }
    handleChange59 = (event)=> {
        this.setState({val59: event.target.value,col:true});
    }
    handleChange60 = (event)=> {
        this.setState({val60: event.target.value,col:true});
    }
    handleChange61 = (event)=> {
        this.setState({val61: event.target.value,col:true});
    }
    handleChange62 = (event)=> {
        this.setState({val62: event.target.value,col:true});
    }
    handleChange63 = (event)=> {
        this.setState({val63: event.target.value,col:true});
    }
    handleChange64 = (event)=> {
        this.setState({val64: event.target.value,col:true});
    }
    handleChange65 = (event)=> {
        this.setState({val65: event.target.value,col:true});
    }
    handleChange66 = (event)=> {
        this.setState({val66: event.target.value,col:true});
    }
    handleChange67 = (event)=> {
        this.setState({val67: event.target.value,col:true});
    }
    handleChange68 = (event)=> {
        this.setState({val68: event.target.value,col:true});
    }
    handleChange69 = (event)=> {
        this.setState({val69: event.target.value,col:true});
    }
    handleChange70 = (event)=> {
        this.setState({val70: event.target.value,col:true});
    }
    handleChange71 = (event)=> {
        this.setState({val71: event.target.value,col:true});
    }
    handleChange72 = (event)=> {
        this.setState({val72: event.target.value,col:true});
    }
    handleChange73 = (event)=> {
        this.setState({val73: event.target.value,col:true});
    }
    handleChange74 = (event)=> {
        this.setState({val74: event.target.value,col:true});
    }
    handleChange75 = (event)=> {
        this.setState({val75: event.target.value,col:true});
    }
    handleChange76 = (event)=> {
        this.setState({val76: event.target.value,col:true});
    }
    handleChange77 = (event)=> {
        this.setState({val77: event.target.value,col:true});
    }
    handleChange78 = (event)=> {
        this.setState({val78: event.target.value,col:true});
    }

    handleSubmit1=(event)=> {
        alert('A name was submitted: ');
        event.preventDefault();
        let x = this.state.tile;
        if(this.state.kay.length!=0) {
            if (this.state.val1.length != 0) {
                x[this.state.key][this.state.kay] = {};
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['itemCount'] = this.state.val1;
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['maxWidgetCount'] = this.state.val2;
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['enabled'] = this.state.val3;
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['priority'] = this.state.val4;
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val5;
                x[this.state.key][this.state.kay]['NEARBY_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val6;
            }
            if (this.state.val7.length != 0) {
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['itemCount'] = this.state.val7;
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['maxWidgetCount'] = this.state.val8;
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['enabled'] = this.state.val9;
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['priority'] = this.state.val10;
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val11;
                x[this.state.key][this.state.kay]['POPULAR_HOTELS_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val12;
            }
            if (this.state.val13.length != 0) {
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['itemCount'] = this.state.val13;
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val14;
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['enabled'] = this.state.val15;
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['priority'] = this.state.val16;
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val17;
                x[this.state.key][this.state.kay]['PRICE_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val18;
            }
            if (this.state.val19.length != 0) {
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['itemCount'] = this.state.val19;
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val20;
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['enabled'] = this.state.val21;
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['priority'] = this.state.val22;
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val23;
                x[this.state.key][this.state.kay]['PROPERTY_TYPE_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val24;
            }
            if (this.state.val25.length != 0) {
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['itemCount'] = this.state.val25;
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['maxWidgetCount'] = this.state.val26;
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['enabled'] = this.state.val27;
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['priority'] = this.state.val28;
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val29;
                x[this.state.key][this.state.kay]['DISCOUNT_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val30;
            }
            if (this.state.val31.length != 0) {
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['itemCount'] = this.state.val31;
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val32;
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['enabled'] = this.state.val33;
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['priority'] = this.state.val34;
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val35;
                x[this.state.key][this.state.kay]['TAG_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val36;
            }
            if (this.state.val37.length != 0) {
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['itemCount'] = this.state.val37;
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val38;
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['enabled'] = this.state.val39;
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['priority'] = this.state.val40;
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val41;
                x[this.state.key][this.state.kay]['RATING_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val42;
            }
            if (this.state.val43.length != 0) {
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['itemCount'] = this.state.val43;
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val44;
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['enabled'] = this.state.val45;
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['priority'] = this.state.val46;
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val47;
                x[this.state.key][this.state.kay]['LOCATION_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val48;
            }
            if (this.state.val49.length != 0) {
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['itemCount'] = this.state.val49;
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val50;
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['enabled'] = this.state.val51;
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['priority'] = this.state.val52;
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val53;
                x[this.state.key][this.state.kay]['POSTPAID_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val54;
            }
            if (this.state.val55.length != 0) {
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['itemCount'] = this.state.val55;
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val56;
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['enabled'] = this.state.val57;
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['priority'] = this.state.val58;
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val59;
                x[this.state.key][this.state.kay]['AMENITY_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val60;
            }
            if (this.state.val61.length != 0) {
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['itemCount'] = this.state.val61;
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val62;
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['enabled'] = this.state.val63;
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['priority'] = this.state.val64;
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val65;
                x[this.state.key][this.state.kay]['PROMOTED_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val66;
            }
            if (this.state.val67.length != 0) {
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['itemCount'] = this.state.val67;
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['maxWidgetCount'] = this.state.val68;
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['enabled'] = this.state.val69;
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['priority'] = this.state.val70;
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val71;
                x[this.state.key][this.state.kay]['WIZARD_FILTER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val72;
            }
            if (this.state.val73.length != 0) {
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'] = [{}];
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['itemCount'] = this.state.val73;
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['maxWidgetCount'] = this.state.val74;
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['enabled'] = this.state.val75;
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['priority'] = this.state.val76;
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['languageWiseDisplayHeader'] = {}
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['languageWiseDisplayHeader']['en'] = this.state.val77;
                x[this.state.key][this.state.kay]['DISCOVER_WIDGET'][0]['languageWiseDisplayHeader']['hi'] = this.state.val78;
            }
        }

        this.setState({tile:x});
        console.log(this.state.tile[this.state.key])

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
            {

                headers: {  'x-api-key':'DemoKeyForDemoClient',
                    'oyo-client':'demo'} })
            .then(response=>{ console.log("hari ke charno me pranaam");this.setState({col:false});alert('posted successfully');
            })
            .catch(error=>{
                alert('something went wrong...')
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
                    <AccordionDetails><div>
                    {this.generateData(tile[key]).map(keys=>
                        <Accordion>
                            <AccordionSummary>
                                <Typography><b>{keys} &nbsp;&nbsp;<button onClick={this.delete.bind(this,keys)}>Delete</button></b></Typography>
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
                                                        <form onSubmit={this.handleSubmit}>
                                                        <div>
                                                                            <pre><b>  itemCount: <input type="text" name="itemCount"  style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][0]['itemCount']} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/>
                                                                                <br/>
                                                                                          maxWidgetCount: <input type="text" name="maxWidgetCount" style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][0]['maxWidgetCount']} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/>
                                                                                <br/>
                                                                                                        enabled: <input type="text" name="enabled" style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][0]['enabled']} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/>
                                                                                <br/>
                                                                                                        priority: <input type="text" name="priority" style={{'width':'70px','height':'20px'}} value={tile[key][keys][keyss][0]['priority']} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/>
                                                                                <br/>
                                                                                    </b>
                                                                                <Accordion>
                                                                                <AccordionSummary>
                                                                                <Typography>languageWiseDisplayHeader</Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                <Typography>
                                                                                <div>
                                                                            {
                                                                                this.generateData(tile[key][keys][keyss][0]['languageWiseDisplayHeader']).map(keysss=>
                                                                                    <pre><b>{keysss} : <input type="text" name="languageWiseDisplayHeader"  style={{'width':'170px','height':'20px'}} value={tile[key][keys][keyss][0]['languageWiseDisplayHeader'][keysss]} onChange={(event)=>this.handleChangel(event,key,keys,keyss,keysss)}/></b></pre>
                                                                                )}
                                                                                </div>
                                                                                </Typography>
                                                                                </AccordionDetails>
                                                                                </Accordion>
                                                                                            </pre>

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
                    } <br/><form onSubmit={this.handleSubmit}><input type="submit" style ={{"color":this.state.col?"red":'green','font-size': '15px'}} value="Post" />
                    </form>
                        </div>
                        </AccordionDetails>
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
                                   <pre> <b>NEARBY_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val1} onChange={this.handleChange1} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val2} onChange={this.handleChange2} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val3} onChange={this.handleChange3} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val4} onChange={this.handleChange4} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val5} onChange={this.handleChange5} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val6} onChange={this.handleChange6} /><br/><br/><br/>

                                    <b>POPULAR_HOTELS_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val7} onChange={this.handleChange7} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val8} onChange={this.handleChange8} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val9} onChange={this.handleChange9} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val10} onChange={this.handleChange10} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val11} onChange={this.handleChange11} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val12} onChange={this.handleChange12} /><br/><br/><br/>

                                       <b>PRICE_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val13} onChange={this.handleChange13} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val14} onChange={this.handleChange14} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val15} onChange={this.handleChange15} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val16} onChange={this.handleChange16} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val17} onChange={this.handleChange17} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val18} onChange={this.handleChange18} /><br/><br/><br/>

                                       <b>PROPERTY_TYPE_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val19} onChange={this.handleChange19} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val20} onChange={this.handleChange20} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val21} onChange={this.handleChange21} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val22} onChange={this.handleChange22} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val23} onChange={this.handleChange23} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val24} onChange={this.handleChange24} /><br/><br/><br/>

                                       <b>DISCOUNT_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val25} onChange={this.handleChange25} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val26} onChange={this.handleChange26} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val27} onChange={this.handleChange27} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val28} onChange={this.handleChange28} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val29} onChange={this.handleChange29} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val30} onChange={this.handleChange30} /><br/><br/><br/>

                                       <b>TAG_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val31} onChange={this.handleChange31} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val32} onChange={this.handleChange32} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val33} onChange={this.handleChange33} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val34} onChange={this.handleChange34} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val35} onChange={this.handleChange35} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val36} onChange={this.handleChange36} /><br/><br/><br/>

                                       <b>RATING_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val37} onChange={this.handleChange37} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val38} onChange={this.handleChange38} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val39} onChange={this.handleChange39} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val40} onChange={this.handleChange40} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val41} onChange={this.handleChange41} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val42} onChange={this.handleChange42} /><br/><br/><br/>

                                       <b>LOCATION_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val43} onChange={this.handleChange43} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val44} onChange={this.handleChange44} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val45} onChange={this.handleChange45} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val46} onChange={this.handleChange46} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val47} onChange={this.handleChange47} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val48} onChange={this.handleChange48} /><br/><br/><br/>

                                       <b>POSTPAID_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val49} onChange={this.handleChange49} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val50} onChange={this.handleChange50} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val51} onChange={this.handleChange51} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val52} onChange={this.handleChange52} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val53} onChange={this.handleChange53} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val54} onChange={this.handleChange54} /><br/><br/><br/>

                                       <b>AMENITY_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val55} onChange={this.handleChange55} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val56} onChange={this.handleChange56} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val57} onChange={this.handleChange57} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val58} onChange={this.handleChange58} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val59} onChange={this.handleChange59} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val60} onChange={this.handleChange60} /><br/><br/><br/>

                                       <b>PROMOTED_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val61} onChange={this.handleChange61} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val62} onChange={this.handleChange62} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val63} onChange={this.handleChange63} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val64} onChange={this.handleChange64} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val65} onChange={this.handleChange65} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val66} onChange={this.handleChange66} /><br/><br/><br/>

                                       <b>WIZARD_FILTER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val67} onChange={this.handleChange67} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val68} onChange={this.handleChange68} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val69} onChange={this.handleChange69} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val70} onChange={this.handleChange70} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val71} onChange={this.handleChange71} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val72} onChange={this.handleChange72} /><br/><br/><br/>

                                       <b>DISCOVER_WIDGET :</b><br/>
                                    itemCount : <input type="text" name="enabled" value={this.state.val73} onChange={this.handleChange73} /><br/>
                                    maxWidgetCount : <input type="text" name="priority" value={this.state.val74} onChange={this.handleChange74} /><br/>
                                    enabled : <input type="text" name="enabled" value={this.state.val75} onChange={this.handleChange75} /><br/>
                                    priority: <input type="text" name="priority" value={this.state.val76} onChange={this.handleChange76} /><br/>
                                       <b>languageWiseDisplayHeader</b><br/>
                                        en : <input type="text" name="enabled" value={this.state.val77} onChange={this.handleChange77} /><br/>
                                       hi : <input type="text" name="priority" value={this.state.val78} onChange={this.handleChange78} /><br/><br/><br/>


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