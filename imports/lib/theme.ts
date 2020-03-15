import { theme as chakraTheme } from '@chakra-ui/core';

interface IThemeProps {
	[key: string]: string;
}
interface IColors {
	black: string;
	default: string;
	tomato: string;
	text: string;
	background: string;
	[key: string]: any;
}
type TBreakPoint = Array<string>;

const fonts: IThemeProps = {
	...chakraTheme.fonts,
	mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
	heading: `"Barlow", "Cantarell", "Oxygen", "Ubuntu", sans-serif`,
	body: `'Barlow', "Segoe UI", "Cantarell", "Oxygen", "Ubuntu", "Roboto", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
};
const fontSizes: IThemeProps = {
	xs: '0.65rem',
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
const custom: IThemeProps = {
	buttonHeight: '48px',
	inputMinHeight: '60px',
	inputFontSize: '16px',
	blue: '#0476D0',
	green: '#028248',
	tabNavHeight: '54px',
	defaultBox: '1rem',
	defaultWrapper: '.5rem 1.1rem'
};
const colors: IColors = {
	...chakraTheme.colors,
	black: '#010203',
	default: '#4EB191',
	tomato: 'FF5238',
	text: '#1D1D1D',
	background: '#FCFDFF'
};
const breakpoints: TBreakPoint = [ '40em', '52em', '64em' ];

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
