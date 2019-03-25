import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <table className="table">
          <thead>
            <tr>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.state.firstName}
              </td>
              <td>
                {this.state.lastName}
              </td>
            </tr>
            <tr>
              <td>
                {this.state.firstName}
              </td>
              <td>
                {this.state.lastName}
              </td>
            </tr><tr>
              <td>
                {this.state.firstName}
              </td>
              <td>
                {this.state.lastName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
