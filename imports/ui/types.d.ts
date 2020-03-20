import theme from 'imports/lib/theme';

type ThemeInterface = typeof theme;

declare module 'styled' {
	interface DefaultTheme extends ThemeInterface {}
}

declare module 'react-signature-pad-wrapper'

declare module 'money';
declare module 'number-counter';
declare module 'raf';

interface IColors {
	black: string;
	default: string;
	tomato: string;
	text: string;
	background: string;
	[key: string]: any;
}
