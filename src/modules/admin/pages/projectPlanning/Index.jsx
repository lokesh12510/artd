import {
	Stack,
	Typography,
	Checkbox,
	FormControlLabel,
	Grid,
	TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import palette from "../../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
	StyledBtn,
	StyledBox,
	StyledInput,
	StyledCheckBoxWrapper,
	StyledPageHeader,
	ButtonStack,
} from "../../../../theme/GlobalStyles";
import StickyColTable from "./StickyColTable";
import { data } from "../../../../mockup/stickytableData";
import MiniGrid from "./MiniGrid";
import TaskInput from "./TaskInput";
import SummaryModal from "./SummaryModal";
import DescriptionModal from "./DescriptionModal";
import ExpenseModal from "./ExpenseModal";
import OutputModal from "./OutputModal";

const Dashboard = () => {
	// Summary modal Toggle State
	const [summaryModal, setSummaryModal] = useState(false);
	const handleSummaryModal = () => {
		setSummaryModal((s) => !s);
	};
	// Expense modal Toggle State
	const [expenseModal, setExpenseModal] = useState(false);
	const handleExpenseModal = () => {
		setExpenseModal((e) => !e);
	};
	// Description modal Toggle State
	const [descModal, setDescModal] = useState(false);
	const handleDescModal = () => {
		setDescModal((e) => !e);
	};
	// Proposal Output Modal
	const [outputModal, setOutputModal] = useState(false);
	const handleOutputModal = () => {
		setOutputModal((o) => !o);
	};

	return (
		<>
			<Stack spacing={2}>
				<StyledPageHeader>
					<StyledBtn variant="outlined" color="primary" startIcon={<ArrowBackIosIcon />}>
						Back
					</StyledBtn>

					<ProjectInfo
						direction={"row"}
						alignItems="center"
						justifyContent={"flex-start"}
					>
						<Typography variant={"body1"} color="dark">
							Project
						</Typography>
						<StyledInput value="23443" variant="outlined" />
					</ProjectInfo>
					<StyledInput value="The Big Project" variant="outlined" />
				</StyledPageHeader>
				<StyledBox>
					<ScrollTableContainer>
						<TableHeader
							direction={"row"}
							alignItems="center"
							justifyContent={"space-between"}
						>
							<StyledCheckBoxWrapper>
								<FormControlLabel control={<Checkbox />} label="Automatic numbering ?" />
							</StyledCheckBoxWrapper>

							<ButtonStack
								direction={"row"}
								alignItems="center"
								justifyContent={"center"}
								btnwidth={100}
							>
								<StyledBtn
									variant="outlined"
									color={"primary"}
									size="small"
									onClick={handleDescModal}
								>
									Description
								</StyledBtn>
								<StyledBtn
									variant="outlined"
									color={"primary"}
									size="small"
									onClick={handleOutputModal}
								>
									outputs
								</StyledBtn>
								<StyledBtn variant="outlined" color={"primary"} size="small">
									Bump
								</StyledBtn>
							</ButtonStack>
						</TableHeader>
						<StickyColTable data={data} />
					</ScrollTableContainer>
					<Stack
						direction={"row"}
						alignItems="center"
						justifyContent={"space-between"}
						my={2}
					>
						<Typography variant="h6" color="primary" fontWeight={"600"}>
							Deliverables
						</Typography>
						<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"}>
							<StyledBtn
								variant="contained"
								color={"primary"}
								size="small"
								onClick={handleSummaryModal}
							>
								Project Time Summary
							</StyledBtn>
							<StyledBtn
								variant="contained"
								color={"primary"}
								size="small"
								onClick={handleExpenseModal}
							>
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
				</StyledBox>
			</Stack>
			{/* -----------------------  MODAL COMPONENTS  ------------------------ */}
			<SummaryModal
				summaryModal={summaryModal}
				handleSummaryModal={handleSummaryModal}
			/>
			<DescriptionModal descModal={descModal} handleDescModal={handleDescModal} />
			<ExpenseModal
				expenseModal={expenseModal}
				handleExpenseModal={handleExpenseModal}
			/>
			<OutputModal outputModal={outputModal} handleOutputModal={handleOutputModal} />
		</>
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

const ScrollTableContainer = styled(TableContainer)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "stretch",
	gap: 0,
}));
