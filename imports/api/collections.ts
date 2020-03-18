/**
 * Create a collections file and attach them to a method[defined in lowercase text]
 * This Document can extend Meteor.Collection using Classes and a Constructor to allow us create a Multi-Tenant Architecture
 * for our users, where collection__names would be derived from organization names and access specific dataTables
 * or their own Database Schema. Collections and Publications are the key to interacting with the Authorization layer
 * for Building out a multi tenant arch on top of Meteor & Meteor Mongo
 */

import {
	ITask,
	ICustomer,
	IPaymentPlan,
	ITransaction,
	IEscalation,
	IReminderChannel,
	IReminder,
	ICurrency
} from 'imports/api/schema.d';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection<ITask>('tasks');
export const Customers = new Mongo.Collection<ICustomer>('customer');
export const Reminders = new Mongo.Collection<IReminder>('reminder');
export const Transactions = new Mongo.Collection<ITransaction>('transactions');
export const Escalations = new Mongo.Collection<IEscalation>('escalations');
export const PaymentPlans = new Mongo.Collection<IPaymentPlan>('paymentPlans');
export const Channels = new Mongo.Collection<IReminderChannel>('channels');
export const Currencies = new Mongo.Collection<ICurrency>('currencies');
