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
    // {
    //   img: "https://i.pinimg.com/originals/17/fc/c0/17fcc0b5b5ec598e4c7d9caecc50b83b.jpg",
    //   title: 'Image',
    //   author: 'author',
    // },
    //   {
    //       img: "https://www.somagnews.com/wp-content/uploads/2020/05/25-21-e1590712700467.jpg",
    //       title: 'Image',
    //       author: 'author',
    //   },
    //   {
    //       img: "https://hollywoodlife.com/wp-content/uploads/2015/02/kristen-stewart-slams-critics-who-talk-crap-about-twilight-ftr.jpg?w=600",
    //       title: 'Image',
    //       author: 'author',
    //   },
    //   {
    //       img: process.env.REACT_APP_API_URL,
     //       open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir http://localhost:3000/ --disable-web-security
    //       title: 'Image',
    //       author: 'author',
    //   }
      // {/*<Box p={1} bgcolor="grey.300">*/}
      //  {/*    /!*<b>{key}</b>*!/*/}

      //  {/*    /!*<div><pre>{JSON.stringify(tile3[key], null, 2) }</pre></div>*!/*/}
    ];
  //TEPRAC  TCARPE TCEPRA TCEARP TCEAPR
  //LANOITAN L

export async function apiFetch() {
    //let x = await axios.get(process.env.REACT_APP_API_URL);
    let x = axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            this.setState({posts:response.data});
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    console.log("I am the alpha.")
    console.log(x);
}

