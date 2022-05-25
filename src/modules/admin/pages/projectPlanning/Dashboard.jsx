import { Stack, Typography, Checkbox, FormControlLabel, Grid, TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import palette from "../../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
	StyledBtn,
	StyledBox,
	StyledInput,
	StyledCheckBoxWrapper,
	HeaderContainer,
} from "../../../../theme/GlobalStyles";
import StickyColTable from "./StickyColTable";
import { data } from "../../../../mockup/stickytableData";
import MiniGrid from "./MiniGrid";
import TaskInput from "./TaskInput";

const Dashboard = () => {
	return (
		<Stack spacing={2}>
			<HeaderContainer>
				<StyledBtn variant="outlined" color="primary" startIcon={<ArrowBackIosIcon />}>
					Back
				</StyledBtn>

				<ProjectInfo direction={"row"} alignItems="center" justifyContent={"flex-start"}>
					<Typography variant={"body1"} color="dark">
						Project
					</Typography>
					<StyledInput value="23443" variant="outlined" />
				</ProjectInfo>
				<StyledInput value="The Big Project" variant="outlined" />
			</HeaderContainer>
			<StyledBox>
				<ScrollTableContainer>
					<TableHeader direction={"row"} alignItems="center" justifyContent={"space-between"}>
						<StyledCheckBoxWrapper>
							<FormControlLabel control={<Checkbox />} label="Automatic numbering ?" />
						</StyledCheckBoxWrapper>

						<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"} btnWidth={100}>
							<StyledBtn variant="outlined" color={"primary"} size="small">
								Description
							</StyledBtn>
							<StyledBtn variant="outlined" color={"primary"} size="small">
								outputs
							</StyledBtn>
							<StyledBtn variant="outlined" color={"primary"} size="small">
								Bump
							</StyledBtn>
						</ButtonStack>
					</TableHeader>
					<StickyColTable data={data} />
				</ScrollTableContainer>
				<Stack direction={"row"} alignItems="center" justifyContent={"space-between"} my={2}>
					<Typography variant="h6" color="primary" fontWeight={"600"}>
						Deliverables
					</Typography>
					<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"}>
						<StyledBtn variant="contained" color={"primary"} size="small">
							Project Time Summary
						</StyledBtn>
						<StyledBtn variant="contained" color={"primary"} size="small">
							Project Expenses
						</StyledBtn>
					</ButtonStack>
				</Stack>
				<Grid container spacing={2}>
					<Grid item xs={12} md={5} lg={5}>
						<MiniGrid />
					</Grid>
					<Grid item xs={12} md={7} lg={7}>
						<TaskInput />
					</Grid>
				</Grid>
				<Stack direction={"row"} alignItems="center" justifyContent={"flex-end"} my={3}>
					<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"} btnWidth={120}>
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
		</Stack>
	);
};

export default Dashboard;

const ProjectInfo = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(1.5),
}));

const TableHeader = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.secondary.light,
	padding: theme.spacing(1.5),
}));

const ButtonStack = styled(Stack)(({ theme, btnWidth }) => ({
	gap: theme.spacing(1),
	"& .MuiButton-root": {
		minWidth: btnWidth ? btnWidth : "auto",
	},
	"& .MuiButton-outlined": {
		backgroundColor: palette.common.white,
	},
}));

const ScrollTableContainer = styled(TableContainer)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "stretch",
	gap: 0,
}));
