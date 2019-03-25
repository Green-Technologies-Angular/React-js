import React, { Component } from 'react';

class Header extends Component{
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
          return false;
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
    render(){
        return(
            <div className="container">
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
                        {this.props.chennai}
                        </td>
                        <td>
                        {this.props.csk}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
            
    }
}


export default Header;