export default function Data() {
    const classes = useStyles();

    const [tile, setTile] = useState([]);
    const [tile1, setTile1] = useState([]);
    const [tile2, setTile2] = useState([]);
    const [tile3, setTile3] = useState([]);
    const [tile4, setTile4] = useState([]);
    const [tile5, setTile5] = useState([]);
    const [tile6, setTile6] = useState([]);
    const [tile7, setTile7] = useState([]);
    const [tile8, setTile8] = useState([]);
    const [tile9, setTile9] = useState([]);
    const [tile10, setTile10] = useState([]);
    const [tile11, setTile11] = useState([]);
    const [tile12, setTile12] = useState([]);
    const [tile13, setTile13] = useState([]);
    const [tile14, setTile14] = useState([]);
    const [tile15, setTile15] = useState([]);
    const [tile16, setTile16] = useState([]);
    const [tile17, setTile17] = useState([]);
    const [tile18, setTile18] = useState([]);
    const [tile19, setTile19] = useState([]);
    const [tile20, setTile20] = useState([]);

    useEffect( async() => {
        //  const testURL = "http://filtersuggestion-api-1.search.internal.oyorooms.io/runtimeConfig/getConfig?password=searchfilter@123&forceUpdate=true";
        //
        // const myInit = {
        //     method: 'GET',
        //     mode: 'cors',
        //     headers: {
        //         "oyo-client":"demo","Access-Control-Allow-Origin" : "*",
        //
        //         "Access-Control-Allow-Credentials" : true,"Access-Control-Allow-Methods": "GET","x-api-key":"DemoKeyForDemoClient"}
        // };
        //
        // const myRequest = new Request(testURL, myInit);
        //
        //  await fetch(myRequest).then(function(response) {
        //     //if(response.ok){
        //     console.log(response);
        //     return response;
        //     // else{
        //     //     console.log("my life");
        //     // }
        // }).catch(function(e){
        //
        //     console.log(e);
        //  });
        axios.get("http://filtersuggestion-api-1.search.internal.oyorooms.io/runtimeConfig/getConfig?password=searchfilter@123&forceUpdate=true",
            {  headers: {  'x-api-key':'DemoKeyForDemoClient',
            'oyo-client':'demo'} })
            .then(response=>{
                //console.log(response.data);
                setTile(response.data);
                console.log("hari ke charno me pranaam");
                setTile1(response.data['cityConfigForLocality']);
                console.log(response.data['cityABFilterWidgetMap']['1']['DISCOVER_WIDGET'][0]['enabled'])
                setTile2(response.data['guidedModelToPriority']);
                setTile3(response.data['promotedHotelIdsMap']);
                setTile4(response.data['discoverDealId']);
                setTile5(response.data['searchableTags']);
                setTile6(response.data['cityWiseDisplayHeaderForPromotedWidget']);
                setTile7(response.data['maxGSOptionsAllowed']);
                setTile8(response.data['automatedGSEnableCityIds']);
                setTile10(response.data['promotedCityWidgetConfigMap']);
                setTile11(response.data['cityABFilterWidgetMap']);
                setTile12(response.data['countryWidgetConfigMap']);
                setTile13(response.data['countryWidgetPriorityConfigMap']);
                setTile14(response.data['maxCityWidgets']);
                setTile15(response.data['tags']);
                setTile16(response.data['priceRangeHeaderTemplates']);
                setTile17(response.data['countryWiseCurrencySymbols']);
                setTile18(response.data['searchableTags']);
                setTile19(response.data['searchableAmenityIds']);
                setTile20(response.data['applicableFilterConfig']);

               //setTile(response.data['promotedHotelIdsMap']['1']);
            })
            .catch(error=>{
                console.log("vffdbgfhgnbvcv");
                console.log(error);
            })
        // fetch(testURL, {
        //     method: 'GET',
        //     headers: {
        //         'oyo-client':'demo',
        //         'x-api-key':'DemoKeyForDemoClient'
        //     },
        // })
        //
        //     .then(res=>{
        //         console.log(res);
        //     })
        //     .catch(error=>{
        //
        //             console.log(error);
        //         })
        //
        // ;

    }, []);

    function generateData(data) {
        const newData = Object.keys(data).reduce((result, currentKey) => {

                result.push(currentKey);
            return result;
        }, []);
        return newData;
    }
    const [expanded, setExpanded] = React.useState('panel1');

    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };
   function handleChange(event) {
        return event.target.name=event.target.value;
    }

    return (

        <div ><city/>
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
                        return <City keys={key} tiles={tile}/>

                        }
                    else if (key == 'guidedModelToPriority') {
                        return(
                            <div>
                            <Accordion>
                                <AccordionSummary>
                                    <Typography><b>{key}</b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>{
                                            generateData(tile[key]).map(keys=>
                                                <pre><b>{keys} : {tile[key][keys]}</b></pre>
                                            )}
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        )}
                    else if (key == 'promotedHotelIdsMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div>
                                        {generateData(tile[key]).map(keys=>
                                            <Accordion>
                                                <AccordionSummary>
                                                    <Typography><b>{keys}</b></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <div>
                                                            {
                                                                generateData(tile[key][keys]).map(keyss=>
                                                                    <pre><b> {tile[key][keys][keyss]}</b></pre>
                                                                )}
                                                        </div>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                        }</div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'discoverDealId') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>{
                                                generateData(tile[key]).map(keys=>
                                                    <pre><b>{keys} : {tile[key][keys]}</b></pre>
                                                )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'searchableTags') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <pre><b>{tile[key][keys]}</b></pre>
                                                    )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'cityWiseDisplayHeaderForPromotedWidget') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <pre><b>{keys} : {tile[key][keys]}</b></pre>
                                                    )
                                                }
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'maxGSOptionsAllowed') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                <pre><b>{tile[key]}</b></pre>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'automatedGSEnableCityIds') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <pre><b>{keys} : {tile[key][keys]}</b></pre>
                                                    )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'promotedCityWidgetConfigMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    {generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {
                                                            generateData(tile[key][keys]).map(keyss=>
                                                                <pre><b>{keyss} : {tile[key][keys][keyss]}</b></pre>
                                                            )}
                                                    </div>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                    }
                                </Accordion>
                            </div>
                        )}
                    else if (key == 'cityABFilterWidgetMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    {generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {generateData(tile[key][keys]).map(keyss=>
                                                                        <Accordion>
                                                                            <AccordionSummary>
                                                                                <Typography><b>{keyss}</b></Typography>
                                                                            </AccordionSummary>
                                                                            <AccordionDetails>
                                                                                <Typography>

                                                                                    <div>
                                                                                        {
                                                                                            generateData(tile[key][keys][keyss]).map(keysss=>

                                                                                                    <pre><b>
                                                                                                        enabled: {tile[key][keys][keyss][keysss]['enabled']?'true':'false'}
                                                                                                        <br/>
                                                                                                        prority: {tile[key][keys][keyss][keysss]['priority']}

                                                                                                    </b></pre>

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
                                </Accordion>
                            </div>
                        )}else if (key == 'countryWidgetConfigMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    {generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {generateData(tile[key][keys]).map(keyss=>
                                                            <Accordion>
                                                                <AccordionSummary>
                                                                    <Typography><b>{keyss}</b></Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>

                                                                        <div>
                                                                            <pre><b>itemCount: {tile[key][keys][keyss][0]['itemCount']}
                                                                                            <br/>
                                                                                                        maxWidgetCount: {tile[key][keys][keyss][0]['maxWidgetCount']}
                                                                                            <br/>
                                                                                                        enabled: {tile[key][keys][keyss][0]['enabled']?'true':'false'}
                                                                                            <br/>
                                                                                                        priority: {tile[key][keys][keyss][0]['priority']}
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
                                                                                generateData(tile[key][keys][keyss][0]['languageWiseDisplayHeader']).map(keysss=>
                                                                                <pre><b>{keysss} : {tile[key][keys][keyss][0]['languageWiseDisplayHeader'][keysss]}</b></pre>
                                                                                )}
                                                                                </div>
                                                                                </Typography>
                                                                                </AccordionDetails>
                                                                                </Accordion>
                                                                                            </pre>

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
                                </Accordion>
                            </div>
                        )}else if (key == 'countryWidgetPriorityConfigMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <Accordion>
                                                            <AccordionSummary>
                                                                <Typography><b>{keys}</b></Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
                                                                    <div>
                                                                        {generateData(tile[key][keys]).map(keyss=>
                                                                            <Accordion>
                                                                                <AccordionSummary>
                                                                                    <Typography><b>{keyss}</b></Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                    <Typography>
                                                                                        <div>
                                                                                            {generateData(tile[key][keys][keyss]).map(keysss=>
                                                                                                        <Accordion>
                                                                                                                <AccordionSummary>
                                                                                                                    <Typography><b>{keysss}</b></Typography>
                                                                                                                </AccordionSummary>
                                                                                                                <AccordionDetails>
                                                                                                                    <Typography>
                                                                                                                        <div>
                                                                                                                            {
                                                                                                                                generateData(tile[key][keys][keyss][keysss]).map(keyssss => {
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
                                                                                                                                                                generateData(tile[key][keys][keyss][keysss][keyssss]).map(keysssss => {
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
                                                                                                                                                                                                generateData(tile[key][keys][keyss][keysss][keyssss][keysssss]).map(keyssssss=>
                                                                                                                                                                                                    <pre><b>{keyssssss} : {tile[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]}</b></pre>


                                                                                                                                                                                                )
                                                                                                                                                                                            }
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </Typography>
                                                                                                                                                                                </AccordionDetails>
                                                                                                                                                                            </Accordion>

                                                                                                                                                                        </div>
                                                                                                                                                                    }
                                                                                                                                                                    else { return <pre><b>{keysssss} : {tile[key][keys][keyss][keysss][keyssss][keysssss]}</b></pre> }
                                                                                                                                                                    }

                                                                                                                                                                 )

                                                                                                                                                            }
                                                                                                                                                        </div>
                                                                                                                                                    </Typography>
                                                                                                                                                </AccordionDetails>
                                                                                                                                            </Accordion>
                                                                                                                                        </div>
                                                                                                                                    }
                                                                                                                                    else {return <pre><b>{keyssss} : {tile[key][keys][keyss][keysss][keyssss]?'true':'false'}</b></pre>}
                                                                                                                                    }
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
                            </div>
                        )}else if (key == 'maxCityWidgets') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                <pre><b>{JSON.stringify(tile[key], null, 2)}</b></pre>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}else if (key == 'tags') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {generateData(tile[key]).map(keys=>
                                                    <Accordion>
                                                        <AccordionSummary>
                                                            <Typography><b>{keys}</b></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>

                                                                <div>
                                                                            <pre><b>id: {tile[key][keys]['id']}

                                                                                    </b>
                                                                                <Accordion>
                                                                                <AccordionSummary>
                                                                                <Typography>languageWiseDisplayHeader</Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                <Typography>
                                                                                <div>
                                                                            {
                                                                                generateData(tile[key][keys]['languageWiseWidgetHeaderText']).map(keyss=>
                                                                                    <pre><b>{keyss} : {tile[key][keys]['languageWiseWidgetHeaderText'][keyss]}</b></pre>
                                                                                )}
                                                                                </div>
                                                                                </Typography>
                                                                                </AccordionDetails>
                                                                                </Accordion>
                                                                                            </pre>

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
                            </div>
                        )}else if (key == 'priceRangeHeaderTemplates') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {generateData(tile[key]).map(keys=>
                                                    <Accordion>
                                                        <AccordionSummary>
                                                            <Typography><b>{keys}</b></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <div>
                                                                    {
                                                                        generateData(tile[key][keys]).map(keyss=>
                                                                            <pre><b>{keyss} : {tile[key][keys][keyss]}</b></pre>
                                                                        )}
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
                            </div>
                        )}else if (key == 'countryWiseCurrencySymbols'||key=='requestLevelCache') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>{
                                                generateData(tile[key]).map(keys=> {
                                                    if(keys=='enable')
                                                       return <pre><b>{keys} : {tile[key][keys]?'true':'false'}</b></pre>
                                                    return <pre><b>{keys} : {tile[key][keys]}</b></pre>
                                                    }
                                                )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}else if (key == 'supportedLanguages') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <pre><b>{tile[key][keys]} </b></pre>
                                                    )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}else if (key == 'searchableAmenityIds') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                    generateData(tile[key]).map(keys=>
                                                        <pre><b>{tile[key][keys]} </b></pre>
                                                    )}
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}else if (key == 'applicableFilterConfig') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {
                                                generateData(tile[key]).map(keys=>
                                                <Accordion>
                                                    <AccordionSummary>
                                                        <Typography><b>{keys}</b></Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <div>
                                                                {generateData(tile[key][keys]).map(keyss=>
                                                                    <Accordion>
                                                                        <AccordionSummary>
                                                                            <Typography><b>{keyss}</b></Typography>
                                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <Typography>

                                                                                <div>
                                                                                    {
                                                                                        generateData(tile[key][keys][keyss]).map(keysss=>
                                                                                        <Accordion>
                                                                                           <AccordionSummary>
                                                                                             <Typography><b>{keysss}</b></Typography>
                                                                                           </AccordionSummary>
                                                                                        <AccordionDetails>
                                                                                            <Typography>
                                                                                                <div>
                                                                                                    {
                                                                                                        generateData(tile[key][keys][keyss][keysss]).map(keyssss=> {
                                                                                                            if(keyssss=='itemDetailsMap'||keyssss=='Amenity')
                                                                                                            { return <div>
                                                                                                                <Accordion>
                                                                                                                    <AccordionSummary>
                                                                                                                        <Typography><b>{keyssss}</b></Typography>
                                                                                                                    </AccordionSummary>
                                                                                                                    <AccordionDetails>
                                                                                                                        <div>{
                                                                                                                generateData(tile[key][keys][keyss][keysss][keyssss]).map(keysssss=>
                                                                                                                <Accordion>
                                                                                                                    <AccordionSummary>
                                                                                                                        <Typography><b>{keysssss}</b></Typography>
                                                                                                                    </AccordionSummary>
                                                                                                                    <AccordionDetails>
                                                                                                                        <Typography>
                                                                                                                            <div>
                                                                                                                                {
                                                                                                                                    generateData(tile[key][keys][keyss][keysss][keyssss][keysssss]).map(keyssssss=> {
                                                                                                                                        if(keyssssss=='isEnabled')
                                                                                                                                        {
                                                                                                                                            return <pre><b>{keyssssss} : {tile[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]?'true':'false'}</b></pre>
                                                                                                                                        }
                                                                                                                                        else {return  <pre><b>{keyssssss} : {tile[key][keys][keyss][keysss][keyssss][keysssss][keyssssss]}</b></pre>}
                                                                                                                                    })}
                                                                                                                            </div>
                                                                                                                        </Typography>
                                                                                                                    </AccordionDetails>
                                                                                                                </Accordion>
                                                                                                                )}</div>
                                                                                                            </AccordionDetails>
                                                                                                                </Accordion>




                                                                                                            </div>}

                                                                                                            else if(keyssss=='isEnabled'||keyssss=='displayable')
                                                                                                            {return <pre><b>{keyssss} : {tile[key][keys][keyss][keysss][keyssss]?'true':'false'}</b></pre>}
                                                                                                            else {return <pre><b>{keyssss} : {tile[key][keys][keyss][keysss][keyssss]}</b></pre>}
                                                                                                            }
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
                            </div>
                        )}
                    else if (key == 'discoverCityWidgetConfigMap') {
                        return(
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{key}</b></Typography>
                                    </AccordionSummary>
                                    {generateData(tile[key]).map(keys=>
                                        <Accordion>
                                            <AccordionSummary>
                                                <Typography><b>{keys}</b></Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <div>
                                                        {
                                                            generateData(tile[key][keys]).map(keyss=>
                                                                <pre><b>{tile[key][keys][keyss]}</b></pre>
                                                            )}
                                                    </div>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                    }
                                </Accordion>
                            </div>
                        )}
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

