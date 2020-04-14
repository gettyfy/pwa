const postmark = require('postmark');

let serverToken = PROCESS.ENV.PM_SV;
let accountToken = 'yyyyyy-yyyyy-yyyyy-yyyyyy';

let client = new postmark.ServerClient(serverToken);
let accountClient = new postmark.AccountClient(accountToken);

// Send an email:

client.sendEmailWithTemplate({
	From: 'pulse@getfynance.com',
	To: 'andrew.miracle@meltwater.org',
	TemplateAlias: 'invoice',
	TemplateModel: {
		name: 'Ulrij Mundan',
		product_name: 'Smart TV',
		total: '23901',
		due_date: 'dueDate',
		action_url: 'https://staging.getfynance.com/auth/login',
		invoice_id: '1G-27G8Y3',
		date: Date().toLocaleString(),
		invoice_details: [
			{
				description: 'Purchase og 10KVA Generator',
				amount: '22550'
			}
		],
		support_url: 'https://getfynance.com/privacy-policy.html',
		product_url: 'https://getfynance.com',
		company_name: 'Fynance LLC',
		company_address: '22 Aluguntugui Street, East Legon'
	}
});
