import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Success from './Success';
import List from './List';
import Review from './Review';
import Reason from './Reason';
import * as Analytics from '/imports/ui/analytics'
import Recovery from './recovery'
// import CreateCustomer from './index';

export default class Recovery extends Component {
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
				<Route path="/recovery" exact><List data={this.state} updateState={this.updateState} onSubmit={this.onSubmit} /></Route>
				<Route path="/recovery/reason" exact><Reason data={this.state} updateState={this.updateState} /></Route>
				<Route path="/recovery/review" exact><Review data={this.state} updateState={this.updateState} /></Route>
				<Route path="/recovery/success" exact><Success data={this.state} updateState={this.updateState} /></Route>
				
			</Switch>
		);
	}
}
