/**
 * This is the Mount Point for Meteor Server. The only File that needs to be imported are 
 * Meteor Methods required by the Client Service.
 */

import { Meteor } from 'meteor/meteor';
import '/imports/api/methods';

// Should I import all the collections into this project as well

// import { Links } from '/imports/api/links';
// function insertLink(title: string, url: string) {
// 	Links.insert({ title, url, createdAt: new Date() });
// }

Meteor.startup(() => {
	// If the Links collection is empty, add some data.
});
