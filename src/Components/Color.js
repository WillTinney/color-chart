import React, { Component } from 'react';
import FaLock from 'react-icons/lib/fa/lock';

class Color extends Component {
  constructor() {
    super();
    this.state = {
      lock: ''
    }
  }

  handleLockClick() {
    /* Swaps lock state of color on icon press */
    if (this.state.lock === '') {
      console.log('lock');
      this.setState({
        lock: 'locked'
      })
    } else {
      console.log('unlock');
      this.setState({
        lock: ''
      })
    }
  }

  render() {
    return (
      <div
        className="palette-option"
        style={{backgroundColor: this.props.color}}>
        <br />
        <p className="hexcode">{this.props.color}</p>
        <FaLock onClick={this.handleLockClick.bind(this)} className={"lock-icon " + this.state.lock}
          />
      </div>
    )
  }
}

export default Color;
