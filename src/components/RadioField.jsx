import styled from "@emotion/styled";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import React from "react";

const RadioField = ({ label, dir, radioList, value, onChange, ...rest }) => {
	return (
		<FormControl>
			<StyledFormLabel id="demo-row-radio-buttons-group-label">
				{label}
			</StyledFormLabel>
			<RadioGroup
				row={Boolean(dir)}
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
				value={value}
				onChange={onChange}
				{...rest}
			>
				{radioList?.map((item, index) => {
					return (
						<FormControlLabel
							sx={{ fontWeight: "normal" }}
							key={index}
							value={item.value}
							control={<Radio />}
							label={item.label}
						/>
					);
				})}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioField;

const StyledFormLabel = styled(FormLabel)({
	fontSize: "13px !important",
	fontWeight: 500,
});
