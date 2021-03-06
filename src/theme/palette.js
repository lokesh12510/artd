import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
	0: "#FFFFFF",
	50: "#FAFAFC",
	100: "#00000008",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#979696CC",
	500: "#919EAB",
	600: "#4D4D4DB2",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
	500_8: alpha("#919EAB", 0.08),
	500_12: alpha("#919EAB", 0.12),
	500_16: alpha("#919EAB", 0.16),
	500_24: alpha("#919EAB", 0.24),
	500_32: alpha("#919EAB", 0.32),
	500_48: alpha("#919EAB", 0.48),
	500_56: alpha("#919EAB", 0.56),
	500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
	light: "#105776CC",
	main: "#105776",
	borderLight: "#10577633",
};

const SECONDARY = {
	light: "#EFF7F9",
	main: "#49A7C3",
	borderLight: "#49A7C333",
	//dark: '#49A7C3',
};

const INFO = {
	main: "#48A9C5CC",
};

const SUCCESS = {
	dark: "#1B6D1F",
	main: "#54D62C",
	light: "#D0FED2",
};

const WARNING = {
	main: "#FFC107",
	light: "#FFDB94",
	dark: "#886808",
};

const ERROR = {
	main: "#FF4842",
};

const LIGHT = {
	main: "#fff",
};

const DARK = {
	main: "#000000B2",
	dark: "#000000CC",
};
const BODY = {
	main: "#f1f1f1",
};

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
};

const palette = {
	common: { black: "#000", white: "#fff" },
	primary: { ...PRIMARY },
	secondary: { ...SECONDARY },
	info: { ...INFO },
	success: { ...SUCCESS },
	warning: { ...WARNING },
	error: { ...ERROR },
	light: { ...LIGHT },
	dark: { ...DARK },
	grey: GREY,
	gradients: GRADIENTS,
	disabled: "#F5F5F9",
	border: "#EFEFEF",
	inputBorder: "#6d6a6a3b",
	divider: GREY[500_24],
	copyright: "#F18448",
	highlight: "#e0eff480",
	body: { ...BODY },
	label: "#000000B2",
	text: { primary: "#000000ad", secondary: GREY[600], disabled: GREY[500] },
	background: { paper: "#fff", default: GREY[100], neutral: GREY[200] },
	action: {
		active: GREY[600],
		hover: "#e0eff480",
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};

export default palette;
