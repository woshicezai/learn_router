import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {Topics} from "./Topics";

function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/topics">
            <Topics/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

class Home extends React.Component {

  componentDidMount() {
    console.log("home mounted");
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}



ReactDom.render(
  <NestingExample/>,
  document.getElementById('root')
);