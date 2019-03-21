import React, { Component } from "react";
import "./App.css";
import ProtegesView from "./ProtegesView";
import AddPersonForm from "./AddPersonForm";
import axios from "axios/index";

class App extends Component {
    state = {
        viewSelection: "view"
    };
    protegeForEdit={};
    getEditData = (protegeData) => {
        this.protegeForEdit = protegeData
    };

    switchViewer = (view) =>{
        this.setState({ viewSelection: view});
    };

    onClickSwitchViewer = (view) => {
    this.switchViewer(view);
  };
  onClickSubmitAdd = (postData) => {
      axios.post("http://localhost:5000/",postData);
      this.switchViewer("view");
    };
  onClickSubmitEdit = (postData) => {
      axios.put("http://localhost:5000/",postData);
      this.switchViewer("view");
  };
    views = {
        add: <AddPersonForm title="Add New Protege" submitMethod={this.onClickSubmitAdd} showDeleteButton={false} openForm={this.onClickSwitchViewer}/>,
        edit: <AddPersonForm title="Edit Protege" submitMethod={this.onClickSubmitEdit} showDeleteButton={true} openForm={this.onClickSwitchViewer}/>,
        view: <ProtegesView view={this.onClickSwitchViewer} getProtegeData={this.getEditData}/>
    };

    render() {
      return <div className="App">
          <header className="App-header">
              <div>
                  {
                  this.views[this.state.viewSelection]
                  }
              </div>
          </header>
      </div>;
  }
}

export default App;
