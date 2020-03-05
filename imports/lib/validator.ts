// import validator from 'validator';

// const nigerian = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;

// export function isRequired(value, values = {}) {
// 	if (value === undefined || value === null) return [ 'This field is required' ];
// 	if (value && typeof value === 'string' && validator.isEmpty(value)) return [ 'This field is required' ];
// 	if (value && typeof value === 'object' && Object.keys(value).length === 0) return [ 'This field is required' ];
// }

// export function isEmail(value, values = {}) {
// 	if (!value) return [ 'This field is required' ];
// 	if (value && !validator.isEmail(value)) return [ 'Invalid email supplied' ];
// }

// export function isNumeric(value, values = {}) {
// 	if (!value) return [ 'This field is required' ];
// 	if (value && !validator.isNumeric(value)) return [ 'Not a number' ];
// }

// export function notLessThan(value, base, minimum) {
// 	if (value === undefined || value === null) return [ 'This field is required' ];
// 	if ((value && value <= base) || value <= minimum) return [ 'Cannot withdraw below the minimum amount' ];
// }

// // helper function to validate Nigerian Phone numbers
// // https://github.com/chriso/validator.js/blob/master/src/lib/isMobilePhone.js
// export function isPhoneNigerian(value, values = {}) {
// 	if (!value) return [ 'This field is required' ];
// 	if ((value && !nigerian.test(value)) || value.length < 5) return [ 'Not Nigerian' ];
// }
