import React, {Component} from "react";
import { connect } from 'react-redux';
import Card from '../components/Card';

class ProductPage extends Component {
  constructor(props) {
    super(props);
// name, description, status
    this.state = {
        list: [
                ["creeper-report", "Anonymous reports of crime around your area", "Testing"],
                ["Lifter", "Find a workout partner", "Development"], 
                ["Endless_War", "A random map generator that makes a strategy war game", "Developement"], 
                ["search-git", "search your own github for projects you forgot the name of", "Development"], 
                ["App-builder", "An app that sets up a basic front end and back end for multiple languages \n(Future features: Spring, Node.js, React, react-native, ruby on rails, python, go)\n(possible goals: Push to your cloud/server, create a pipeline(CI/CD))", "Development"]
              ],
        tools: [
                ["swagger-generator","Create a swagger-file for your project by scanning your backend endpoints", "Testing"],
                ["Position-index", "Run program on a file to find position that error is referencing", "Completed"],
                ["Performance-testing", "Sends your endpoints multiple messages", "Testing"],
                ["json-line-deleter", "Testing tool that deletes one line in a json test file at a time (This includes single items from arrays)", "Complete"]
              ]
    };
  }

  renderList() {
    var list1 = this.state.list; 
    var list2 = this.state.tools;

    var updatedList1 = list1.map((listItems)=>{ 
        console.log(listItems);
        return( 
          <div>
            <Card title ={listItems[0]} description = {listItems[1]} status= {listItems[2]}/> 
          </div>
            );  
    }); 
    var updatedList2 = list2.map((listItems)=>{ 
      console.log(listItems);
      return( 
        <div>
            <Card title ={listItems[0]} description = {listItems[1]} status= {listItems[2]}/> 
        </div>
          );  
  }); 
    return( 
      <div>
        <div>        <h1>Apps</h1>
  {updatedList1}</div>
<div><h1>Tools</h1>
  {updatedList2}</div>
  
  </div> 
  ); 
  }
  
  render() {

    return (
      <div className="container">
        <div className="title"><h1>Events/Products</h1></div>
        <div className="body"><p>
        Hello, Welcome to Down Ramp Apps. We are a group of programs that design, create, and maintain apps.
        If you want to buy an app or give us a suggestion go to the contact page and leave us a message. Check
        out our other projects while you're here.
        </p></div>
        <div>
        {this.renderList()}
        </div>
      </div>

    );
  }
}

export default ProductPage;
