import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { AddIcon } from "../../../../constants/icons";
import { ButtonStack, StyledBox, StyledBtn } from "../../../../theme/GlobalStyles";
import StaffForm from "./StaffForm";
import StaffList from "./StaffList";
import StatusStack from "./StatusStack";

const StaffMaintenance = () => {
	const [selectedStaff, setSelectedStaff] = useState(null);

	const handleSelectStaff = (staff) => {
		console.log(staff);
		setSelectedStaff(staff);
	};

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
					<StaffList handleSelectStaff={handleSelectStaff} selectedStaff={selectedStaff} data={data} />
				</Grid>
				<Grid item sm={12} md={8} lg={9}>
					<Stack direction={"column"} rowGap={2}>
						<StatusStack />
						<StaffForm selectedStaff={selectedStaff} />
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

const data = [
	{
		id: 1,
		name: "david crotty",
		code: "AL",
		email: "david.crotty@gmail.com",
		userType: "Marketing",
		date: new Date(),
		role: "Analyst",
		rate: "$940",
		status: "active",
		parameters: [
			{
				id: 1,
				param1: 1023,
				param2: 2342,
				desc: "Nama Jalu",
			},
			{
				id: 2,
				param1: 1023,
				param2: 2342,
				desc: "Jalu Nama",
			},
		],
	},
	{
		id: 2,
		name: "Brad Astbury",
		code: "NM2",
		email: "brad.astbury@gmail.com",
		userType: "Developer",
		date: new Date(),
		role: "FrontEnd",
		rate: "$840",
		status: "available",
		parameters: [
			{
				id: 1,
				param1: 823,
				param2: 2342,
				desc: "Desc 1",
			},
			{
				id: 2,
				param1: 823,
				param2: 2342,
				desc: "Desc 2",
			},
		],
	},
];
