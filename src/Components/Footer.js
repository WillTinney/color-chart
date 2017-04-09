import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={{display: this.props.visibility}}>
        <a href="https://github.com/WillTinney/color-chart" target="blank"><FaGithub id="github-icon" />Developed by Will Tinney</a>
      </div>
    )
  }
}

export default Footer;
