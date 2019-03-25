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
        <table border="1">
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
                First Name
              </td>
              <td>
                Last Name
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
