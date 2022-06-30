import { Grid, MenuItem } from "@mui/material";
import React from "react";
import AccordionWrapper from "../../../../components/AccordionWrapper";
import DateField from "../../../../components/DateField";
import InputField from "../../../../components/InputField";
import { StyledBox } from "../../../../theme/GlobalStyles";

const OpportunityForm = () => {
	return (
		<AccordionWrapper title={"Opportunity"}>
			<StyledBox>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<DateField name={"Date Received"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<DateField name={"Due Date"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<DateField name={"EOI Due Date"} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<InputField select name="Person Responsible" defaultValue={0}>
									<MenuItem value={0}>Select</MenuItem>
									<MenuItem value={1}>Option 2</MenuItem>
								</InputField>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField
							name="Notes"
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
