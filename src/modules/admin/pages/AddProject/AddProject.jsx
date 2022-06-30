import styled from "@emotion/styled";
import { Box, Grid, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import InputField from "../../../../components/InputField";
import MultiSelect from "../../../../components/MultiSelect";
import { AddIcon } from "../../../../constants/icons";
import {
	FormBtn,
	StyledBox,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";

const AddProject = () => {
	return (
		<Stack spacing={2}>
			<StyledBox>
				<StyledPageTitle variant="h5" mb={4}>
					Add Project
				</StyledPageTitle>
				<Grid container spacing={2} mb={2}>
					<Grid item xs={12} sm={3}>
						<InputField name="Project" placeholder="Project" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField name="Short Title" placeholder="Short Title" />
					</Grid>
					<Grid item xs={12} sm={3}>
						<InputField
							name="Tender Type"
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
							name="Classification"
							placeholder="Classification"
							select
							defaultValue="0"
						>
							<MenuItem value="0">Opportunity</MenuItem>
							<MenuItem value="1">Government</MenuItem>
						</InputField>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField name="Long Title" placeholder="Long Title" />
					</Grid>
					<Grid item xs={12} sm={3}>
						<InputField name="Panel" placeholder="Panel" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
					</Grid>
				</Grid>
				<Grid container spacing={2} mb={2}>
					<Grid item xs={12} sm={3}>
						<Stack spacing={2}>
							<InputField name="Team" placeholder="Team" select defaultValue="0">
								<MenuItem value="0">Select</MenuItem>
								<MenuItem value="1">Option 2</MenuItem>
							</InputField>
							<InputField name="Status" placeholder="Status" select defaultValue="0">
								<MenuItem value="0">Select</MenuItem>
								<MenuItem value="1">Option 2</MenuItem>
							</InputField>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={6}>
						<InputField name="Description" placeholder="Description" multiline />
					</Grid>
					<Grid item xs={12} sm={3}>
						<Stack spacing={2}>
							<InputField name="Proj Mgr" placeholder="Proj Mgr" select defaultValue="0">
								<MenuItem value="0">Select</MenuItem>
								<MenuItem value="1">Option 2</MenuItem>
							</InputField>
							<InputField name="Director" placeholder="Director" select defaultValue="0">
								<MenuItem value="0">Select</MenuItem>
								<MenuItem value="1">Option 2</MenuItem>
							</InputField>
						</Stack>
					</Grid>
				</Grid>
				<Grid container spacing={2} mb={2}>
					<Grid item xs={12} sm={3}>
						<InputField name="Type" placeholder="Type" select defaultValue="0">
							<MenuItem value="0">Select</MenuItem>
							<MenuItem value="1">Option 2</MenuItem>
						</InputField>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container direction="row" alignItems="flex-end" spacing={2}>
							<Grid item xs={12} sm>
								<InputField name="Client" placeholder="Client" />
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
						<InputField name="Invoice Reference" placeholder="Invoice Reference" />
					</Grid>
					<Grid item xs={12}>
						<Typography color={"primary"} variant="h6" gutterBottom>
							Keywords
						</Typography>
						<KeywordWrapper>
							<MultiSelect />
						</KeywordWrapper>
					</Grid>
				</Grid>
			</StyledBox>
		</Stack>
	);
};

export default AddProject;

const KeywordWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.light,
	padding: theme.spacing(2),
	borderRadius: 5,
}));