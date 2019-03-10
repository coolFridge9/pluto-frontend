import React, {Component} from "react";
import axios from "axios";
export default class extends Component {
    deleteProtege = (event) =>{
        axios.delete("http://localhost:5000/", {data : event.target.name});
    };
    render() {
        return (<table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Slack Handle</th>
            </tr>
            {this.props.tableContent.map(row =>
                <tr>
                    <td>{row._firstName}</td>
                    <td>{row._lastName}</td>
                    <td>{row._email}</td>
                    <td>{row._slackHandle}</td>
                    <td>
                        {<button name={row._id} type="button" onClick={this.deleteProtege}>
                            Edit protege
                        </button>}
                    </td>
                </tr>
            )}
        </table>);
    }
}