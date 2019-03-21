import React, {Component} from "react";
export default class extends Component {
    editProtege = (row) =>{
        this.props.view("edit");
        this.props.getProtegeData(row);
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
                        {<button name={row._id} type="button" onClick={() => {this.editProtege(row)}}>
                            Edit protege
                        </button>}
                    </td>
                </tr>
            )}
        </table>);
    }
}