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
        this.props.submitMethod(this.state);
    };
    onClickBack = () => {
      this.props.openForm("view");
    };
    render(){
        return(
            <div>
            <h2>{this.props.title}</h2>

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
                    <div>
                        <br/>
                        {this.props.showDeleteButton ? <button>Delete</button> : ""}
                    </div>
                </div>
            </div>
        )
    }
}