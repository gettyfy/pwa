import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Success from './Success';
import Create from './Create';
import Review from './Review';
import Item from './Item';
import PaymentPlan from './PaymentPlan'
import * as Analytics from '/imports/ui/analytics'

export default class CreateTransaction extends Component {
	constructor(props: any) {
		super(props);
		this.state = {

		}
	}

	updateState = async (value: object) => {
		const oldStore = this.state;
		const newState = Object.assign(oldStore, value)
		await this.setState({ ...newState });
		console.log("STATE HAS BEEN UPDATED WITH NEW VALUES", this.state)

	}

	// updateState = (key: string, value: string) => {
	// 	this.setState({ [key]: value });
	// 	console.log("STATE HAS BEEN UPDATED WITH NEW VALUES", this.state)
	// }

	onSubmit = async () => {
		console.log(this.state);
		await Analytics.track('Submit Food Menu', this.state);
		window.location.replace('/transactions')
	};

	render() {
		return (
			<Switch>
				<Route path="/create-transaction" exact><Create data={this.state} updateState={this.updateState} onSubmit={this.onSubmit} /></Route>
				<Route path="/create-transaction/item" exact><Item data={this.state} updateState={this.updateState} /></Route>
				<Route path="/create-transaction/payment-plan" exact><PaymentPlan data={this.state} updateState={this.updateState} /></Route>
				<Route path="/create-transaction/review" exact><Review data={this.state} updateState={this.updateState} /></Route>
				<Route path="/create-transaction/success" exact><Success data={this.state} updateState={this.updateState} /></Route>
			</Switch>
		);
	}
}
