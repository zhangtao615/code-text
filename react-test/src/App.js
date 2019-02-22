import React, { Component } from 'react';
import './App.css';
import Class1 from "./conponents/Class1";
import Class2 from "./conponents/Class2";
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
const Test =({match}) =>{
  return(
    <div>
      <h1>这是一个测试组件</h1>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">Class1</Link>|
            <Link to="/class2">Class2</Link>|
            <Link to="/test">test</Link>|
            <Link to="/render">render</Link>
            <Switch>
              <Route path={'/class2'} component={Class2}/>
              <Route path={"/test"} component={Test}/>
              <Route path={"/render"} render={() =><Redirect to="/"/>}/>
              <Route path={"/"} component={Class1}/>
            
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
