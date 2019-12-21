import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
render() {
    return (

            
              <nav height = "500" className="navbar navbar-inverse bg-inverse navbar-fixed-top">
                        <Link to="/" className="navbar-brand">
                            <strong>
              <img className="logo" align="left" src="./rsz_1logo.png" alt="logo"/>
                            </strong>
                        </Link>
                        <div className="container">

                        <div className="navbar-header">

                        <Link to="/product" className="navbar-brand">
                            <strong>
                                Products
                            </strong>
                        </Link>
                        <Link to="/contact" className="navbar-brand">
                            <strong>
                                Contact Us
                            </strong>
                        </Link>
                        <Link to="/about" className="navbar-brand">
                            <strong>
                                About
                            </strong>
                        </Link>
                    </div>
                </div>
            </nav>
    );
  }
}
export default Navbar;
