/**
 * This file will manage all the route config for the project and will map routes through the routes.tsx file
 * Where we can map a route according to name and use across all our pages to avoid breaks in route changes.
 */

// To create a route 1. Create a Path here - 2. Link this path to a component in routes.tsx and use the path name everywhere

type TPath = string;

interface IPath {
	root: TPath;
	wizard: TPath;
	onboarding: TPath;
	auth: {
		loginRoute: string;
		signupRoute: string;
		resetPasswordRoute: string;
	};
	workspace: {
		transaction: string;
		customer: string;
		account: string;
		remind: string;
		recover: string;
		record: string;
		createCustomer:string;
	};
}

const Path: IPath = {
	root: '/',
	wizard: '/wizard',
	onboarding: '/onboarding',
	auth: {
		loginRoute: '/auth/login',
		signupRoute: '/auth/signup',
		resetPasswordRoute: '/auth/reset-password'
	},
	workspace: {
		transaction: '/transaction',
		customer: '/customer',
		account: '/account',
		remind: '/remind',
		recover: '/recover',
		record: '/record',
		createCustomer: '/create-customer'
	}
};

export default Path;
