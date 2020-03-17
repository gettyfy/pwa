import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Customers } from '../collections';
import { noAuthError, evaluateAndExecute, isUser, isTaskOwner } from '../helpers/task-utils';

export function removeCustomer(this: any, id: string): void {
	check(id, String);
	evaluateAndExecute(isTaskOwner(id)(this.userId) && Customers.remove(id), noAuthError);
}

export function insertCustomer(this: any, obj: any) {
	check(obj, Object);

	// Make sure the user is logged in before inserting a task
	evaluateAndExecute(
		isUser(this.userId) &&
			Customers.insert({
				...obj,
				createdAt: new Date(),
				owner: this.userId,
				username: Meteor.users.findOne(this.userId).username
			}),
		noAuthError
	);
}



