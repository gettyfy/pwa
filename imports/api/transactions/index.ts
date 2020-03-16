import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Transactions } from '../collections';
import { noAuthError, evaluateAndExecute, isUser, isTaskOwner } from '../helpers/task-utils';

export function removeTransaction(this: any, id: string): void {
	check(id, String);
	evaluateAndExecute(isTaskOwner(id)(this.userId) && Transactions.remove(id), noAuthError);
}

export function insertTransaction(this: any, obj: any) {
	check(obj, Object);

	// Make sure the user is logged in before inserting a task
	evaluateAndExecute(
		isUser(this.userId) &&
			Transactions.insert({
				...obj,
				createdAt: new Date(),
				customerId: this.userId,
				userId: this.userId,
				owner: Meteor.users.findOne(this.userId)
			}),
		noAuthError
	);
}
