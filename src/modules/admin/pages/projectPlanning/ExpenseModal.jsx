import styled from "@emotion/styled";
import {
	Button,
	Checkbox,
	Grid,
	Link,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccordionTable from "../../../../components/AccordionTable";
import CustomDialog from "../../../../components/CustomDialog";
import { StyledTableContainer } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const ExpenseModal = ({ expenseModal, handleExpenseModal }) => {
	const [selected, setSelected] = useState(1);

	const handleSelected = (item) => {
		setSelected(item);
	};

	const expenseModalActions = [
		{
			title: "Save",
			variant: "contained",
			color: "primary",
			handleAction: handleExpenseModal,
		},
		{
			title: "Reset",
			variant: "outlined",
			color: "primary",
			handleAction: handleExpenseModal,
		},
		{
			title: "Cancel",
			variant: "outlined",
			color: "dark",
			handleAction: handleExpenseModal,
		},
	];
	return (
		<CustomDialog
			title="Expenses"
			visible={expenseModal}
			handleModalState={handleExpenseModal}
			actions={expenseModalActions}
			maxWidth="lg"
			fullWidth={true}
		>
			<Grid container>
				<Grid item md={5}>
					<CustomTable>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center">
										<Button
											className={selected === 1 && "active"}
											variant="contained"
											color="primary"
											onClick={() => handleSelected(1)}
										>
											Summary
										</Button>
									</TableCell>
									<TableCell align="center">
										<Button
											className={selected === 2 && "active"}
											variant="contained"
											color="primary"
											onClick={() => handleSelected(2)}
										>
											Planning
										</Button>
									</TableCell>
									<TableCell align="center">
										<Button
											className={selected === 3 && "active"}
											variant="contained"
											color="primary"
											onClick={() => handleSelected(3)}
										>
											MyOb
										</Button>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody className="custom-body">
								{data.map((item, index) => {
									return (
										<TableRow key={index}>
											<TableCell align="center">
												<Link href="#">{item.summary}</Link>
											</TableCell>
											<TableCell align="center">
												<Link href="#">{item.planning}</Link>
											</TableCell>
											<TableCell align="center">
												<Link href="#">{item.myOb}</Link>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</CustomTable>
				</Grid>
				<StyledGridItem item md={7}>
					<AccordionTable title={"Planning - Summary"}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center"></TableCell>
									<TableCell align="center">Phase</TableCell>
									<TableCell align="center">Task</TableCell>
									<TableCell align="center">Expenses</TableCell>
									<TableCell align="center">Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((item, index) => {
									return (
										<TableRow key={item.id}>
											<TableCell align="center" padding="checkbox" style={{ padding: 0 }}>
												<Checkbox checked={true} readOnly disableRipple />
											</TableCell>
											<TableCell align="center">{item.phase}</TableCell>
											<TableCell align="center">{item.task}</TableCell>
											<TableCell align="left">{item.expenses}</TableCell>
											<TableCell align="left">{item.desc}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</AccordionTable>
					<AccordionTable title={"MYOB Detail - Summary"}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align="center">Phase</TableCell>
									<TableCell align="center">Task</TableCell>
									<TableCell align="center">Expenses</TableCell>
									<TableCell align="center">Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((item, index) => {
									return (
										<TableRow key={item.id}>
											<TableCell align="center">{item.phase}</TableCell>
											<TableCell align="center">{item.task}</TableCell>
											<TableCell align="left">{item.expenses}</TableCell>
											<TableCell align="left">{item.desc}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</AccordionTable>
				</StyledGridItem>
			</Grid>
		</CustomDialog>
	);
};

export default ExpenseModal;

const CustomTable = styled(StyledTableContainer)(({ theme }) => ({
	boxShadow: "none",
	border: `1px solid ${palette.border}`,
	borderTopRightRadius: 0,

	"& .MuiTableCell-head": {
		backgroundColor: palette.highlight,
		"& .active": {
			backgroundColor: `${palette.primary.main}80`,
		},
	},
	"& .MuiTableBody-root.custom-body": {
		padding: theme.spacing(2),
		"& .MuiTableCell-root": {
			padding: theme.spacing(1.25),
		},
	},
	"& .MuiButton-root ": {
		width: 120,
	},
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	backgroundColor: palette.grey[200],
	borderTopRightRadius: 10,
	padding: theme.spacing(1.5),
}));

const data = [
	{
		id: 1,
		summary: "Jan 2021",
		planning: "2,200",
		myOb: "18,05",
	},
	{
		id: 1,
		summary: "Feb 2021",
		planning: "1,200",
		myOb: "17,05",
	},
	{
		id: 1,
		summary: "Mar 2021",
		planning: "6,200",
		myOb: "12,05",
	},
	{
		id: 1,
		summary: "Apr 2021",
		planning: "4,200",
		myOb: "14",
	},
	{
		id: 1,
		summary: "May 2021",
		planning: "6,600",
		myOb: "16",
	},
	{
		id: 1,
		summary: "Jun 2021",
		planning: "3,300",
		myOb: "2",
	},
	{
		id: 1,
		summary: "Jly 2021",
		planning: "2,300",
		myOb: "18",
	},
	{
		id: 1,
		summary: "Aug 2021",
		planning: "2,200",
		myOb: "14",
	},
	{
		id: 1,
		summary: "Sep 2021",
		planning: "2,200",
		myOb: "15.55",
	},
];

const rows = [
	{
		id: 1,
		phase: 2,
		task: 2,
		expenses: "2,345",
		desc: "Inception Meeting 1",
	},
	{
		id: 2,
		phase: 3,
		task: 2,
		expenses: "2,345",
		desc: "Inception Meeting 2",
	},
	{
		id: 3,
		phase: 4,
		task: 2,
		expenses: "2,345",
		desc: "Inception meeting 3",
	},
	{
		id: 4,
		phase: 2,
		task: 3,
		expenses: "2,345",
		desc: "Inception Meeting 4",
	},
];
