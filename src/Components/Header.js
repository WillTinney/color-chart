import React, { Component } from 'react';
import FaRefresh from 'react-icons/lib/fa/refresh';
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
          <FaRefresh className="header-icon color-toggle" onClick={this.props.toggleColors} />
          <h1>Palette Picker</h1>
          <FaBars className="header-icon menu-toggle" onClick={this.toggleMenu.bind(this)} />
        </div>
        <div className="toolbar" style={{display: this.state.menuToggle}}>
          <button onClick={this.props.swapOrientation}>Toggle Orientation</button>
        </div>
      </div>

    )
  }
}

export default Header;
