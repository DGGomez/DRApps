import React, {Component} from "react";
import { connect } from 'react-redux';
import {readData} from '../actions';
import {Link} from "react-router-dom";
import Card from '../components/Card';

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        list: []
    };
  }

  componentDidMount(){
   this.props.readData();
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
        <div>
      {this.props.data.map(item => {
        return (
          <Card title ={item.event} location = {item.links} description= {item.description}/> 
        );
        })}
      
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ data }) => {
    return { 
      data
    };
  };
export default connect(mapStateToProps, {readData})(ProductPage);
