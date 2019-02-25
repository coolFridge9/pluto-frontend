import React, { Component } from "react";
import "./App.css";
import TableComponent from "./TableComponent";
import AddPersonForm from "./AddPersonForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoading: true,
      addPersonForm: false,
      button : "add someone"
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => axios.get("http://localhost:5000/").then(response => {
      this.setState({
        data: response.data,
        isLoading: false
      });
    }),1000
  )}
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  onClickAddPerson = () => {
    this.setState({ addPersonForm: true, button : "submit" });
  };
  onClickFormSubmit = () => {
    this.setState({ addPersonForm: false, button : "add someone" });
  };

buttonMapping = {
  "add someone" : this.onClickAddPerson,
    "submit" : this.onClickFormSubmit
};


  render() {
      return <div className="App">
          <header className="App-header">
              <div>
                  {
                    this.state.isLoading ? "LOADING..."
                  : this.state.addPersonForm ? <AddPersonForm/>
                  : <TableComponent tableContent={this.state.data}/>
                  }
              </div>
              &nbsp;
              <button type="button" onClick={this.buttonMapping[this.state.button]}>
                  {this.state.button}
              </button>
          </header>
      </div>;
  }
}

export default App;
