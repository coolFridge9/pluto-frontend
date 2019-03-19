import React, { Component } from "react";
import "./App.css";
import ProtegesView from "./ProtegesView";
import AddPersonForm from "./AddPersonForm";
import axios from "axios/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
    };
  }


    onClickSwitchViewer = (formVisible) => {
    this.setState({ form: formVisible});
  };

  onClickSubmitAdd = (postData) => {
      axios.post("http://localhost:5000/",postData);
      this.setState({ form: false});
    };
  onClickSubmitEdit = (postData) => {
      axios.put("http://localhost:5000/",postData);
      this.setState({ form: false});

  };
    addPersonFormData = {title :"Add New Protege",  submitMethod: this.onClickSubmitAdd, showDelete: false};
    onClickSwitchForm = (editMode=false) => {
        if(editMode){
            this.addPersonFormData = {title : "Edit Protege", submitMethod: this.onClickSubmitEdit, showDelete: true}
        }
        else{
            this.addPersonFormData = {title :"Add New Protege",  submitMethod: this.onClickSubmitAdd, showDelete: false};
        }
    };

    render() {
      return <div className="App">
          <header className="App-header">
              <div>
                  {
                  this.state.form ?
                      <AddPersonForm title={this.addPersonFormData.title}
                                     submitMethod={this.addPersonFormData.submitMethod} showDeleteButton={this.addPersonFormData.showDelete} openForm={this.onClickSwitchViewer}/>
                   : <ProtegesView addPerson={this.onClickSwitchViewer} formType={this.onClickSwitchForm}/>
                  }
              </div>
          </header>
      </div>;
  }
}

export default App;
