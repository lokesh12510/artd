import React, { useState } from "react";
// Mui
import { Grid, Stack } from "@mui/material";
import styled from "@emotion/styled";
// Custom Styles
import {
	ButtonStack,
	StyledBox,
	StyledBtn,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";
// Custom Icons
import { AppIcon } from "../../../../constants/icons";
// Components
import StaffList from "./StaffList/Index";
import StatusStack from "./StatusStack";
import StaffForm from "./StaffForm/Index";

const StaffMaintenance = () => {
	const [selectedStaff, setSelectedStaff] = useState(null);

	// Func to select staff
	const handleSelectStaff = (staff) => {
		setSelectedStaff(staff);
	};

	return (
		<StyledBox>
			{/* Page header */}
			<Stack
				direction={"row"}
				justifyContent="space-between"
				alignItems={"center"}
				mb={1}
			>
				<StyledPageTitle mb={2}>Staff Maintenance</StyledPageTitle>
				<StyledBtn variant="contained" startIcon={<AppIcon icon="Add" />}>
					Add Staff
				</StyledBtn>
			</Stack>
			{/* Page header */}

			<Grid container spacing={2}>
				{/* Staff List  */}
				<Grid item sm={12} md={4} lg={3}>
					<StaffList
						handleSelectStaff={handleSelectStaff}
						selectedStaff={selectedStaff}
					/>
				</Grid>
				{/* Staff List  */}

				<Grid item sm={12} md={8} lg={9}>
					<StyledStack direction={"column"} rowGap={2}>
						{/* Staff Status Cards */}
						<StatusStack />
						{/* Staff Status Cards */}
						{/* Staff Form  */}
						<StaffForm />
						{/* Staff Form  */}
					</StyledStack>
				</Grid>
			</Grid>
			{/* Form Action Buttons */}
			<Stack direction={"row"} alignItems="center" justifyContent={"flex-end"} my={3}>
				<ButtonStack
					direction={"row"}
					alignItems="center"
					justifyContent={"center"}
					btnwidth={120}
				>
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
			{/* Form Action Buttons */}
		</StyledBox>
	);
};

export default StaffMaintenance;

// Styles
const StyledStack = styled(Stack)(({ theme }) => ({
	"& .MuiBox-root": {
		border: `1px solid ${theme.palette.border}`,
	},
}));
