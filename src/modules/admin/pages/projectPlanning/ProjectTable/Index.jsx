import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {
	StyledBtn,
	StyledTableContainer,
} from "../../../../../theme/GlobalStyles";

import { styled } from "@mui/system";

import { useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import StickyTable from "./StickyTable";
import ScrollTable from "./ScrollTable";
import { addToProjectList } from "../../../../../app/slices/projectPlanningSlice";
import palette from "../../../../../theme/palette";

const ProjectPlanning = () => {
	const dispatch = useDispatch();

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
				<StickyTable />
				<ScrollTable />
			</CustomStyledContainer>
			<StyledBtn
				variant="contained"
				onClick={handleAddRow}
				radius="top"
				sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
			>
				<AddCircleIcon />
			</StyledBtn>
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
					<AddCircleIcon fontSize="small" sx={{ color: "#fff" }} />
				</StyledBtn>
			</StickyAddBtn>
		</Stack>
	);
};

export default ProjectPlanning;

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
