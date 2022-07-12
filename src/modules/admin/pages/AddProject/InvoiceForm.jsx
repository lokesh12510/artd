import React from "react";
// Mui
import { Grid } from "@mui/material";
// Components
import AccordionWrapper from "../../../../components/AccordionWrapper";
import InputField from "../../../../components/InputField";
import InvoiceFormTable from "./InvoiceFormTable";
// Custom styles
import { CustomBox, StyledBox } from "../../../../theme/GlobalStyles";

const InvoiceForm = () => {
	return (
		<AccordionWrapper title={"Invoice Schedule"}>
			<StyledBox>
				<CustomBox>
					<InvoiceFormTable data={data} />
				</CustomBox>
				<Grid container spacing={2} my={1}>
					<Grid item xs={12} sm={3}>
						<InputField label="Budget Total" />
					</Grid>
					<Grid item xs={12} sm={3}>
						<InputField label="Invoice Total" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField
							label="Notes"
							placeholder="Notes here..."
							multiple
							height={"100px"}
						/>
					</Grid>
				</Grid>
			</StyledBox>
		</AccordionWrapper>
	);
};

export default InvoiceForm;

// Dummy Data
const data = [
	{
		id: 1,
		mil: "On Commencement",
		when: "20 Mar 2022",
		val: "55,663",
		status: "paid",
	},
	{
		id: 2,
		mil: "On Completion",
		when: "15 May 2022",
		val: "54,000",
		status: "sent",
	},
	{
		id: 3,
		mil: "On Commencement",
		when: "22 Jun 2022",
		val: "55,000",
		status: "expected",
	},
];
