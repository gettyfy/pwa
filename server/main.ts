/**
 * This is the Mount Point for Meteor Server. The only File that needs to be imported are 
 * Meteor Methods required by the Client Service.
 */

//  Refer to Meteor Guide for ideal project structure https://guide.meteor.com/structure.html

import { Meteor } from 'meteor/meteor';
import '/imports/api/methods';

// import { Links } from '/imports/api/links';
// function insertLink(title: string, url: string) {
// 	Links.insert({ title, url, createdAt: new Date() });
// }

Meteor.startup(() => {
	// If the Links collection is empty, add some data.
});
