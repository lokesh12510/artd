import React from "react";
// Mui
import { Grid, MenuItem } from "@mui/material";
// Components
import AccordionWrapper from "../../../../components/AccordionWrapper";
import DateField from "../../../../components/DateField";
import InputField from "../../../../components/InputField";
// Custom Styles
import { StyledBox } from "../../../../theme/GlobalStyles";

const OpportunityForm = () => {
	return (
		// Wrapped with inside `AccordionWrapper` component
		<AccordionWrapper title={"Opportunity"}>
			<StyledBox>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<DateField label={"Date Received"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<DateField label={"Due Date"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<DateField label={"EOI Due Date"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<InputField select label="Person Responsible" defaultValue={0}>
									<MenuItem value={0}>Select</MenuItem>
									<MenuItem value={1}>Option 2</MenuItem>
								</InputField>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField
							label="Notes"
							placeholder="Notes here..."
							multiline
							height={{ height: "100%" }}
						/>
					</Grid>
				</Grid>
			</StyledBox>
		</AccordionWrapper>
	);
};

export default OpportunityForm;
