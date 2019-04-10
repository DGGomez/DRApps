import React, {Component} from "react";
import { connect } from 'react-redux';
import {readData} from '../actions';
import {Link} from "react-router-dom";
import Card from '../components/Card';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        list: []
    };
  }

  componentDidMount(){
     const {readData, data} = this.props;
    readData(() => this.setState({list: data}));
  }

  render() {
      const {data} = this.props;

    return (
      <div className="container">
        <div className="title"><h1>About</h1></div>
        <div className="body"><p>
        Hello, Welcome to Down Ramp Apps. We are a group of programs that design, create, and maintain apps.
        If you want to buy an app or give us a suggestion go to the contact page and leave us a message. Check
        out our other projects while you're here.
        </p></div>
        <div>
      {this.state.list.map(item => {
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
      event: data.event,
      description: data.description,
      links: data.links
    };
  };
export default connect(mapStateToProps, {readData})(AboutPage);
