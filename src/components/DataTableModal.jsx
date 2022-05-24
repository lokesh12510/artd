import React, { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CloseBtn, StyledBtn, StyledDialog, StyledInput } from "../theme/GlobalStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, IconButton, MenuItem, Stack, TableContainer } from "@mui/material";
import { DeleteIcon } from "../constants/icons";
import palette from "../theme/palette";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import CustomDialog from "./CustomDialog";

export default function DataTableModal({ open, handleClose, col: colData }) {
	const [row, setRow] = useState([]);
	const [col, setCol] = useState(colData);

	useEffect(() => {
		const rowArr = [];

		col.list
			.filter((item) => item.includes("_"))
			.map((item, index) =>
				rowArr.push({
					id: index,
					consultant: item.replace("_", "").toUpperCase(),
					position: "Select",
					rateGST: index + 1 * Math.floor(Math.random() * 100),
					rateExGST: index + 1 + Math.floor(Math.random() * 100),
					rateType: "Select",
					rateDesc: `This is description ${index + 1}`,
				})
			);

		setRow(rowArr);
	}, [col.list]);

	const handleTextChange = (e, id) => {
		console.log(e.target.name, e.target.value, id);

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
				consultant: "Select",
				position: "Select",
				rateGST: r.length + 1 + 1 * Math.floor(Math.random() * 100),
				rateExGST: r.length + 1 + 1 + Math.floor(Math.random() * 100),
				rateType: "Select",
				rateDesc: `This is description ${r.length + 1}`,
			},
		]);
	};

	const modalActions = [
		{ title: "Save", variant: "contained", color: "primary", handleAction: handleClose },
		{ title: "Reset", variant: "outlined", color: "primary", handleAction: handleClose },
		{ title: "Cancel", variant: "outlined", color: "dark", handleAction: handleClose },
	];

	return (
		<div>
			<CustomDialog
				title="Add Consultant"
				visible={open}
				handleModalState={handleClose}
				actions={modalActions}
				maxWidth={"lg"}
			>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell sx={{ minWidth: 200 }}>Consultant</TableCell>
								<TableCell align="left" sx={{ minWidth: 200 }}>
									Position
								</TableCell>
								<TableCell align="left" sx={{ width: 100, minWidth: 100 }}>
									Rate GST
								</TableCell>
								<TableCell align="left" sx={{ width: 120, minWidth: 120 }}>
									Rate EX-GST
								</TableCell>
								<TableCell align="left" sx={{ minWidth: 130 }}>
									Rate Type
								</TableCell>
								<TableCell align="left" sx={{ minWidth: 250 }}>
									Rate Description
								</TableCell>
								<TableCell align="left" sx={{ minWidth: 50 }}></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{row?.map((row, index) => (
								<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										<StyledInput name="consultant" value={row.consultant} select onChange={(e) => handleTextChange(e, row.id)}>
											<MenuItem value={"Select"}>Select Consultant</MenuItem>
											<MenuItem value={"NATC"}>NATC</MenuItem>
											<MenuItem value={"DAVC"}>DAVC</MenuItem>
											<MenuItem value={"JENT"}>JENT</MenuItem>
											<MenuItem value={"Consultant 4"}>Consultant 4</MenuItem>
										</StyledInput>
									</TableCell>
									<TableCell align="left">
										{console.log(row.position)}
										<StyledInput name="position" value={row.position} select onChange={(e) => handleTextChange(e, row.id)}>
											<MenuItem value="Select" disabled>
												Select Position
											</MenuItem>
											<MenuItem value={"Director"}>Director</MenuItem>
											<MenuItem value={"Team Lead"}>Team Lead</MenuItem>
											<MenuItem value={"Developer"}>Developer</MenuItem>
										</StyledInput>
									</TableCell>
									<TableCell align="center">
										<StyledInput name={"rateGST"} value={row.rateGST} onChange={(e) => handleTextChange(e, row.id)} />
									</TableCell>
									<TableCell align="center">
										<StyledInput name={"rateExGST"} value={row.rateExGST} onChange={(e) => handleTextChange(e, row.id)} />
									</TableCell>
									<TableCell align="left">
										<StyledInput name="rateType" value={row.rateType} select onChange={(e) => handleTextChange(e, row.id)}>
											<MenuItem value="Select">Select Type</MenuItem>
											<MenuItem value={"GO"}>GO</MenuItem>
											<MenuItem value={"NGO"}>NGO</MenuItem>
										</StyledInput>
									</TableCell>
									<TableCell align="left">
										<StyledInput name="rateDesc" value={row.rateDesc} onChange={(e) => handleTextChange(e, row.id)} />
									</TableCell>
									<TableCell align="left" className="sticky-cell">
										<IconButton aria-label="delete" onClick={() => handleDeleteRow(row.id)}>
											<DeleteIcon bg={palette.primary.main} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
					<StyledBtn variant="contained" onClick={handleAddRow}>
						<AddCircleIcon />
					</StyledBtn>
				</Stack>
			</CustomDialog>
		</div>
	);
}
