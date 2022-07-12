import React from "react";
// Mui
import { FormGroup, Grid, MenuItem, Stack } from "@mui/material";
// Custom Components
import InputField from "../../../../../components/InputField";
// Custom Styles
import { StyledBox } from "../../../../../theme/GlobalStyles";
import CheckboxField from "../../../../../components/CheckboxField";
import DateField from "../../../../../components/DateField";

const Form = () => {
	return (
		<StyledBox>
			<Grid container spacing={3}>
				<Grid item xs>
					<Stack direction={"column"} spacing={2}>
						{/* Code */}
						<InputField label="code" value={""} style={{ maxWidth: 100 }} />
						{/* Name */}
						<InputField label="name" value={""} />
						{/* Email */}
						<InputField label="email" value={""} />
						{/* User Type */}
						<InputField label="User Type" value={""} select>
							<MenuItem value={"Marketing"}>Marketing</MenuItem>
							<MenuItem value={"Developer"}>Developer</MenuItem>
						</InputField>
						{/* Position */}
						<FormGroup aria-label="position" row>
							<CheckboxField label={"Active?"} />
							<CheckboxField label={"Available for project?"} />
							<CheckboxField label={"Left ARTD?"} />
						</FormGroup>
					</Stack>
				</Grid>

				<Grid item xs>
					<Stack direction={"column"} spacing={2}>
						{/* Type */}
						<InputField label="Type" value={0} select>
							<MenuItem value={0}>Select</MenuItem>
							<MenuItem value={1}>News</MenuItem>
						</InputField>
						{/* Start Date */}
						<DateField label={"Start Date"} />
						{/* Start Week */}
						<InputField label="Start Week" value={0} select>
							<MenuItem value={0}>Select</MenuItem>
							<MenuItem value={1}>News</MenuItem>
						</InputField>
						{/* End Week */}
						<InputField label="End Week" value={0} select>
							<MenuItem value={0}>Select</MenuItem>
							<MenuItem value={1}>News</MenuItem>
						</InputField>
					</Stack>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default Form;
