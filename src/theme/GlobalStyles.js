import { Box, Button, TextField, FormGroup, TableContainer, Dialog, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "./palette";

export const StyledBox = styled(Box)(({ theme }) => ({
	minHeight: "60px",
	backgroundColor: palette.common.white,
	padding: theme.spacing(2),
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	borderRadius: 5,
	boxShadow: "0px 0px 4px rgba(166, 166, 166, 0.25)",
	gap: theme.spacing(3),
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
	padding: theme.spacing(0.9),
	paddingInline: theme.spacing(2),
}));
export const StyledCheckBoxWrapper = styled(FormGroup)(({ theme }) => ({
	"& .MuiFormControlLabel-root ": {
		marginLeft: 0,
	},
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
	flex: 1,
	width: "100%",
	borderRadius: 5,
	backgroundColor: palette.common.white,
	borderColor: palette.border,

	"& .MuiOutlinedInput-input": {
		padding: theme.spacing(1.2),
		// fontSize: 14,
		color: palette.grey[600],
	},
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	position: "relative",
	width: "100%",
	overflow: "hidden",
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,

	"& .MuiTableHead-root": {
		minHeight: 80,
	},

	"& .MuiTableRow-root": {
		border: "none",
		cursor: "pointer",
	},
	"& .MuiTableCell-head": {
		backgroundColor: palette.secondary.main,
		color: palette.common.white,
		padding: theme.spacing(1.5),
		textTransform: "uppercase",
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
		"& .MuiCheckbox-root": {
			padding: theme.spacing(0.6),
		},
		"& input": {
			textAlign: "center",
			whiteSpace: "nowrap",
			wordBreak: "keep-all",
		},
	},
	"& .date": {
		"& .MuiFormControl-root": {
			overflow: "hidden",
			backgroundColor: "rgb(255 255 255 / 8%)",
			"& .MuiButtonBase-root": {
				padding: 1,
				backgroundColor: "rgba(16, 87, 118, 0.08)",
				borderRadius: 0,
				position: "relative",
				right: -3,
			},
			"& .MuiSvgIcon-root": {
				fontSize: "2.3rem",
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
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogTitle-root": {
		color: palette.primary.main,
		fontWeight: "bold",
	},
	"& .MuiDivider-root": {
		marginInline: theme.spacing(3),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(3),
		paddingTop: 0,
		"& .MuiButton-root": {
			minWidth: 120,
		},
		gap: theme.spacing(2),
	},
	"& .MuiTableContainer-root": {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		position: "relative",
		overflow: "auto",
		"& .sticky-cell": {
			position: "sticky",
			backgroundColor: palette.common.white,
			right: -1,
		},

		"& .MuiTableCell-head": {
			fontSize: 16,
			textTransform: "uppercase",
			backgroundColor: palette.secondary.main,
			color: palette.common.white,
			padding: theme.spacing(1.5),
		},
		"& .MuiTableBody-root ": {
			border: `1px solid ${palette.border}`,
		},
		"& .MuiTableCell-root": {
			borderBottom: `1px solid ${palette.border}`,
			padding: theme.spacing(1),
			"& .MuiInputBase-input": {
				padding: theme.spacing(0.6),
			},
			"& .MuiCheckbox-root": {
				padding: theme.spacing(0.6),
			},
			"& input": {
				whiteSpace: "nowrap",
				wordBreak: "keep-all",
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
		},
	},
}));

export const CloseBtn = styled(IconButton)(({ theme }) => ({
	position: "absolute",
	top: 10,
	right: 10,
}));
