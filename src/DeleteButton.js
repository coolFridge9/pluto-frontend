import React, {Component} from "react";
import axios from "axios";
export default class extends Component {
    deleteProtege = () => {
        axios.delete("http://localhost:5000/", {data : this.props.id});
        this.props.view("view");
    };
    render(){
        return <button type="button" onClick={this.deleteProtege}>
            Delete
        </button>;
    }
}