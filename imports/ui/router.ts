/**
 * This file will manage all the route config for the project and will map routes through the routes.tsx file
 * Where we can map a route according to name and use across all our pages to avoid breaks in route changes.
 */

// To create a route 1. Create a Path here - 2. Link this path to a component in routes.tsx and use the path name everywhere

const Path = {
	root: '/',
	auth: {
		loginRoute: '/auth/login',
		signupRoute: '/auth/signup',
		resetPasswordRoute: '/auth/reset-password'
	},
	wizard: '/wizard',
	onboarding: '/onboarding',
	transaction: '/transaction',
	customer: '/customer',
	remind: '/remind',
	recover: '/recover'
};

export default Path;
