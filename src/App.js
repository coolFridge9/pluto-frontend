import React, { Component } from "react";
import "./App.css";
import ProtegesView from "./ProtegesView";
import AddPersonForm from "./AddPersonForm";
import axios from "axios/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      addPersonForm: false,
    };
  }
  onClickSwitchViewer = (formVisible) => {
    this.setState({ addPersonForm: formVisible});
  };

  onClickSubmit = (postData) => {
      axios.post("http://localhost:5000/",postData);
      this.setState({ addPersonForm: false});
    };
  render() {
      return <div className="App">
          <header className="App-header">
              <div>
                  {
                  this.state.addPersonForm ? <AddPersonForm title="Add New Protege" submitMethod={this.onClickSubmit} showDeleteButton={false} openForm={this.onClickSwitchViewer}/>
                   : <ProtegesView addPerson={this.onClickSwitchViewer}/>
                  }
              </div>
          </header>
      </div>;
  }
}

export default App;
