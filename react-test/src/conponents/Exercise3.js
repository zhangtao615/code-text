import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
const Home =() =><div>Home</div>
const About =() =><div>About</div>
const MenuLink = ({to,label}) => {
  return(
      <Route
          path={to}
          children = {
              ({match})=>{
                  return (   
                    <div>
                        <Link to={to}>{match?">":""}{label}</Link>
                    </div>
                  )
              }
          }
      />
  )
}
export default class Exercise3 extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <MenuLink to="/home" label="Home">Home</MenuLink>
            <MenuLink to="/about" label="About">About</MenuLink>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
      </div>
    )
  }
}