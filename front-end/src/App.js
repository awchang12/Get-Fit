import React, { Component } from 'react';
import './App.css';
import Login from "./components/login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
