import React, { Component } from 'react';

class Header extends Component{
    
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
                        {this.props.firstN}
                        </td>
                        <td>
                        {this.props.lastN}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
            
    }
}


export default Header;