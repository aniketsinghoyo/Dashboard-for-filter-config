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

export default class PriceRange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            key:this.props.keys,
            tile:this.props.tiles
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
        console.log(event.target.name);
        let x=this.state.tile;
        x[key][keys][keyss]=event.target.value;
        this.setState({tile:x});
        console.log(this.state.tile[key][keys][keyss]);
    }
    handleSubmit=(event)=>{
        //alert('A name was submitted: ');
        event.preventDefault();
        console.log(this.state.tile)
        const x=this.state.tile;

        axios.post("http://filtersuggestion-api-1.search.internal.oyorooms.ms/runtimeConfig/updateConfig?password=searchfilter@123&forceUpdate=true",x,
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
                                            <Typography><b>{keys}</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <form onSubmit={this.handleSubmit}>
                                                <div>
                                                    {

                                                        this.generateData(tile[key][keys]).map(keyss=>
                                                            <pre><b>{keyss} : <input type="text" name={keys} value={tile[key][keys][keyss]} style={{width: "380px"}} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/></b></pre>
                                                        )}
                                                    <input type="submit" value="Post"  />

                                                </div></form>
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

        );
    }
}