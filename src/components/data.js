import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Box, Button} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
//import InfoIcon from '@material-ui/icons/Info';   2436
import City from './cityForConfigLocality';
import Guided from './guidedModelToPriority';
import Promoted from './promotedHotelIdsMap';
import Discover from "./discoverDealId";
import Search from "./searchableTags";
import CityWise from "./cityWiseDisplayHeaderForPromotedWidget";
import Maxgs from "./maxGSOptionsAllowed";
import Mings from "./minGSOptionalsAllowed";
import PromotedCity from "./promotedCityWidgetConfigMap";
import DiscoverCity from "./discoverCityWidgetConfigMap";
import CityAB from "./cityABFilterWidgetMap";
import PriceRange from "./priceRangeHeaderTemplates";
import CountryWise from "./countryWiseCurrencySymbols";
import SupportedLang from "./supportedLanguages";
import RequestLevel from "./requestLevelCache";
import SearchableAme from "./searchableAmenityIds";
import EnableAme from "./enableAmenityFilterAtRoomCategoryLevel";
import MaxCity from "./maxCityWidgets";
import Automated from "./automatedGSEnableCityIds";
import Tags from "./tags";
import CountryWid from "./countryWidgetConfigMap";
import Country from "./countryWidgetPriorityConfigMap";
import Applicable from "./applicableFilterConfig";
//import API_URL from "../../dashboard/env";
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
  const tileData = [
    //       img: process.env.REACT_APP_API_URL,
     //       open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir http://localhost:3000/ --disable-web-security

      // {/*<Box p={1} bgcolor="grey.300">*/}
      //  {/*    /!*<b>{key}</b>*!/*/}

      //  {/*    /!*<div><pre>{JSON.stringify(tile3[key], null, 2) }</pre></div>*!/*/}
    ];

export default function Data() {
    const classes = useStyles();
    const [tile, setTile] = useState([]);
    useEffect( async() => {
        axios.get(process.env.REACT_APP_API_URL,
                {  headers: {  'x-api-key':'DemoKeyForDemoClient',
                        'oyo-client':'demo'} })
            .then(response=>{
                // console.log(process.env.REACT_APP_API_URL);
                setTile(response.data);
                console.log("hari ke charno me pranaam");
            })
            .catch(error=>{
                alert('something went wrong...')
                console.log(error);
            })

    }, []);

    function generateData(data) {
        const newData = Object.keys(data).reduce((result, currentKey) => {

                result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    const [expanded, setExpanded] = React.useState('panel1');

   function handleChange(event) {
        return event.target.name=event.target.value;
    }

    return (

        <div >
            <Box
                display="flex"
                flexWrap="nowrap"
                p={1}
                m={1}
                bgcolor="background.paper"
                css={{ maxWidth: 400 }}
            >
                { generateData(tile).map(key=> {
                    if (key == 'cityConfigForLocality') {
                        return <City keys={key} tiles={tile}/>}
                    else if (key == 'guidedModelToPriority') {
                        return <Guided keys={key} tiles={tile}/>}
                    else if (key == 'promotedHotelIdsMap') {
                        return <Promoted keys={key} tiles={tile}/>}
                    else if (key == 'discoverDealId') {
                        return <Discover keys={key} tiles={tile}/>}
                    else if (key == 'searchableTags') {
                        return <Search keys={key} tiles={tile}/>}
                    else if (key == 'cityWiseDisplayHeaderForPromotedWidget') {
                        return <CityWise keys={key} tiles={tile}/>}
                    else if (key == 'maxGSOptionsAllowed') {
                        return <Maxgs keys={key} tiles={tile}/>}
                    else if (key == 'minGSOptionsAllowed') {
                        return <Mings keys={key} tiles={tile}/>}
                    else if (key == 'automatedGSEnableCityIds') {
                        return <Automated keys={key} tiles={tile}/>}
                    else if (key == 'promotedCityWidgetConfigMap') {
                        return <PromotedCity keys={key} tiles={tile}/>}
                    else if (key == 'cityABFilterWidgetMap') {
                        return <CityAB keys={key} tiles={tile}/>}
                    else if (key == 'countryWidgetConfigMap') {
                        return <CountryWid keys={key} tiles={tile}/>}
                    else if (key == 'countryWidgetPriorityConfigMap') {
                        return <Country keys={key} tiles={tile}/>}
                    else if (key == 'maxCityWidgets') {
                        return <MaxCity keys={key} tiles={tile}/>}
                    else if (key == 'tags') {
                        return <Tags keys={key} tiles={tile}/>}
                    else if (key == 'priceRangeHeaderTemplates') {
                        return <PriceRange keys={key} tiles={tile}/>}
                    else if (key == 'countryWiseCurrencySymbols') {
                        return <CountryWise keys={key} tiles={tile}/>}
                    else if (key=='requestLevelCache') {
                        return <RequestLevel keys={key} tiles={tile}/>}
                    else if (key == 'supportedLanguages') {
                        return <SupportedLang keys={key} tiles={tile}/>}
                    else if (key == 'searchableAmenityIds') {
                        return <SearchableAme keys={key} tiles={tile}/>}
                    else if (key == 'applicableFilterConfig') {
                        return <Applicable keys={key} tiles={tile}/>}
                    else if (key == 'discoverCityWidgetConfigMap') {
                        return <DiscoverCity keys={key} tiles={tile}/>}
                    else if (key == 'enableAmenityFilterAtRoomCategoryLevel') {
                        return <EnableAme keys={key} tiles={tile}/>}
                    else {return(
                    <div>
                        <Accordion>
                            <AccordionSummary>
                                <Typography><b>{key}</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div>{
                                        <pre><b> {JSON.stringify(tile[key],null,2)}</b></pre>
                                         }
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )}
                }) }

            </Box>
        </div>

           );
}

