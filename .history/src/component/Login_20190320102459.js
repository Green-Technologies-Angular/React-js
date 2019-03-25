import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username  : '',
            password : ''
        }
        //this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name,value)
        this.setState({
            [name] : value
        });
    }
    redirectPage = () => {
        let { username, password } = this.state; 
        if(username === "username" && password === "password"){
            this.props.history.push('/Home');
        }else{
            this.setState({
                username  : '',
                password : ''
            });
            alert("Invalid username or password")
        }
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

