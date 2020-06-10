import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from "./components/GoogleAuth";

import * as serviceWorker from './serviceWorker';

import ProtectedRoute from "./components/ProtectedRoute";
import Sidenav from "./components/Sidenav";
import Welcome from "./components/Welcome";
import BlogView from "./components/BlogView";
import PostView from "./components/PostView";

import './styles.scss';

const App = () => (
    <div>
        <Router>
            <AuthProvider>
                <header>
                    <Sidenav/>
                </header>
                <main>
                    <Switch>
                        <ProtectedRoute exact path="/blogs/:blogId" component={BlogView} />
                        <ProtectedRoute exact path="/blogs/:blogId/posts/:postId" component={PostView} />
                        <Route exact path="/" component={Welcome}/>
                        <Route component={() => "404 NOT FOUND"}/>
                    </Switch>
                </main>
            </AuthProvider>
        </Router>
    </div>
)


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
