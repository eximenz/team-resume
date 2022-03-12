import React from "react";
import NavBar from "./components/navbar";
import Main from "./layout/main";
import Profile from "./layout/profile";
import BookMark from "./layout/bookmark";
import NotFound from "./layout/notfound";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AppLoader from "./components/hoc/appLoader";
import history from "../app/utils/history";


const App = () => {

        return (
            <div>
                <AppLoader>
                    <Router history={history}>
                        <NavBar history={history} />
                        <Switch>
                            <Route path="/main" component={Main} />
                            <Route
                                path="/profile/:userId?"
                                component={Profile}
                            />
                            <Route path="/bookmark" component={BookMark} />
                            <Route path="/404" component={NotFound} />
                            <Redirect exact from="/" to="/main" />
                            <Redirect to="/main" />
                        </Switch>
                    </Router>
                </AppLoader>
            </div>
        );
    }


export default App;
