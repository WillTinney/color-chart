import React, { Component } from 'react';
import Header from './Components/Header'
import Palette from './Components/Palette';
import Footer from './Components/Footer'
import './Styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orientation: 'horizontal',
      footerVisibility: 'inline-block'
    }
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
    console.log(this)
    return (
      <div className="App">
        <Header
          swapOrientation={this.swapOrientation.bind(this)}
          toggleFooter={this.toggleFooter.bind(this)} />
        <Palette orientation={this.state.orientation} />
        <Footer visibility={this.state.footerVisibility} />
      </div>
    );
  }
}

export default App;
