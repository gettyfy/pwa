import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Analytics from './analytics'
import path from './router'

// import components views here
import Layout from './Layout'
import App from '/imports/ui/App'

import { Login, Signup, ResetPassword } from './pages/auth'
import Wizard from './pages/wizard'
import Onboarding from './pages/onboarding'



export default function AppRouter(this: any) {
    // const routeLocation = props.location
    useEffect((): void => {
        this.window && Analytics.page()
        this.window && window.analytics.identify()
        console.log(path);
    })

    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Layout>
                <Switch>
                    <Route path={path.auth.loginRoute} component={Login} />
                    <Route path={path.auth.signupRoute} component={Signup} />
                    <Route path={path.auth.resetPasswordRoute} component={ResetPassword} />
                    <Route path={path.wizard} component={Wizard} />
                    <Route path={path.onboarding} component={Onboarding} />
                    <Route exact={true} path={path.root}><App /></Route>
                    <Route path="/auth" component={Login} />
                </Switch>
            </Layout>
        </Router>
    );
}
