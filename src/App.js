import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Pokemons</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
