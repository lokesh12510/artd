import { Grid } from "@mui/material";
import React from "react";
import AccordionWrapper from "../../../../components/AccordionWrapper";
import CheckboxField from "../../../../components/CheckboxField";
import MultiSelect from "../../../../components/MultiSelect";
import { AddIcon } from "../../../../constants/icons";
import { CustomBox, FormBtn, StyledBox } from "../../../../theme/GlobalStyles";
import ContactFormTable from "./ContactFormTable";

const ContactForm = () => {
	return (
		<AccordionWrapper title={"Invoice Contact "}>
			<StyledBox>
				<Grid container spacing={2} justifyContent="space-between" mb={2}>
					<Grid item xs={12} sm={7} lg={9}>
						<MultiSelect />
					</Grid>
					<Grid item xs={12} sm={"auto"}>
						<FormBtn
							variant="outlined"
							color="primary"
							startIcon={<AddIcon color="primary" />}
						>
							Add Contact
						</FormBtn>
					</Grid>
				</Grid>
				<CustomBox>
					<ContactFormTable data={data} />
				</CustomBox>
				<CheckboxField label={"Final Invoice Paid"} />
			</StyledBox>
		</AccordionWrapper>
	);
};

export default ContactForm;

const data = [
	{
		id: 1,
		position: "Demo name 1",
		email: "demo@gmail.com",
		phone: "+61 423 551 482",
		mobile: "+61 423 551 482",
	},
	{
		id: 2,
		position: "Demo name 2",
		email: "demo@gmail2.com",
		phone: "+61 423 551 482",
		mobile: "+61 423 551 482",
	},
	{
		id: 3,
		position: "Demo name 3",
		email: "demo@gmail3.com",
		phone: "+61 423 551 482",
		mobile: "+61 423 551 482",
	},
];
