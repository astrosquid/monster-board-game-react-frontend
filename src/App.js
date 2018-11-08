import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gameContainer">
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App;
