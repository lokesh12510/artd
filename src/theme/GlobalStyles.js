import { Box, Button, Stack, Typography, TextField, FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "./palette";

export const StyledBox = styled(Box)(({ theme }) => ({
	minHeight: "60px",
	backgroundColor: palette.common.white,
	padding: theme.spacing(1),
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
		fontSize: 14,
		color: palette.grey[600],
	},
}));
