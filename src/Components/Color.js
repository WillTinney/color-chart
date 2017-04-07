import React, { Component } from 'react';
import FaLock from 'react-icons/lib/fa/lock';

class Color extends Component {
  handleClick() {
    console.log('Click!')
  }

  render() {
    return (
      <div
        className="palette-option"
        onMouseDown={this.handleClick.bind(this)}
        style={{backgroundColor: this.props.color}}>
        <br />
        <p className="hexcode">{this.props.color}</p>
        <FaLock className="lock-icon" />
      </div>
    )
  }
}

export default Color;
