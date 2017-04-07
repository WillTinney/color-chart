import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: 'none'
    }
  }

  toggleMenu() {
    /* Toggles menu toolbar on/off */
    this.setState({
      menuToggle: this.state.menuToggle === 'none' ? 'flex' : 'none'
    });
    this.props.toggleFooter();
  }
  render() {
    return (
      <div>
        <div className="header">
          <button className="menu-toggle" onClick={this.toggleMenu.bind(this)}>></button>
          <h1>Palette Picker</h1>
        </div>
        <div className="toolbar" style={{display: this.state.menuToggle}}>
          <button onClick={this.props.swapOrientation}>Switch</button>
        </div>
      </div>
    )
  }
}

export default Header;
