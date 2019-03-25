import React, { Component } from 'react';
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
        <Header />
      </div>
    );
  }
}

export default App;
