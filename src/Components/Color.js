import React, { Component } from 'react';

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
        <p>{this.props.color}</p>
      </div>
    )
  }
}

export default Color;
