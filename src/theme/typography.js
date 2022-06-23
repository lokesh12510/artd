// ----------------------------------------------------------------------

function pxToRem(value) {
	return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
	return {
		fontSize: pxToRem(sm),

		"@media (min-width:600px)": {
			fontSize: pxToRem(sm),
		},
		"@media (min-width:1000px)": {
			fontSize: pxToRem(md),
		},
		"@media (min-width:1200px)": {
			fontSize: pxToRem(lg),
		},
	};
}

const FONT_PRIMARY = "Poppins, sans-serif";

const typography = {
	fontFamily: FONT_PRIMARY,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
	root: {
		color: "#000000B2",
	},
	h1: {
		fontWeight: 700,
		lineHeight: 80 / 64,
		fontSize: pxToRem(40),
		...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
	},
	h2: {
		fontWeight: 700,
		lineHeight: 64 / 48,
		fontSize: pxToRem(32),
		...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
	},
	h3: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
	},
	h4: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(24),
		...responsiveFontSizes({ sm: 20, md: 22, lg: 24 }),
	},
	h5: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 18, md: 18, lg: 20 }),
	},
	h6: {
		fontWeight: 700,
		lineHeight: 28 / 18,
		...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
	},
	subtitle1: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: pxToRem(16),
	},
	subtitle2: {
		fontWeight: 600,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14),
		letterSpacing: 1.02,
	},
	body1: {
		lineHeight: 1.5,
		// color: "#000",
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
	},
	body2: {
		lineHeight: 22 / 14,
		fontWeight: 400,
		fontSize: pxToRem(14),
	},
	caption: {
		lineHeight: 1.5,
		fontSize: pxToRem(12),
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		letterSpacing: 1.1,
		textTransform: "uppercase",
	},
	button: {
		fontWeight: 600,
		lineHeight: 24 / 14,
		fontSize: pxToRem(14),
		textTransform: "uppercase",
		letterSpacing: 1.15,
	},
	label: {
		fontSize: pxToRem(16),
		...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
	},
};

export default typography;
