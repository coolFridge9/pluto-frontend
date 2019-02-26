import React, {Component} from "react";
import axios from "axios";

export default class AddPersonForm extends Component{
    constructor() {
        super();
        this.state = {
            firstName: undefined,
            lastName: undefined,
            preferredName: undefined,
            email: undefined,
            slackHandle: undefined
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        };
    onClickSubmit = () => {
        axios.post("http://localhost:5000/",this.state);
        this.props.openForm(false);
    };
    onClickBack = () => {
      this.props.openForm(false);
    };
    render(){
        return(
            <div>
            <h2>Add a new person to db</h2>

            <form>
                <label>
                    First Name: <input name="firstName" type="text" onChange={this.handleChange}/><br></br>
                </label>
                <label>
                    Last Name: <input name="lastName" type="text" onChange={this.handleChange}/><br></br>
                </label>
                <label>
                    email: <input name="email" type="text" onChange={this.handleChange}/><br></br>
                </label>
                <label>
                    slack handle: <input name="slackHandle" type="text" onChange={this.handleChange}/><br></br>
                </label>
            </form>
                &nbsp;
                <div>
                    <button type="button" onClick={this.onClickSubmit}>
                        submit
                    </button>
                    &nbsp;
                    &nbsp;
                    <button type="button" onClick={this.onClickBack}>
                        back
                    </button>
                </div>
            </div>
        )
    }
}