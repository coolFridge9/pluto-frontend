import React, {Component} from "react";
import DeleteButton from "./DeleteButton"
import axios from "axios";

export default class AddPersonForm extends Component{
    constructor(props) {
        super(props);
        const protege = (this.props.protege === undefined) ? {} : this.props.protege;
        this.state = {
            submitData: protege,
            modifiableData: protege
        }
    }
    handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({
            submitData:{ ...this.state.submitData,
                [event.target.name]: event.target.value
            }
        });
        console.log(this.state.submitData);
        this.setState({modifiableData:""})
        };
    onClickSubmit = () => {
        this.props.submitMethod(this.state.submitData);
    };
    onClickBack = () => {
      this.props.view("view");
    };
    render(){
        return(
            <div>
            <h2>{this.props.title}</h2>
            <form>
                <label>
                    First Name: <input value={this.state.modifiableData._firstName} name="_firstName" type="text" onChange={this.handleChange}/><br/>
                </label>
                <label>
                    Last Name: <input value={this.state.modifiableData._lastName}name="_lastName" type="text" onChange={this.handleChange}/><br/>
                </label>
                <label>
                    email: <input value={this.state.modifiableData._email} name="_email" type="text" onChange={this.handleChange}/><br/>
                </label>
                <label>
                    slack handle: <input value={this.state.modifiableData._slackHandle} name="_slackHandle" type="text" onChange={this.handleChange}/><br/>
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
                        {this.props.protege ? <DeleteButton id={this.props.protege._id} view={this.props.view}/> : ""}
                    </div>
                </div>
            </div>
        )
    }
}