import React, { Component } from 'react';
import Header from './Components/Header'
import Palette from './Components/Palette';
import Footer from './Components/Footer';
import './Styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orientation: 'horizontal',
      footerVisibility: 'inline-block'
    }
  }

  toggleColors() {
    /* Calls change palette method in Palette component */
    this.refs.palette.changePalette();
  }

  swapOrientation() {
    /* Swaps state of orientation */
    this.setState({
      orientation: this.state.orientation === 'horizontal' ? 'vertical' : 'horizontal'
    })
  }

  toggleFooter() {
    /* Swaps visibility state for footer */
    this.setState({
      footerVisibility: this.state.footerVisibility === 'inline-block' ? 'none' : 'inline-block'
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          toggleColors={this.toggleColors.bind(this)}
          swapOrientation={this.swapOrientation.bind(this)}
          toggleFooter={this.toggleFooter.bind(this)} />
        <Palette ref="palette" orientation={this.state.orientation} />
        <Footer visibility={this.state.footerVisibility} />
      </div>
    );
  }
}

export default App;
