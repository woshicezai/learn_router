import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export class Topics extends React.Component{

  componentDidMount(){
    console.log("Topics render");
  }
  render(){
    let {path, url} = useRouteMatch();

    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic/>
          </Route>
        </Switch>
      </div>
    );
  }
}


function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let {topicId} = useParams();
  console.log("Topic render");
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
