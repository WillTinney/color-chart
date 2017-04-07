import React, { Component } from 'react';

class Palette extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem('colors')) ||
    {
      colors: ['#FFBA49', '#FF595E', '#8AC926', '#1982C4', '#6A4C93']
    }
  }

  randomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  }

  changePalette() {
    let newColors = []
    for (var i = 0; i < 6; i++) {
      newColors.push(this.randomColor())
    }
    this.setState({
      colors: newColors
    })
    localStorage.setItem('colors', JSON.stringify(this.state))
    console.log(localStorage)
  }

  handleKeyDown(e) {
    if (e.keyCode === 32) {
      this.changePalette();
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <div className="palette">
        Colors: {this.state.colors.join(', ')}
        {this.state.colors.map(color => {
          return <div key={color} className="palette-option" style={{backgroundColor: color}}>{color}</div>
        })}
      </div>
    );
  }
}

export default Palette;
