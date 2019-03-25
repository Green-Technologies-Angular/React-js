import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName : "Tamil",
      lastName : "Mani"
    }
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
