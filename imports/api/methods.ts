/**
 * A Method File will import a defined Named Function and attach it to a method. Example the Function insertTask is exported from tasks and 
 * attached to a *task.insert* method so that all of task.insert will take arguments and results as defined by insertTask.
 * 
 * The Method document handles the naming, and so this is where lowercase method names are created and used on the
 * client service to invoke the function used by that method.
 */

import { Meteor } from 'meteor/meteor';
import { insertTask, removeTask, setChecked, setPrivate } from '/imports/api/tasks';
import { insertCustomer, removeCustomer } from '/imports/api/customers';
import { insertTransaction, removeTransaction } from '/imports/api/transactions';
import { insertReminder, removeReminder } from '/imports/api/reminders';

// Define Methods for managing tasks related logic
const tasks = {
	'task.insert': insertTask,
	'task.remove': removeTask,
	'task.setChecked': setChecked,
	'task.setPrivate': setPrivate
};

// Methods for Customer Collection
const customers = {
	'customer.insert': insertCustomer,
	'customer.remove': removeCustomer
};

//Methods for Transactions collection
const transactions = {
	'transaction.insert': insertTransaction,
	'transaction.remove': removeTransaction
};

// Methods for Reminders Collection
const reminders = {
	'reminder.insert': insertReminder,
	'reminder.remove': removeReminder
};

// Destructure methods into the Meteor Method
Meteor.methods({
	...tasks,
	...customers,
	...transactions,
	...reminders
});
