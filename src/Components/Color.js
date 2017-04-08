import React, { Component } from 'react';
import $ from 'jquery';
import MdPalette from 'react-icons/lib/md/palette';
import FaLock from 'react-icons/lib/fa/lock';

class Color extends Component {
  constructor() {
    super();
    this.state = {
      lock: ''
    }
  }

  setTextColor(hexcode) {
    /* Determine whether to use light or dark text */
    let color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexcode);
    let r = parseInt(color[1], 16),
        g = parseInt(color[2], 16),
        b = parseInt(color[3], 16);
    return ((r*0.299 + g*0.587 + b*0.114) > 186 ? '#898F98' : '#D9DEE5')
  }

  handleColorChange(e) {
    /* Calls updateColor function from palette */
    this.props.updateColor(e.target.value, this.props.index);
  }

  handlePaletteClick() {
    /* Opens colorpicker by simulating click on input */
    let colorpicker = $(".colorpicker" + this.props.index);
    colorpicker[0].click();
  }

  handleLockClick() {
    /* Swaps lock state of color on icon press */
    if (this.state.lock === '') {
      this.setState({
        lock: 'locked'
      })
    } else {
      this.setState({
        lock: ''
      })
    }
  }

  render() {
    return (
      <div
        className="palette-option"
        style={{backgroundColor: this.props.color, color: this.setTextColor(this.props.color)}}>
        <div>
          <MdPalette className="palette-icon" onClick={this.handlePaletteClick.bind(this)} />
          <input className={"colorpicker" + this.props.index} type="color" value={this.props.color}
            onChange={this.handleColorChange.bind(this)}></input>
        </div>
        <p className="hexcode">{this.props.color}</p>
        <FaLock onClick={this.handleLockClick.bind(this)} className={"lock-icon " + this.state.lock}
          style={{color: this.setTextColor(this.props.color)}}/>
      </div>
    )
  }
}

export default Color;
