import React, {Component} from "react";
import { connect } from 'react-redux';

import {Link} from "react-router-dom";

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
      <div class="header"><h1>Welcome</h1></div>
      <div class="form-group">
          <div><p>Hey there welcome to DownRampApps come take a look at our apps</p></div>
      </div>
      <div class="form-group">
          <div><p>Take a look at our blog.</p></div>
      </div>
      <div class="form-group">
          <div><p>Got any cool ideas let us know. Got any comments or concerns leave us a message.
            You can even buy one of our apps. Anyway hope you enjoy our stuff!
            </p></div>
      </div> 
      </div>

    );
  }
}
const mapStateToProps = ({ }) => {
};
export default connect(mapStateToProps, null)(DashboardPage);
