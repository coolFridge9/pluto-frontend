import React, {Component} from "react";
import axios from "axios";
export default class extends Component {
    deleteProtege = () => {
        axios.delete("http://ec2-54-206-41-146.ap-southeast-2.compute.amazonaws.com:5000", {data : this.props.id});
        this.props.view("view");
    };
    render(){
        return <button type="button" onClick={this.deleteProtege}>
            Delete
        </button>;
    }
}