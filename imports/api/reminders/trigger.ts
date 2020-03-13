var messagebird = require('messagebird')('yZs6Tc1YLN36SEKSCdpqU5t0y'); //TEST API KEY
// var messagebird = require('messagebird')('S0oxNGGI7kpJ9JoZLbQxhcWVT'); //LIVE API KEY

/**
 * Methods to manage messaging Triggers =====
 */
export const triggerVoice = async () => {
	const voiceParams = {
		recipients: [ '+233506391853' ],
		body: `Hi CustomerName, we reaching out to you on behalf of our userName, for a payment of paymentAmount that is due on dueDate. You will receive an SMS shortly with payment instructions. Have a nice day`,
		language: 'en-au',
		voice: 'female',
		originator: '+2330565521580'
	};

	await messagebird.voice_messages.create(voiceParams, function(err, data) {
		if (err) {
			return console.log(err);
		}
		console.log(data);
	});
};

export const triggerSMS = async () => {
	const params = {
		originator: 'ORIGINATOR',
		recipients: [ '+233506391853' ],
		body: 'This is a test message'
	};

	await messagebird.messages.create(params, (err, data) => {
		if (err) {
			return console.log(err);
		}
		console.log(data);
	});
};

// triggerSMS()
