import React, { useEffect, useState } from "react";
import { StyledBtn, StyledInput, StyledTableContainer } from "../../../../theme/GlobalStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, MenuItem, Stack } from "@mui/material";
import { DeleteIcon } from "../../../../constants/icons";
import palette from "../../../../theme/palette";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomDialog from "../../../../components/CustomDialog";

export default function ExpenseListModal({ expenseList, handleExpenseListModal }) {
	const [row, setRow] = useState([
		{ id: 1, desc: "Inception Meeting 1", amount: "3,566" },
		{ id: 2, desc: "Inception Meeting 2", amount: "3,566" },
	]);

	const handleTextChange = (e, id) => {
		setRow((r) => r.map((item) => (item.id === id ? { ...item, [e.target.name]: e.target.value } : item)));
	};

	const handleDeleteRow = (id) => {
		setRow((r) => r.filter((item) => item.id !== id));
	};

	const handleAddRow = () => {
		setRow((r) => [
			...r,
			{
				id: r.length + 1,
				amount: "",
				desc: `This is description ${r.length + 1}`,
			},
		]);
	};

	const modalActions = [
		{ title: "Save", variant: "contained", color: "primary", handleAction: handleExpenseListModal },
		{ title: "Reset", variant: "outlined", color: "primary", handleAction: handleExpenseListModal },
		{ title: "Cancel", variant: "outlined", color: "dark", handleAction: handleExpenseListModal },
	];

	return (
		<div>
			<CustomDialog
				title="Expense List for: Phase 2 Task 2"
				visible={expenseList}
				handleModalState={handleExpenseListModal}
				actions={modalActions}
				maxWidth={"md"}
			>
				<StyledTableContainer>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Description</TableCell>
								<TableCell align="left" style={{ width: 150 }}>
									Amount
								</TableCell>

								<TableCell align="left" sx={{ minWidth: 50 }}></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{row?.map((row, index) => (
								<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell align="left">
										<StyledInput name={"rateExGST"} value={row.desc} onChange={(e) => handleTextChange(e, row.id)} />
									</TableCell>

									<TableCell align="left">
										<StyledInput name="rateDesc" value={row.amount} onChange={(e) => handleTextChange(e, row.id)} />
									</TableCell>
									<TableCell align="left" className="sticky-cell">
										<IconButton aria-label="delete" onClick={() => handleDeleteRow(row.id)}>
											<DeleteIcon bg={palette.primary.main} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
							<TableRow key={row.id}>
								<TableCell align="right" colSpan={3}>
									<StyledBtn variant="contained" onClick={handleAddRow}>
										<AddCircleIcon />
									</StyledBtn>
								</TableCell>
							</TableRow>
							<TableRow key={row.id} sx={{ backgroundColor: palette.grey[200] }}>
								<TableCell align="right">Total</TableCell>
								<TableCell align="center">$ 2,564</TableCell>
								<TableCell align="center"></TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</StyledTableContainer>
			</CustomDialog>
		</div>
	);
}
