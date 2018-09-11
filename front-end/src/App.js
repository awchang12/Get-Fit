import React, { Component } from 'react';
import './App.css';
import Login from "./components/login"
import UserContainer from './containers/userContainer'
import Signup from './components/signup'



class App extends Component {
  state={
    username: "",
    password: "",
    signup: false
  }

  login = e => {
    e.preventDefault()
    let params = {
        username: this.state.username,
        password: this.state.password
    }

    let url = "http://localhost:3000/login";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then(res => res.json())
    .then(data => {
        if(data.success) {
            localStorage.setItem("token", data.token);
            this.setState({ error: "", password: "" })
        } else {
            this.setState({ error: "Invalid username or password" });
        }
    })
}
  logout = () => {
    localStorage.clear()
    this.setState({
      username: "",
      password: ""
    })
  }
  onUsernameChange = e => this.setState({username: e.target.value})

  onPasswordChange = e => this.setState({password: e.target.value})

  toggleSignup = () => {
    this.setState({
      signup: !this.state.signup
    })
  }

  displayErrors = errors => {
    let errorlist = errors.map(error => {
      return `-${error} \n`;
    });
    alert(errorlist.join(" "));
  };


  onSignup = (event) => {
    event.preventDefault()
    let params = {
        first_name: event.currentTarget.firstName.value,
        last_name: event.currentTarget.lastName.value,
        username: event.currentTarget.username.value,
        password: event.currentTarget.password.value,
        height: event.currentTarget.height.value,
        age: event.currentTarget.age.value,
        gender: event.currentTarget.gender.value,
        startingWeight: event.currentTarget.startingWeight.value,
        goalWeight: event.currentTarget.goalWeight.value,
        caloricGoal: event.currentTarget.caloricGoal.value
    }

    let user = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value
    }

    let url = "http://localhost:3000/login";

    console.log(params)

    fetch('http://localhost:3000/users',{
       method: "POST",
       body: JSON.stringify(params),
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       }
    }).then(res => res.json())
    .then(data => {
      console.log(data.errors)
      if(data.errors.length !== 0) {
        this.displayErrors(data.errors)
      } else {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          }
      }).then(res => res.json())
      .then(data => {
        console.log(data)
          if(data.success) {
              localStorage.setItem("token", data.token);
              this.setState({ error: "", signup: false})
          } else {
              this.setState({ error: "Invalid username or password" });
              alert(this.state.error)
          }
      })
      }
    })
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Fit</h1>
        </header>
        <React.Fragment>
          {localStorage.token ? <UserContainer logout={this.logout}/> : 
          <React.Fragment>
          {this.state.signup ? <Signup signup={this.onSignup} login={this.toggleSignup}/> :<Login 
          signup={this.toggleSignup}
          usernameChange={this.onUsernameChange}
          passwordChange={this.onPasswordChange}
          login={this.login}
          username={this.state.username}
          password={this.state.password}
          />}
          </React.Fragment>}
       </React.Fragment>
   
        
        
      </div>
    );
  }
}

export default App;
