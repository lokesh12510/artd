import React, { useEffect, useState } from "react";
// Mui
import {
	Stack,
	Typography,
	Checkbox,
	FormControlLabel,
	Grid,
	TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// Custom Styles
import palette from "../../../../theme/palette";
import {
	StyledBtn,
	StyledBox,
	StyledInput,
	StyledCheckBoxWrapper,
	StyledHeaderBox,
	ButtonStack,
} from "../../../../theme/GlobalStyles";
// Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Components
import MiniGrid from "./MiniGrid";
import TaskInput from "./TaskInput";
import SummaryModal from "./SummaryModal";
import DescriptionModal from "./DescriptionModal";
import ExpenseModal from "./ExpenseModal";
import OutputModal from "./OutputModal";
import ProjectPlanning from "./ProjectTable/Index";
// Router
import { Link } from "react-router-dom";
import { urls } from "../../urls";
// Redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../../../app/slices/pageSlice";

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

	// Set page title
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTitle({ title: "Project Planning" }));
	}, [dispatch]);

	return (
		<>
			<Stack spacing={2}>
				{/* Page Header Section */}
				<StyledHeaderBox>
					<StyledBtn
						variant="outlined"
						color="primary"
						component={Link}
						to={urls.addProject}
						startIcon={<ArrowBackIosIcon />}
					>
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
				</StyledHeaderBox>
				{/* Page Header Section */}

				<StyledBox>
					{/*------------- Scrollable Table Grid Section ------------  */}
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
						{/* Project Planning Table comp */}
						<ProjectPlanning />
						{/* Project Planning Table comp */}
					</ScrollTableContainer>
					{/*------------- Scrollable Table Grid Section ------------ */}

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
						{/* Deliverables Minimized Table Grid Section */}
						<Grid item xs={12} md={5} lg={5}>
							<MiniGrid />
						</Grid>
						{/* Deliverables Minimized Table Grid Section */}

						{/* Task input Horizontal Scrollable Section  */}
						<Grid item xs={12} md={7} lg={7}>
							<TaskInput />
						</Grid>
						{/* Task input Horizontal Scrollable Section  */}
					</Grid>

					{/* Project Planning Action Button Section */}
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
					{/* Project Planning Action Button Section */}
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

// Styles
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
