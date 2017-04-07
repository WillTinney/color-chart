import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={{display: this.props.visibility}}>
        <p><FaGithub id="github-icon" />Developed by Will Tinney</p>
      </div>
    )
  }
}

export default Footer;
