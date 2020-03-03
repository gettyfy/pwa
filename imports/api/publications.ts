import { Meteor } from 'meteor/meteor';
import { Tasks, Wallets } from './collections';

if (Meteor.isServer) {
	// This code only runs on the server
	Meteor.publish('tasks', tasksPublication);
	Meteor.publish('wallet', walletPublication);
}

export function tasksPublication(this: any) {
	return Tasks.find({
		$or: [ { private: { $ne: true } }, { owner: this.userId } ]
	});
}

export function walletPublication(this: any) {
	console.log(Wallets);
	return Wallets.find({
		$or: [ { owner: this.userId } ]
	});
}
