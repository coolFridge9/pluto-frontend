import React, { Component } from "react";
import "./App.css";
import ProtegesView from "./ProtegesView";
import AddPersonForm from "./AddPersonForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: {},
      //isLoading: true,
      addPersonForm: false,
      // button : "add someone"
    };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => axios.get("http://localhost:5000/").then(response => {
  //     this.setState({
  //       data: response.data,
  //       isLoading: false
  //     });
  //   }),1000
  // )}
  // componentWillUnmount(){
  //   clearInterval(this.timerID);
  // }

  onClickSwitchViewer = (formVisible) => {
    this.setState({ addPersonForm: formVisible});
  };
  // onClickFormSubmit = () => {
  //   this.setState({ addPersonForm: false, button : "add someone" });
  // };

// buttonMapping = {
//   "add someone" : this.onClickSwitchViewer,
//     "submit" : this.onClickFormSubmit
// };


  render() {
      return <div className="App">
          <header className="App-header">
              <div>
                  {
                  this.state.addPersonForm ? <AddPersonForm openForm={this.onClickSwitchViewer}/>
                   : <ProtegesView addPerson={this.onClickSwitchViewer}/>
                  }
              </div>
              {/*&nbsp;*/}
              {/*<button type="button" onClick={this.buttonMapping[this.state.button]}>*/}
                  {/*{this.state.button}*/}
              {/*</button>*/}
          </header>
      </div>;
  }
}

export default App;
