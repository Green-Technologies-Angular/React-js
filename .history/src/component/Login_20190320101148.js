import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username  : '',
            password : ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    redirectPage = () => {
        let { username, password } = this.state; 
        this.props.history.push('/Home');
    }
    render() {
        const { username, password } = this.state; 
        return (<div>
            <h1>Login Page</h1>
            <br/>
            <h2>User Name</h2>
            <input type="text" name="username" 
                    value={username} 
                    onChange={this.handleChange}/>
            <h2>Password</h2>
            <input type="password" name="password" 
                    value={password} 
                    onChange={this.handleChange} />
            <br/>
            <button onClick={this.redirectPage}>Login</button>
        </div>);
    }
}

export default Login;

