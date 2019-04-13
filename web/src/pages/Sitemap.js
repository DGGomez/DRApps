import React, {Component} from "react";
import { connect } from 'react-redux';

import {Link} from "react-router-dom";

class Sitemap extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
        <div className="title"><h1>Sitemap</h1></div>
        <div className="body"><p>
        Hello, Welcome to Down Ramp Apps. We are a group of programs that design, create, and maintain apps.
        If you want to buy an app or give us a suggestion go to the contact page and leave us a message. Check
        out our other projects while you're here.
        </p></div>
        <Link to ="/sitemap" className="btn btn-default btn-lg btn-block">Sitemap</Link>
        <Link to ="/privacy" className="btn btn-default btn-lg btn-block">Privacy</Link>
        <Link to ="/product" className="btn btn-default btn-lg btn-block">Events/Product</Link>
        <Link to ="/about" className="btn btn-default btn-lg btn-block">About</Link>
        <Link to ="/contact" className="btn btn-default btn-lg btn-block">Contact Us</Link>
        <Link to ="/" className="btn btn-default btn-lg btn-block">Main</Link>
      </div>
    );
  }
}

export default connect(null)(Sitemap);
