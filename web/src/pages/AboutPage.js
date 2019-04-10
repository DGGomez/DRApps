import React, {Component} from "react";
import { connect } from 'react-redux';

import {Link} from "react-router-dom";

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
        <div className="title"><h1>About</h1></div>
        <div className="body"><p>
        Hello, Welcome to Down Ramp Apps. We are a group of programs that design, create, and maintain apps.
        If you want to buy an app or give us a suggestion go to the contact page and leave us a message. Check
        out our other projects while you're here.
        </p></div>
        
      </div>

    );
  }
}
export default connect(null)(AboutPage);
