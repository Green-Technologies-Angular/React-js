import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName : "Tamil",
      lastName : "Mani",
      name : "Tamil Mani",
      check : true
    }
  }
  updateName = () => {
    this.setState({
      name : "Welcome to chennai"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button name="click" onClick={this.updateName}>click</button>
        {this.state.check}
        <Header chennai={this.state.firstName} csk={this.state.lastName}/>
      </div>
    );
  }
}

export default App;
