import React, {Component} from "react";
import axios from "axios";
import "./Table.css"
import Table from "./Table";
export default class ProtegesView extends Component {
    constructor(){
        super();
        this.state = {
            tableContent: {},
            isLoading:true,
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => axios.get("http://ec2-54-206-41-146.ap-southeast-2.compute.amazonaws.com:5000").then(response => {
                this.setState({
                    tableContent: response.data,
                    isLoading: false
                });
            }),1000
        )}
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    onClickAddProtege = () => {
        this.props.view("add");
    };

    render(){
        return(
        <div>
            <div>
                <h2>List of Proteges</h2>
            </div>
            {this.state.isLoading ? "LOADING TABLE..."
            : <Table tableContent={this.state.tableContent} view={this.props.view} getProtegeData={this.props.getProtegeData}/>}
            &nbsp;
            <div>
                <button type="button" onClick={this.onClickAddProtege}>
                    add protege
                </button>
            </div>
        </div>);
    }
}
