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

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let {path, url} = useRouteMatch();
    console.log("Topics render", path, url);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${path}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${path}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${path}/props-v-state`}>Props v. State</Link>
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

ReactDom.render(
    <NestingExample/>,
    document.getElementById('root')
);
