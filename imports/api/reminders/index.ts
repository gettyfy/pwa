import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reminders } from '../collections';
import { noAuthError, evaluateAndExecute, isUser, isTaskOwner } from '../helpers/task-utils';

export function removeReminder(this: any, id: string): void {
	check(id, String);
	evaluateAndExecute(isTaskOwner(id)(this.userId) && Reminders.remove(id), noAuthError);
}

export function insertReminder(this: any, obj: any) {
	check(obj, Object);

	// Make sure the user is logged in before inserting a task
	evaluateAndExecute(
		isUser(this.userId) &&
			Reminders.insert({
				...obj,
				createdAt: new Date(),
				owner: this.userId,
				username: Meteor.users.findOne(this.userId).username
			}),
		noAuthError
	);
}
