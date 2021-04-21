import React, { Component } from  'react';
import axios from 'axios';
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userid: ''
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios.post("http://jsonplaceholder.typicode.com/posts/",(this.state))
            .then(response=> {
            //console.log(response.data)
            //return response.json();
        })
            .catch(err=>console.log(err))



    }

    render() {
        const {userid}=this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={userid} name="userid" onChange={this.handleChange} />
                </label>


                <button type="submit"  >submit</button>
            </form>
            </div>
        );
    }
}

