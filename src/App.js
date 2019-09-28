import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
          <Increment />
          <Decrement />
        </header>
      </div>
    );
  }
}

export default App;
