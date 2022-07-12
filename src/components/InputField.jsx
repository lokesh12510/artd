import React, { useState } from "react";

import { FormControl, styled } from "@mui/material";
import palette from "../theme/palette";
import { StyledInput, StyledLabel } from "../theme/GlobalStyles";

const InputField = (props) => {
	const [focus, setFocus] = useState(false);

	return (
		<Root variant="standard" sx={{ height: props.height || "auto" }}>
			{props.label && (
				<StyledLabel
					shrink
					htmlFor={props.label}
					sx={{ color: focus ? palette.primary.main : palette.label }}
				>
					{props.label}
				</StyledLabel>
			)}

			<CustomInput
				fullWidth
				id={props.label}
				InputProps={{
					onFocus: () => {
						setFocus(true);
					},
					onBlur: () => {
						setFocus(false);
					},
				}}
				{...props}
				label=""
			/>
		</Root>
	);
};

export default InputField;

const Root = styled(FormControl)(({ theme }) => ({
	width: "100%",
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
		border: `1px solid ${theme.palette.inputBorder}`,
	},
	"& .MuiInputAdornment-outlined": {
		position: "relative",
		top: 20,
	},
}));
