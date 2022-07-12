import React from "react";
// Mui
import { Box, Grid, MenuItem, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Components
import InputField from "../../../../components/InputField";
import MultiSelect from "../../../../components/MultiSelect";
// Custom Icons
import { AddIcon } from "../../../../constants/icons";
// Custom Styles
import {
	FormBtn,
	StyledBox,
	StyledLabel,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";

const ProjectForm = () => {
	return (
		<StyledBox>
			<StyledPageTitle mb={2}>Add Project</StyledPageTitle>
			{/* Project form Grid */}
			<Grid container spacing={2} mb={2}>
				<Grid item xs={12} sm={3}>
					<InputField label="Project" placeholder="Project" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField label="Short Title" placeholder="Short Title" />
				</Grid>
				<Grid item xs={12} sm={3}>
					<InputField
						label="Tender Type"
						placeholder="Tender Type"
						select
						defaultValue="Select"
					>
						<MenuItem value="Select">Select</MenuItem>
						<MenuItem value="Government">Government</MenuItem>
					</InputField>
				</Grid>
			</Grid>
			<Grid container spacing={2} mb={2}>
				<Grid item xs={12} sm={3}>
					<InputField
						label="Classification"
						placeholder="Classification"
						select
						defaultValue="0"
					>
						<MenuItem value="0">Opportunity</MenuItem>
						<MenuItem value="1">Government</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField label="Long Title" placeholder="Long Title" />
				</Grid>
				<Grid item xs={12} sm={3}>
					<InputField label="Panel" placeholder="Panel" select defaultValue="0">
						<MenuItem value="0">Select</MenuItem>
						<MenuItem value="1">Option 2</MenuItem>
					</InputField>
				</Grid>
			</Grid>
			<Grid container spacing={2} mb={2}>
				<Grid item xs={12} sm={3}>
					<Stack spacing={2}>
						<InputField label="Team" placeholder="Team" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
						<InputField label="Status" placeholder="Status" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						label="Description"
						placeholder="Description"
						multiline
						height={"100%"}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Stack spacing={2}>
						<InputField label="Proj Mgr" placeholder="Proj Mgr" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
						<InputField label="Director" placeholder="Director" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
					</Stack>
				</Grid>
			</Grid>
			<Grid container spacing={2} mb={2}>
				<Grid item xs={12} sm={3}>
					<InputField label="Type" placeholder="Type" select defaultValue="0">
						<MenuItem value="0">Select</MenuItem>
						<MenuItem value="1">Option 2</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid container direction="row" alignItems="flex-end" spacing={2}>
						<Grid item xs={12} sm>
							<InputField label="Client" placeholder="Client" />
						</Grid>
						<Grid item xs={12} sm="auto">
							<FormBtn
								variant="outlined"
								color="primary"
								startIcon={<AddIcon color="primary" />}
							>
								Add Client
							</FormBtn>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={3}>
					<InputField label="Invoice Reference" placeholder="Invoice Reference" />
				</Grid>
				<Grid item xs={12}>
					<Typography color={"primary"} variant="subtitle1" gutterBottom>
						Keywords
					</Typography>
					{/* Multi Select Wrapper */}
					<KeywordWrapper>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<div>
									<StyledLabel shrink>Subject</StyledLabel>
									<MultiSelect height={"80px"} />
								</div>
							</Grid>
							<Grid item xs={12} sm={6}>
								<div>
									<StyledLabel shrink>Methods</StyledLabel>
									<MultiSelect height={"80px"} />
								</div>
							</Grid>
						</Grid>
					</KeywordWrapper>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default ProjectForm;

// Styles
const KeywordWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.light,
	padding: theme.spacing(2),
	borderRadius: 5,
}));
