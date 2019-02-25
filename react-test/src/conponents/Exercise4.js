import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
const One =()=><div>One</div>
const Two =()=><div>Two</div>
export default class Exercise4 extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
    const Form =()=>{
      return (
        <input type="text" onChange/>,
        <button>reset</button>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/one">One</Link>
            <Link to="/two">Two</Link>
            <Link to="form">Form</Link>
            <Route path="/one" component={One}/>
            <Route path="/two" component={Two}/>
            <Route path="/form" component={}/>
          </div>
        </Router>
      </div>
    )
  }
}