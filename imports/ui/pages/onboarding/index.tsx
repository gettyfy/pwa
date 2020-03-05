import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import AccountSetup from './AccountSetup';
import Verification from './Verification';
import CompanySetup from './CompanySetup';
import * as Analytics from '/imports/ui/analytics'

<<<<<<< HEAD
export default class Onboarding extends Component {
=======
export default class Kitchen extends Component {
>>>>>>> lady/dev
	constructor(props: any) {
		super(props);
		this.state = {
			menu: '',
			food: '',
			nutrition: '',
			country: '',
			recipe: '',
		}
	}

	updateState = (key: string, value: string) => {
		this.setState({ [key]: value });
	}

	onSubmit = async () => {
		console.log(this.state);
		await Analytics.track('Submit Food Menu', this.state);
		alert('Thank you')
		window.location.replace('/kitchen')
	};

	render() {
<<<<<<< HEAD
		return (
=======
		return (																																																																																																																																					
>>>>>>> lady/dev
			<Switch>
				<Route path="/onboarding" exact><Verification data={this.state} updateState={this.updateState} /></Route>
				<Route path="/onboarding/account-setup" exact><AccountSetup data={this.state} updateState={this.updateState} /></Route>
				<Route path="/onboarding/company-setup" exact><CompanySetup data={this.state} updateState={this.updateState} onSubmit={this.onSubmit} /></Route>
			</Switch>
		);
	}
}
