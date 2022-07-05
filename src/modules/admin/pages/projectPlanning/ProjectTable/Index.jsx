import React from "react";
// Mui
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
// Custom Styles
import {
	StyledBtn,
	StyledTableContainer,
} from "../../../../../theme/GlobalStyles";
import palette from "../../../../../theme/palette";
// Custom Icons
import { AppIcon } from "../../../../../constants/icons";
// Redux
import { useDispatch } from "react-redux";
import { addToProjectList } from "../../../../../app/slices/projectPlanningSlice";
// Components
import StickyTable from "./StickyTable";
import ScrollTable from "./ScrollTable";

/* 
	This component contains both scrollable and sticky table components 
	For every update in one component, needed to be manually update in another component
	Ensure UI is similar for both component 
*/

const ProjectPlanning = () => {
	const dispatch = useDispatch();

	// Func to add new row
	const handleAddRow = () => {
		dispatch(addToProjectList());
	};

	return (
		<Stack
			alignItems={"flex-start"}
			justifyContent="flex-start"
			style={{ position: "relative" }}
		>
			<CustomStyledContainer
				component={Paper}
				sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}
			>
				{/* Sticky Table component  */}
				<StickyTable />
				{/* Scroll Table component  */}
				<ScrollTable />
			</CustomStyledContainer>
			{/* Button at bottom of table to add new rows */}
			<StyledBtn
				variant="contained"
				onClick={handleAddRow}
				radius="top"
				sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
			>
				<AppIcon icon="Add" fontSize="small" />
			</StyledBtn>
			{/* Button at bottom of table to add new rows */}

			{/* Button at Top-Right of table to add open `Add Columns` modal */}
			<StickyAddBtn>
				<StyledBtn
					style={{
						maxWidth: 50,
						minWidth: 50,
						paddingBlock: 5,
						paddingInline: 7,
						backgroundColor: palette.primary.main,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 3,
					}}
				>
					<AppIcon icon="Add" fontSize="small" sx={{ color: "#fff", fontSize: 18 }} />
				</StyledBtn>
			</StickyAddBtn>
			{/* Button at Top-Right of table to add open `Add Columns` modal */}
		</Stack>
	);
};

export default ProjectPlanning;

// Styles
const CustomStyledContainer = styled(StyledTableContainer)(({ theme }) => ({
	overflow: "auto",
	borderRadius: 0,
	transition: "all 1s ease",
	position: "relative",
	"& .MuiTableBody-root ": {
		border: "none",
		"& .MuiTableRow-root": {
			border: "none",
			cursor: "pointer",
		},
	},
	"& .MuiTableCell-root": {
		"& input": {
			whiteSpace: "nowrap",
			wordBreak: "keep-all",
			height: 15,
		},
		"& .PrivateSwitchBase-input": {
			height: "100%",
		},
	},
}));

const StickyAddBtn = styled("div")(({ theme }) => ({
	position: "absolute",
	top: 0,
	right: 0,
	background: palette.secondary.main,
	padding: 7,
}));
