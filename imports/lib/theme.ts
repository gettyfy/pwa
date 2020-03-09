import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = {
	...chakraTheme.fonts,
	mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
	heading: `"Barlow", sans-serif'`,
	body: `'Barlow', "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
};
const fontSizes = {
	xs: '0.75rem',
	sm: '0.875rem',
	md: '1rem',
	lg: '1.125rem',
	xl: '1.25rem',
	'2xl': '1.5rem',
	'3xl': '1.875rem',
	'4xl': '2.25rem',
	'5xl': '3rem',
	'6xl': '4rem'
};
const custom = {
	buttonHeight: '48px'
};
const colors = {
	...chakraTheme.colors,
	black: '#010203',
	default: '#4EB191',
	tomato: 'FF5238',
	text: '#1D1D1D',
	background: '#FCFDFF',
	blue: {
		900: '#0476D0'
	},
	green: {
		900: '#028248'
	}
};
const breakpoints = [ '40em', '52em', '64em' ];

const theme = {
	...chakraTheme,
	colors,
	fonts,
	fontSizes,
	breakpoints,
	custom,
	icons: {
		...chakraTheme.icons,
		viewBox: '0 0 3000 3163'
	}
};

export default theme;
