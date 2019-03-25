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
        debugger;
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
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <div className="imgcontainer">
                        <img src="./img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname"  />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" />
                            
                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="container bg-footer">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                    </form>
                {/* <h2>User Name</h2>
                <input type="text" name="username"  id="data"
                        value={username} 
                        onChange={this.handleChange}/>
                <h2>Password</h2>
                <input type="password" name="password" 
                        value={password} 
                        onChange={this.handleChange} />
                <br/>
                <button onClick={this.redirectPage}>Login</button> */}
            </div>
        );
    }
}

export default Login;

