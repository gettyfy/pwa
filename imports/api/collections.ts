/**
 * Create a collections file and attach them to a method[defined in lowercase text]
 * This Document can extend Meteor.Collection using Classes and a Constructor to allow us create a Multi-Tenant Architecture
 * for our users, where collection__names would be derived from organization names and access specific dataTables
 * or their own Database Schema. Collections and Publications are the key to interacting with the Authorization layer
 * for Building out a multi tenant arch on top of Meteor & Meteor Mongo
 */

import { ITask, IWallet, IChat } from './schema';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection<ITask>('tasks');
export const Wallets = new Mongo.Collection<IWallet>('wallet');
export const Chats = new Mongo.Collection<IChat>('chat');
