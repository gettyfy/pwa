import theme from 'imports/lib/theme';

type ThemeInterface = typeof theme;

declare module 'styled' {
	interface DefaultTheme extends ThemeInterface {}
}

declare module 'money';
declare module 'number-counter';
declare module 'raf';
