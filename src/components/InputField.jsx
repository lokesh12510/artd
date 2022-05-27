import React from "react";

import InputLabel from "@mui/material/InputLabel";
import { FormControl, Input, styled, TextField } from "@mui/material";
import palette from "../theme/palette";
import { StyledInput } from "../theme/GlobalStyles";

const InputField = (props) => {
	return (
		<Root variant="standard">
			<InputLabel shrink htmlFor={props.name}>
				{props.name}
			</InputLabel>
			<CustomInput fullWidth id={props.name} {...props} />
		</Root>
	);
};

export default InputField;

const Root = styled(FormControl)(({ theme }) => ({
	width: "100%",
	"& .MuiInputLabel-root": {
		fontSize: 16,
		fontWeight: "600",
		textTransform: "capitalize",
		color: palette.label,
	},
}));
const CustomInput = styled(StyledInput)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		minHeight: 42,
		height: "100%",
	},
	"label + &": {
		marginTop: theme.spacing(2.8),
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: `1px solid #6d6a6a3b`,
	},
}));
