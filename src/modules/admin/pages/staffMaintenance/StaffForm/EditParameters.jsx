import React from "react";
// Mui
import {
	Divider,
	IconButton,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";
// Custom Styles
import {
	StyledBox,
	StyledPageTitle,
	StyledSelect,
} from "../../../../../theme/GlobalStyles";
// Custom Icons
import { AppIcon } from "../../../../../constants/icons";
import styled from "@emotion/styled";

const EditParameters = () => {
	return (
		<StyledBox style={{ height: "100%" }}>
			<Stack
				direction={"column"}
				justifyContent="flex-start"
				spacing={2}
				sx={{ position: "sticky", top: 10 }}
			>
				<StyledPageTitle>Edit Parameters</StyledPageTitle>
				<div className="">
					<Typography variant="body1">Roles</Typography>
					<Divider />
				</div>

				{/* ---------- Selected Staff Parameters loop ---------- */}

				{selectedStaff &&
					selectedStaff.map((item, i) => {
						return (
							<EditStackItem
								key={i}
								direction={"row"}
								alignItems="center"
								justifyContent={"space-between"}
								spacing={1}
							>
								<StyledSelect name="param 1" select value={item.param1}>
									<MenuItem value={823}>823</MenuItem>
									<MenuItem value={1023}>1023</MenuItem>
								</StyledSelect>
								<StyledSelect name="param 2" select value={item.param2}>
									<MenuItem value={823}>823</MenuItem>
									<MenuItem value={2342}>2342</MenuItem>
								</StyledSelect>
								<StyledSelect name="Desc" select value={item.desc}>
									<MenuItem value={"Desc 1"}>Desc 1</MenuItem>
									<MenuItem value={"Desc 2"}>Desc 2</MenuItem>
									<MenuItem value={"Nama Jalu"}>Nama Jalu</MenuItem>
									<MenuItem value={"Jalu Nama"}>Jalu Nama</MenuItem>
								</StyledSelect>

								<IconButton>
									<AppIcon icon="Delete" color={"primary"} fontSize="small" />
								</IconButton>
								<IconButton>
									<AppIcon icon="Add" color="primary" fontSize="small" />
								</IconButton>
							</EditStackItem>
						);
					})}

				{/* ---------- Selected Staff Parameters loop ---------- */}
			</Stack>
		</StyledBox>
	);
};

export default EditParameters;

// Mock Data
const selectedStaff = [
	{
		param1: "823",
		param2: "2342",
		desc: "Desc 1",
	},
	{
		param1: "1023",
		param2: "2342",
		desc: "Desc 2",
	},
];

// Styles
const EditStackItem = styled(Stack)(({ theme }) => ({
	"& .MuiOutlinedInput-root": {
		"& .MuiSelect-select": {
			"&::after": {
				width: 22,
			},
		},
		"& .MuiSvgIcon-root": {
			right: -1,
		},
	},
}));
