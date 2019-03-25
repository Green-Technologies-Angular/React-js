import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName : "Tamil",
      lastName : "Mani",
      name : "Tamil Mani"
    }
  }
  updateName = () => {
    this.setState({
      name : "Welcome to chennai"
    })
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!----FIRST')
  }
  componentDidMount() {
      console.log('Component DID MOUNT!----SECOND')
  }
  componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
      return true;
  }
  componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button name="click" onClick={this.updateName}>click</button>
        <Header chennai={this.state.firstName} csk={this.state.lastName}/>
      </div>
    );
  }
}

export default App;
