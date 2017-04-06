import React, { Component } from 'react';
import Palette from './Components/Palette.js';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color Charts</h1>
        <Palette />
      </div>
    );
  }
}

export default App;
