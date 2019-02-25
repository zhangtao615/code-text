import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
export default class Exercise1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>You are not logged in.</div>
            <Link to="/Public Page">Public Page</Link>
            <Link to="/Protected Page">Protected Page</Link>
          </div>
        </Router>
      </div>
    )
  }
}
