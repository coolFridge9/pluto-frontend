import React, { Component } from "react";
import "./App.css";
import ProtegesView from "./ProtegesView";
import AddPersonForm from "./AddPersonForm";
import axios from "axios/index";

class App extends Component {

    constructor(props) {

        super();
        this.state = {
            protegeForEdit: {},
            viewSelection: "view"
        };
    }
    getEditData = (protegeForEdit) => {
        this.setState({protegeForEdit});
    };

    switchViewer = (view) =>{this.setState({ viewSelection: view});};

    onClickSwitchViewer = (view) => {this.switchViewer(view);};
    onClickSubmitAdd = (postData) => {
      axios.post("http://ec2-54-206-41-146.ap-southeast-2.compute.amazonaws.com:5000",postData);
      this.switchViewer("view");
    };
    onClickSubmitEdit = (postData) => {
      axios.put("http://ec2-54-206-41-146.ap-southeast-2.compute.amazonaws.com:5000",postData);
      this.switchViewer("view");
    };

    getViews(key) {
        const protegeName = "Edit Protege: " + this.state.protegeForEdit._firstName + " " + this.state.protegeForEdit._lastName;
        const views = {
            add: <AddPersonForm title="Add New Protege" submitMethod={this.onClickSubmitAdd} view={this.onClickSwitchViewer}/>,
            edit: <AddPersonForm title={protegeName} submitMethod={this.onClickSubmitEdit} protege={this.state.protegeForEdit} view={this.onClickSwitchViewer}/>,
            view: <ProtegesView view={this.onClickSwitchViewer} getProtegeData={this.getEditData}/>
        };
        return views[key]
    }

    render() {
        return <div className="App">
          <header className="App-header">
              <div>
                  {
                  this.getViews(this.state.viewSelection)
                  }
              </div>
          </header>
      </div>;
  }
}

export default App;
