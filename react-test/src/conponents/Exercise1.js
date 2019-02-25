import React, { Component } from 'react'
import{
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
const Home = ()=><div>Home</div>;
const About = ()=><div>About</div>;
const Topics = ({match})=>(
    <div>
        <div>Topics</div>
        <ul style={{listStyle:"none"}}>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props`}>props-v-state</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:TopicsId`} component={Topic} />
        <Route
            exact path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />

    </div>
);
const Topic = ({match})=>(
    <div>
        <div>
            {match.params.TopicsId}
        </div>
    </div>
)
    

export default class Exercise1 extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
                <ul style={{listStyle:"none"}}>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Topics">Topics</Link>
                    </li>
                </ul>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Topics" component={Topics}/>
            </div>
        </Router>
      </div>
    )
  }
}
