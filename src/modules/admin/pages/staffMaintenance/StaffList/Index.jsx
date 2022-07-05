import React from "react";
// Mui
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import FilterHeader from "./FilterHeader";
import StaffLists from "./StaffLists";

const StaffList = ({ selectedStaff, handleSelectStaff }) => {
	return (
		<StaffListContainer direction={"column"}>
			{/* List Filter Header */}
			<FilterHeader count={count} />
			{/* List Filter Header */}

			{/* Item list */}
			<StaffLists
				handleSelectStaff={handleSelectStaff}
				selectedStaff={selectedStaff}
				staffList={data}
			/>
			{/* Item list */}
		</StaffListContainer>
	);
};

export default StaffList;

// Mock data
const count = { all: 76, active: 32, left: 36 };

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

// Styles
const StaffListContainer = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: "100%",
	border: `1px solid ${theme.palette.secondary.main}`,
	borderRadius: 7,
	overflow: "hidden",
}));
