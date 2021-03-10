import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from './screens/home'
import { NeedHelp } from './screens/NeedHelp'
import { ProblemStatements } from './screens/problemstatements'
import { Contact } from './screens/contact'

export var myLocation = '/';

export const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routing />
        </Router>
    )
}




export const Routing = () => {
    return (<>
        <Switch>
            <Route path="/NeedHelp">
                <NeedHelp />
            </Route>
            <Route path="/ProblemStatements">
                <ProblemStatements />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </>
    )
}


