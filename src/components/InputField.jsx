import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import { FormControl, styled } from "@mui/material";
import palette from "../theme/palette";
import { StyledInput } from "../theme/GlobalStyles";

const InputField = (props) => {
	const [focus, setFocus] = useState(false);

	return (
		<Root variant="standard">
			<InputLabel
				shrink
				htmlFor={props.name}
				sx={{ color: focus ? palette.primary.main : palette.label }}
			>
				{props.name}
			</InputLabel>
			<CustomInput
				fullWidth
				id={props.name}
				{...props}
				InputProps={{
					onFocus: () => {
						setFocus(true);
					},
					onBlur: () => {
						setFocus(false);
					},
				}}
			/>
		</Root>
	);
};

export default InputField;

const Root = styled(FormControl)(({ theme }) => ({
	width: "100%",
	height: "100%",
	"& .MuiInputLabel-root": {
		fontSize: 16,
		fontWeight: "600",
		textTransform: "capitalize",
	},
}));
const CustomInput = styled(StyledInput)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		minHeight: 42,
		height: "100%",
		alignItems: "flex-start",
		"&.MuiInputBase-multiline": {
			padding: 0,
		},
	},
	"label + &": {
		marginTop: theme.spacing(2.8),
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: `1px solid #6d6a6a3b`,
	},
}));
