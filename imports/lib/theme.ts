import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = { ...chakraTheme.fonts,  body: "Barlow, sans-serif", mono: `'Menlo', monospace`, heading: `"Barlow", sans-serif'` };
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
const breakpoints = ['40em', '52em', '64em'];
const custom = {
	buttonHeight: '48px',
}

const theme = {
	...chakraTheme,
	colors: {
		...chakraTheme.colors,
		black: '#16161D'
	},
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
