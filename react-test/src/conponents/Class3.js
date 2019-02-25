import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link,
    Prompt,
    withRouter,
    NavLink
} from "react-router-dom";
const Page1 = () => <div>页面一</div>
const Page2 = () => <div>页面二</div>
const MenuLink = ({to,label}) => {
    return(
        <Route
            path={to}
            children = {
                ({match})=>{
                    return (
                      console.log(match),
                      <div>
                          <Link to={to}>{label}</Link>
                      </div>
                    )
                }
            }
        />
    )
}
const RouteChange = withRouter(({history})=>{
  return(
    <div>
      <button onClick={()=>{history.push("/page2")}}>编程导航</button>
    </div>
  )
})
export default class Class3 extends Component {
  constructor(props) {
    super(props);
    this.state={
      prompt:false
    }
  }
  
  render() {
    return (
      <div>
        <Router>
         <div>
            <MenuLink to="/page3" label="自定义连接1"/>
            <MenuLink to="/page4" label="自定义连接2"/>
            <NavLink isActive={()=>false} activeClassName="aa" to="/page1">页面一</NavLink>
            <NavLink activeClassName="aa" activeStyle={{color:"red"}} to="/page2">页面二</NavLink>
            <Prompt when={this.state.prompt} message="确定离开？"/>
            <RouteChange/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
         </div>
        
        </Router>
      </div>
    )
  }
}
