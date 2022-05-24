import { Stack, Typography, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import palette from "../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../../../theme/GlobalStyles";
import StickyColTable from "../../../components/StickyColTable";
import { data } from "../../../mockup/stickytableData";
import MiniGrid from "../../../components/MiniGrid";

const Dashboard = () => {
	return (
		<Stack spacing={2}>
			<StyledBox>
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
			</StyledBox>
			<TableContainer>
				<TableHeader direction={"row"} alignItems="center" justifyContent={"space-between"}>
					<StyledCheckBoxWrapper>
						<FormControlLabel control={<Checkbox />} label="Automatic numbering ?" />
					</StyledCheckBoxWrapper>

					<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"}>
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
						Task Input
					</Grid>
				</Grid>
			</TableContainer>
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

const ButtonStack = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(1),
	"& .MuiButton-outlined": {
		backgroundColor: palette.common.white,
		minWidth: 90,
	},
}));

const TableContainer = styled(StyledBox)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "stretch",
	gap: 0,
	padding: theme.spacing(2),
}));
