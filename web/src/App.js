import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import {connect} from "react-redux";

import DashboardPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import ProductPage from "./pages/ProductPage";
import Sitemap from "./pages/Sitemap";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import 'antd/dist/antd.css';
class App extends Component {

  render() {
    return (
        <div className="container">
          <Router>
            <div style={{ marginTop: '7rem' }}>
                <div className="nav">
                <NavBar />
                </div>
                <Route path="/" exact component={DashboardPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/product" exact component={ProductPage} />
                <Route path="/privacy" exact component={PrivacyPage} />
                <Route path="/sitemap" exact component={Sitemap} />
                <div className="footer">
                <Footer/>
                </div>
            </div>
          </Router> 

        </div>
    );
  }
}

export default App;
