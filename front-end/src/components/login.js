import React, { Component } from 'react';

 export default class Login extends Component {


    render(){
        return(
            <div className="ui container">  
                <button className="ui button" onClick={this.props.signup}>Not a user? Signup!</button>
                <form className="ui small form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" value={this.props.username} onChange={this.props.usernameChange} name="username" placeholder="username"/>
                    </div>
                     <div className="field">
                        <label>Password</label>
                        <input type="password" value={this.props.password} onChange={this.props.passwordChange} name="password" placeholder="password"/>
                    </div>
                    <button className="ui button" onClick={this.props.login}>Login</button>
                </form>      
            </div>
        )
    }
  
}
