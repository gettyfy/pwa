/**
 * This utility will manage all the validation for our forms on the client side
 * Using the validator[props] in any Fields we can pass a validator function for any user input on the client side
 */

import validator from 'validator';

const nigerian = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;
const mobile = /^(\+[1-9][0-9]*(\([0-9]*\)|-[0-9]*-))?[0]?[1-9][0-9\- ]*$/g;

export function isRequired(value: string, values = {}) {
	if (!value || value === null) return [ 'Missing required field' ];
	if (value && typeof value === 'string' && validator.isEmpty(value)) return [ 'Field cannot be empty' ];
	if (value && typeof value === 'object' && Object.keys(value).length === 0) return [ 'This field is required' ];
}

export function isSignature(value: string, values = {}) {
	if (!value || value === null) return [ 'Sign and save your signature' ];
	if (value && typeof value === 'string' && validator.isEmpty(value)) return [ 'Signature cannot be empty' ];
	if (value && typeof value === 'object' && Object.keys(value).length === 0) return [ 'Sign and save signature' ];
}

export function isEmail(value: string, values = {}) {
	if (!value) return [ 'This field is required' ];
	if (value && !validator.isEmail(value)) return [ 'Email address is invalid' ];
}

export function isNumeric(value: string, values = {}) {
	if (!value) return [ 'This field is required' ];
	if (value && !validator.isNumeric(value)) return [ 'Please Input a Number' ];
}

export function isMobile(value: string, values = {}) {
	if (!value) return [ 'This field is required' ];
	if (value && mobile.test(value)) return [ 'Phone number must start with (+) country code' ];
}

export function notLessThan(value: number, base: number, minimum: number) {
	if (value === undefined || value === null) return [ 'This field is required' ];
	if ((value && value <= base) || value <= minimum) return [ 'Cannot Fund below minimum amount' ];
}

// helper function to validate Nigerian Phone numbers
// https://github.com/chriso/validator.js/blob/master/src/lib/isMobilePhone.js
export function isPhoneNigerian(value: string) {
	if (!value) return [ 'Missing required field' ];
	if ((value && !nigerian.test(value)) || value.length < 5) return [ 'Your phone number is invalid' ];
}
