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
        We don't keep your shit
        </p></div>
        
      </div>

    );
  }
}
const mapStateToProps = ({ }) => {
};
export default connect(mapStateToProps, null)(AboutPage);
