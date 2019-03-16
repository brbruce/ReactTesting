import React, { Component } from 'react';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1><Hello/> <World who="Brian"/></h1>
            <h1><Hello/> <World /></h1>
            <Home />
        </header>
      </div>
    )
  }
}

export default App;

class Hello extends Component {
  render() {
    return <span>Hello</span>
  }
}

class World extends Component {
  render() {
    return <span>{this.props.who || 'world'}!</span>
  }
}