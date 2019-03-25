import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }
    redirectPage = () => {
        this.props.history.push('/Home');
    }
    render() {
        return (<div>
            <h1>Login Page</h1>
            <br/>
            <h2>User Name</h2>
            <input type="text" name="username" 
                    value={name} 
                    onChange={this.handleChange}/>
            <h2>Password</h2>
            <input type="password" name="password" 
                    value={name} 
                    onChange={this.handleChange} />
            <br/>
            <button onClick={this.redirectPage}>Login</button>
        </div>);
    }
}

export default Login;

