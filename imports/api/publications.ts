/**
 * @Mongo Driver :: Publish Document imports all collections and makes allow the derived methods of a collection 
 * to be published using a Publisher name. The Publisher name is defined on the right hand of the Arguement 
 * and is a function that performs a Database Query on Mongo.DB based on Authorization Rules, Commands etc
 * Publish is where we would want to handle Multi-Tenant Features to allow users Query only their Data as well as
 * Have access to their own database Schema. Collections may be Generated Functions or Classes
 */

import { Meteor } from 'meteor/meteor';
import { Tasks } from './collections';

if (Meteor.isServer) {
	// This code only runs on the server
	Meteor.publish('tasks', tasksPublication);
}

// Define Tasks Publication for collection Tasks
export function tasksPublication(this: any) {
	return Tasks.find({
		$or: [ { private: { $ne: true } }, { owner: this.userId } ]
	});
}

// export function walletPublication(this: any) {
// 	console.log(Wallets);
// 	return Wallets.find({
// 		$or: [ { owner: this.userId } ]
// 	});
// }
