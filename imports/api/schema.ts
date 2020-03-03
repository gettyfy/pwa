/**
 * Write Schema for Pulse and pulse related models
 * These are Typescript interfaces are intend to relay the expected collection schema in meteor
 */

interface IPulse {
	_id: string;
	profile: {
		// We attach a user profile to a pulse and track by ID, name and email
		name: string;
		_id: string;
		email: string;
	};
	transaction: {
		// Information about the transaction may be attached to a pulse
		_txId: string;
		txAmount: number;
		customer: {
			id: string; // take the ID of the customer should we need to query information
		};
	};
	rules: {
		// Accompanying rules can vary for each transaction
		interval: string;
		frequency: string;
		startDate: Date;
		endDate: Date;
	};
	executionTime: Date;
	createdAt: Date;
	priority: 'high' | 'medium' | 'low'; // could be an Enum to simplify things, we assign a priority to the jobs
	channel: string[]; // The is the channel we intend to execute the pulse from from
}

interface IPulseChannel {
	name: string;
	medium: string;
	lastUpdated: Date;
	gateway?: string; // This could be the api endpoint or point of acess, the question mark means it can be optional
}

/**
 * Interface for the Users Profile
 */

interface IUser {
	_id: string;
	email: string;
	phone: string;
	name: string;
	verified: boolean;
	createdAt: Date;
	lastUpdated: Date;
	profile: {
		workspace: {
			_id: string;
			name: string;
			type: 'organization' | 'individual';
		};
		subscription: {
			type: string; // preferably an ENUM will be used here
			_pk: string; // the subscription PK is a unique identifier, we may stick to ID
		};
		wallet: {
			balance: string;
			cleared: boolean;
			lastUpdated: Date;
		};
	};
}

/**
 * These interfaces would manage the models that align with the record feature
 */

interface ITransaction {
	_id: string;
}

interface ICustomer {
	_id: string;
}

interface IPaymentPlan {
	_id: string;
}
interface IAgreementPlan {
	_id: string;
}

interface IAgreementTemplate extends IAgreementPlan {
	createdAt: Date;
	lastUpdated: Date;
}

interface IPaymentTemplate extends IPaymentPlan {
	createdAt: Date;
	lastUpdated: Date;
}
