import React, { Component } from 'react';
import FaBars from 'react-icons/lib/fa/bars';

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
          <h1>Palette Picker</h1>
          <FaBars className="menu-toggle" onClick={this.toggleMenu.bind(this)} />
        </div>
        <div className="toolbar" style={{display: this.state.menuToggle}}>
          <br />
          <b>Toggle Orientation:</b>
          <div className="pf-toggle" onClick={this.props.swapOrientation}>
            <input id="toggleid" type="checkbox" name="toggleid"/>
            <label htmlFor="toggleid"></label>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
