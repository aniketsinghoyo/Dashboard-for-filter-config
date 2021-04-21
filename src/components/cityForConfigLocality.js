import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
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

export default class City extends React.Component {
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
        let path = event.target.name.split('.');
        let depth = path.length;
        let stat = { ...this.state.tile };
        let ref = stat;
        for (let i = 0; i < depth; i += 1) {
            if (i === depth - 1) {
                ref[path[i]] = event.target.value;
            } else {
                ref = ref[path[i]];
            }
        }
        this.setState({tile:stat});
    }
    handleSubmit(event) {
        alert('A name was submitted: ');
        event.preventDefault();
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
                            {this.generateData(tile[key]).map(keys=>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography><b>{keys}</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <form onSubmit={this.handleSubmit}>
                                                {
                                                    this.generateData(tile[key][keys]).map(keyss=>
                                                        <pre><b>{keyss} : <input type="text" name={keys} value={tile[key][keys][keyss]} onChange={(event)=>this.handleChange(event,key,keys,keyss)}/></b></pre>
                                                    )}
                                                <input type="submit" value="Submit" />
                                            </form>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                            }

                        </AccordionDetails>
                    </Accordion>
                </div>

        );
    }
}