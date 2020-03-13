var messagebird = require('messagebird')('YOUR_ACCESS_KEY');
var params = {
	recipients: [ '31612345678' ],
	body: 'This is a test message.',
	language: 'en-gb',
	voice: 'male'
};
messagebird.voice_messages.create(params, function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data);
});
