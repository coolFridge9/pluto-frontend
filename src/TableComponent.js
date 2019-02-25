import React, {Component} from "react";
import axios from "axios";
import "./Table.css"
export default class TableComponent extends Component {
    deleteProtege = (event) =>{
        axios.delete("http://localhost:5000/", {data : event.target.name});
    };
    render(){
        return(
        <div>
            <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Slack Handle</th>
                <th>delete</th>
            </tr>
                {this.props.tableContent.map(row =>
                    <tr>
                        <td>{row._firstName}</td>
                        <td>{row._lastName}</td>
                        <td>{row._email}</td>
                        <td>{row._slackHandle}</td>
                        <td>
                            {<button name={row._slackHandle} type="button" onClick={this.deleteProtege}/>}
                        </td>
                    </tr>

                )}
            </table>
        </div>);
    }
}
