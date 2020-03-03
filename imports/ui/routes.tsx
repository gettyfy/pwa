import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Analytics from './analytics'

// import components views here
import Layout from './Layout'
import App from '/imports/ui/App'

import { Login, Signup } from './pages/auth'
import Wizard from './pages/wizard'




export default function AppRouter(this: any) {
    // const routeLocation = props.location
    useEffect((): void => {
        this.window && Analytics.page()
        this.window && window.analytics.identify()
    })

    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Layout>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/wizard' component={Wizard} />
                    <Route exact={true} path="/"><App /></Route>
                </Switch>
            </Layout>
        </Router>
    );
}
