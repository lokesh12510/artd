import styled from "@emotion/styled";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import React from "react";

const RadioField = ({ label, dir, radioList }) => {
	return (
		<FormControl>
			<StyledFormLabel id="demo-row-radio-buttons-group-label">
				{label}
			</StyledFormLabel>
			<RadioGroup
				row={Boolean(dir)}
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>
				{radioList?.map((item, index) => {
					return (
						<FormControlLabel
							sx={{ marginRight: 10 }}
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
	fontSize: "12px !important",
});
