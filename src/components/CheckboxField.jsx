import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import palette from "../theme/palette";

const CheckboxField = ({ label, color }) => {
	return (
		<FormControlLabel
			control={
				<Checkbox color={color} sx={{ color: palette[color]?.main, paddingBlock: 1 }} />
			}
			label={<Typography sx={{ color: palette[color]?.main }}>{label}</Typography>}
		/>
	);
};

export default CheckboxField;
