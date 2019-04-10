import React, {Component} from "react";
import { connect } from 'react-redux';

import {Link} from "react-router-dom";

class PrivaryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

// Legal statement

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
export default connect(mapStateToProps, null)(PrivaryPage);
