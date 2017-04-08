import React, { Component } from 'react';
import Color from './Color';

class Palette extends Component {
  constructor() {
    super();
    /* Grabs stored colors data if available else outputs default palette */
    this.state = JSON.parse(localStorage.getItem('colors')) ||
    {
      colors: ['#FFBA49', '#FF595E', '#8AC926', '#1982C4', '#6A4C93']
    }
  }

  randomColor() {
    /* Generates random 6-digit hexcode including leading and trailing zeros */
    let max = 1 << 24;
    return '#' + (max + Math.floor(Math.random()*max)).toString(16).slice(-6).toUpperCase();
  }

  changePalette() {
    /* Pushes 5 random new hexcodes to newColors array */
    let newColors = []
    for (var i = 0; i < 5; i++) {
      newColors.push(this.randomColor())
    }

    /* Accounts for locked colors (sets locked color values at correct indexes) */
    for (var color in this.refs) {
      var colorObj = this.refs[color];
      if (colorObj.state.lock === 'locked') {
        newColors[color.slice(-1)] = colorObj.props.color
      }
    }

    /* Sets the palette state and saves to local storage */
    this.setState({
      colors: newColors
    })
    localStorage.setItem('colors', JSON.stringify(this.state))
  }

  handleKeyDown(e) {
    /* Calls changePalette function IF the key pressed is spacebar */
    if (e.keyCode === 32) {
      this.changePalette();
    }
  }

  componentWillMount() {
    /* Sets listener for key press */
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <div className={"palette " + this.props.orientation}>
        {this.state.colors.map((color, index) => {
          return <Color key={index} ref={"color" + (index)} color={color} />
        })}
      </div>
    );
  }
}

export default Palette;
