import React, {Component} from "react";
import { connect } from 'react-redux';

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
        We don't keep your shit. Legal reasons will soon be posted.
        </p></div>
        
      </div>

    );
  }
}

export default connect(null)(PrivaryPage);
