import React, {Component} from "react";
import { connect } from 'react-redux';
import readData from '../actions';
import {Link} from "react-router-dom";
import Card from '../componenets/Card';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      var itemList;
    };
  }

  componentDidMount(){
  const {readData, data} = this.props;
    readData({})
    .then(res => this.setState({itemList: res.body}))
    .catch(err => console.log(err));
    
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
      {this.state.itemList.map(() => {
        return (
          <Card title ={event} location = {links} description= {description}/> 
        );
        })}
      
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ }) => {
};
export default connect(mapStateToProps, null)(AboutPage);
