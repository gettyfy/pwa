import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Analytics from './analytics'
import path from './router'

// Context Management Components
import Layout from '/imports/ui/Layout'
import App from '/imports/ui/App'
// --------------------------- End Context Management Components


// ************* All view Components Here *****************************************
import { Login, Signup, ResetPassword } from '/imports/ui/pages/auth'
import Wizard from '/imports/ui/pages/wizard'
import Onboarding from '/imports/ui/pages/onboarding'
// =============== Workspace Components ============
import Remind from '/imports/ui/pages/workspace/remind'
import Record from '/imports/ui/pages/workspace/record'
import Recover from '/imports/ui/pages/workspace/recover'
import Transaction from '/imports/ui/pages/workspace/transaction'
import Customer from '/imports/ui/pages/workspace/customer'
import Account from '/imports/ui/pages/workspace/account'



export default function AppRouter(this: any) {
    // const routeLocation = props.location
    useEffect((): void => {
        this.window && Analytics.page()
        this.window && window.analytics.identify()
        console.log("ALL AVAILABLE ROUTESS", path);
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
                    <Route path={path.workspace.transaction} component={Transaction} />
                    <Route path={path.workspace.customer} component={Customer} />
                    <Route path={path.workspace.account} component={Account} />
                    <Route path={path.workspace.remind} component={Remind} />
                    <Route path={path.workspace.record} component={Record} />
                    <Route path={path.workspace.recover} component={Recover} />
                    <Route path={path.wizard} component={Wizard} />
                    <Route path={path.onboarding} component={Onboarding} />
                    <Route exact={true} path={path.root}><App /></Route>
                    <Route path="/auth" component={Login} />
                </Switch>
            </Layout>
        </Router>
    );
}
