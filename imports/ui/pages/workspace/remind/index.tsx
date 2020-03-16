import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Success from './Success';
import Create from './Create';
import * as Analytics from '/imports/ui/analytics'
import Remind from './Remind'
// import CreateCustomer from './index';

export default class CreateCustomer extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			
		}
	}

	updateState = (value: object) => {
		const oldStore = this.state;
		const newState = Object.assign(oldStore, value)
		this.setState({...newState});
		console.log("STATE HAS BEEN UPDATED WITH NEW VALUES", this.state)

	}

	// updateState = (key: string, value: string) => {
	// 	this.setState({ [key]: value });
	// 	console.log("STATE HAS BEEN UPDATED WITH NEW VALUES", this.state)
	// }

	onSubmit = async () => {
		console.log(this.state);
		await Analytics.track('Submit Food Menu', this.state);
		alert('Thank you')
		window.location.replace('/customer')
	};

	render() {
		return (
			<Switch>
				<Route path="/remind" exact><Create data={this.state} updateState={this.updateState} onSubmit={this.onSubmit} /></Route>
				<Route path="/remind/rules" exact><Remind data={this.state} updateState={this.updateState} /></Route>
				<Route path="/remind/success" exact><Success data={this.state} updateState={this.updateState} /></Route>
				
			</Switch>
		);
	}
}
