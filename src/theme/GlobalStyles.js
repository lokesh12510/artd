import { Box, Button, TextField, FormGroup, TableContainer, Dialog, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "./palette";

export const StyledBox = styled(Box)(({ theme }) => ({
	minHeight: "60px",
	backgroundColor: palette.common.white,
	padding: theme.spacing(2),
	borderRadius: 5,
	// boxShadow: "0px 0px 4px rgba(166, 166, 166, 0.25)",
	gap: theme.spacing(3),
	border: "1px solid rgba(0, 0, 0, 0.1)",
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
	padding: theme.spacing(0.9),
	paddingInline: theme.spacing(3),
	[theme.breakpoints.down("lg")]: {
		padding: theme.spacing(0.6),
		paddingInline: theme.spacing(2),
	},
}));
export const StyledCheckBoxWrapper = styled(FormGroup)(({ theme }) => ({
	"& .MuiFormControlLabel-root ": {
		marginLeft: 0,
	},
}));
export const ButtonStack = styled(Stack)(({ theme, btnwidth }) => ({
	gap: theme.spacing(1),
	"& .MuiButton-root": {
		minWidth: btnwidth ? btnwidth : "auto",
	},
	"& .MuiButton-outlined": {
		backgroundColor: palette.common.white,
	},
}));
export const StyledPageHeader = styled(StyledBox)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
}));

export const StyledInput = styled(TextField)(({ theme, align = "left" }) => ({
	flex: 1,
	width: "100%",
	borderRadius: 5,
	backgroundColor: palette.common.white,
	borderColor: palette.border,

	"& .MuiOutlinedInput-input": {
		// height: "100%",
		padding: theme.spacing(1.2),
		// fontSize: 14,
		textAlign: align,
		color: palette.grey[600],
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: `1px solid #6d6a6a3b`,
	},
}));

export const StyledSelect = styled(StyledInput)(({ theme, align = "left" }) => ({
	"& .MuiSelect-select": {
		padding: theme.spacing(0.7),
		position: "relative",
		overflow: "hidden",
		"&::after": {
			content: '""',
			position: "absolute",
			right: 0,
			top: 0,
			width: 35,
			height: "100%",
			backgroundColor: palette.border,
			borderLeft: `1px solid #bfbebe`,
		},
	},
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	position: "relative",
	width: "100%",
	overflow: "auto",
	boxShadow: "0px 0px 1px -1px rgb(0 0 0 / 20%), 0px 1px 0px 0px rgb(0 0 0 / 14%), 0px -2px 0px 0px rgb(0 0 0 / 12%)",
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,

	"& .MuiTableHead-root": {
		minHeight: 80,
	},
	[theme.breakpoints.up("md")]: {
		"& .sticky-table": {
			backgroundColor: "#fff",
			position: "sticky",
			left: 0,
			zIndex: 2,
		},
	},
	"& .sticky-table": {
		"& .MuiTableCell-head": {
			color: "#fff",
			textTransform: "uppercase",
			padding: theme.spacing(1),
			paddingBlock: theme.spacing(1.5),
		},
	},
	"& .scroll-table": {
		flex: 2,
		backgroundColor: "#fff",
		"& .MuiTableCell-body": {
			paddingBlock: theme.spacing(1),
		},
		"& .MuiTableCell-body.accordion": {
			paddingBlock: 0,
		},
		"& .MuiTableCell-head": {
			color: "#fff",
			padding: theme.spacing(1),
			paddingBlock: theme.spacing(1.5),
		},
	},

	"& .MuiTableCell-head": {
		padding: theme.spacing(1.5),
		// fontSize: 16,
		textTransform: "uppercase",
		backgroundColor: palette.secondary.main,
		color: palette.common.white,
	},
	"& .MuiTableRow-root.Mui-selected": {
		"&:hover": {
			backgroundColor: "rgba(16, 87, 118, 0.08)",
		},
	},
	"& .Mui-selected": {
		"& .MuiTextField-root": {
			pointerEvents: "none",
			"& input": {
				color: palette.grey[400],
				backgroundColor: "rgba(16, 87, 118, 0.08)",
			},
		},
		"& .MuiInputBase-input": {
			pointerEvents: "none",
		},
	},
	"& .MuiSelect-select": {
		position: "relative",
		overflow: "hidden",
		"&::after": {
			content: '""',
			position: "absolute",
			right: 0,
			top: 0,
			width: 35,
			height: "100%",
			backgroundColor: palette.border,
			borderLeft: `1px solid #bfbebe`,
		},
	},
	"& .MuiTableCell-root": {
		"& .dropdown": {
			padding: 0,
			"& .MuiSvgIcon-root": {
				width: 32,
				height: 32,
			},
		},
		"& .MuiInputAdornment-root": {
			marginLeft: 0,
		},
	},

	"& .MuiTableCell-body": {
		paddingBlock: theme.spacing(1),
		paddingInline: theme.spacing(0.6),
		"& .MuiInputBase-input": {
			padding: theme.spacing(1),
		},
		"& .MuiButtonBase-root": {
			padding: theme.spacing(0.5),
		},
		"& .MuiCheckbox-root": {
			padding: theme.spacing(0.4),
		},
		"& input": {
			textAlign: "center",
			whiteSpace: "nowrap",
			wordBreak: "keep-all",
		},
	},

	"& .accordion": {
		borderBottom: `1px solid ${palette.primary.main}`,
		paddingBlock: 0,
	},
	"& .date": {
		"& .MuiFormControl-root": {
			overflow: "hidden",
			backgroundColor: "rgb(255 255 255 / 8%)",
			"& .MuiButtonBase-root": {
				padding: 1,
				backgroundColor: "rgba(16, 87, 118, 0.08)",
				borderLeft: `1px solid #bfbebe`,
				borderRadius: 0,
				position: "relative",
				right: -3,
			},
			"& .MuiSvgIcon-root": {
				fontSize: "2rem",
			},
			"& input": {
				backgroundColor: "transparent",
			},
		},
	},
	"& .expenses": {
		"& input": {
			backgroundColor: "#e3f9ff",
			textDecoration: "underline",
			cursor: "pointer",
		},
	},
	"& .sticky-right-table": {
		"& .MuiTableCell-root.hiddenCell": {
			borderBottom: "none",
		},
	},
	"& .sticky-cell": {
		position: "sticky",
		backgroundColor: palette.common.white,
		right: -1,
	},

	"& .MuiTableBody-root ": {
		border: `1px solid ${palette.border}`,
	},
	"& .stripped": {
		"& .MuiTableRow-root": {
			"&:nth-of-type(even)": {
				backgroundColor: palette.action.hover,
			},
			// hide last border
			"&:last-child td, &:last-child th": {
				border: 0,
			},
		},
	},
}));

export const CloseBtn = styled(IconButton)(({ theme }) => ({
	position: "absolute",
	top: 10,
	right: 10,
}));
