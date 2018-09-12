import React, { Component } from 'react';

//  export default class Login extends Component {


//     render(){
//         return(
//             <div className="ui container">  
//                 <button className="ui button" onClick={this.props.signup}>Not a user? Signup!</button>
//                 <form className="ui small form">
//                     <div className="field">
//                         <label>Username</label>
//                         <input type="text" value={this.props.username} onChange={this.props.usernameChange} name="username" placeholder="username"/>
//                     </div>
//                      <div className="field">
//                         <label>Password</label>
//                         <input type="password" value={this.props.password} onChange={this.props.passwordChange} name="password" placeholder="password"/>
//                     </div>
//                     <button className="ui button" onClick={this.props.login}>Login</button>
//                 </form>      
//             </div>
//         )
//     }
  
// }

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = (props) => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' color='teal' textAlign='center'>
          Welcome to GetFit
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' 
            iconPosition='left' 
            value={props.username} 
            onChange={props.usernameChange} 
            name="username" 
            placeholder='Username' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={props.password} 
              onChange={props.passwordChange} 
              name="password"
            />

            <Button color='teal' onClick={props.login} fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a onClick={props.signup}>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm