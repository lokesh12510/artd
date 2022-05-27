import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { AddIcon } from "../../../../constants/icons";
import { ButtonStack, StyledBox, StyledBtn } from "../../../../theme/GlobalStyles";
import StaffForm from "./StaffForm";
import StaffList from "./StaffList";
import StatusStack from "./StatusStack";

const StaffMaintenance = () => {
	return (
		<StyledBox>
			<Stack direction={"row"} justifyContent="space-between" alignItems={"center"} mb={3}>
				<Typography variant="h5" color={"primary"}>
					Staff Maintenance
				</Typography>
				<StyledBtn variant="contained" startIcon={<AddIcon />}>
					Add Staff
				</StyledBtn>
			</Stack>
			<Grid container spacing={2}>
				<Grid item sm={12} md={4} lg={3}>
					<StaffList />
				</Grid>
				<Grid item sm={12} md={8} lg={9}>
					<Stack direction={"column"} rowGap={2}>
						<StatusStack />
						<StaffForm />
					</Stack>
				</Grid>
			</Grid>
			<Stack direction={"row"} alignItems="center" justifyContent={"flex-end"} my={3}>
				<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"} btnwidth={120}>
					<StyledBtn variant="contained" color={"primary"}>
						Save
					</StyledBtn>
					<StyledBtn variant="outlined" color={"primary"}>
						Reset
					</StyledBtn>
					<StyledBtn variant="outlined" color={"dark"}>
						Cancel
					</StyledBtn>
				</ButtonStack>
			</Stack>
		</StyledBox>
	);
};

export default StaffMaintenance;
