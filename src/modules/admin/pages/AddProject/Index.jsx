import React from "react";
// Mui
import { Stack } from "@mui/material";
// Custom Styles
import { ButtonStack, StyledBtn } from "../../../../theme/GlobalStyles";
// Components
import ContactForm from "./ContactForm";
import InvoiceForm from "./InvoiceForm";
import OpportunityForm from "./OpportunityForm";
import ProjectForm from "./ProjectForm";
import ProposalForm from "./ProposalForm";

const AddProject = () => {
	return (
		<Stack spacing={2}>
			<ProjectForm />
			<OpportunityForm />
			<ProposalForm />
			<InvoiceForm />
			<ContactForm />
			<ButtonStack
				direction={"row"}
				alignItems="center"
				justifyContent={"flex-end"}
				btnwidth={120}
			>
				<StyledBtn variant="contained" color={"primary"}>
					Save
				</StyledBtn>
				<StyledBtn variant="outlined" color={"dark"}>
					Cancel
				</StyledBtn>
			</ButtonStack>
		</Stack>
	);
};

export default AddProject;
