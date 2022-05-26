import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import { CopyIcon, DeleteIcon, EditIcon, EyeIcon } from "../../../../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { StyledBtn, StyledInput, StyledTableContainer } from "../../../../theme/GlobalStyles";

import { Checkbox, Collapse, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../../theme/palette";
// import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DataTableModal from "./DataTableModal";
import CustomDialog from "../../../../components/CustomDialog";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import ExpenseListModal from "./ExpenseListModal";

const StickyColTable = ({ data }) => {
	// const [tableData, setTableData] = useState(data);
	const [selected, setSelected] = React.useState([]);

	// eslint-disable-next-line
	const [col, setCol] = useState(data.columns);
	const [row, setRow] = useState(data.rows);

	// Accordion Toggle state
	const [open, setOpen] = React.useState(false);

	// Column Modal Toggle State
	const [visible, setVisible] = useState(false);
	const handleModalState = () => {
		setVisible((v) => !v);
	};

	// Edit Modal Toggle State
	const [editModal, setEditModal] = useState(false);
	const handleEditModal = () => {
		setEditModal((v) => !v);
	};

	// Delete Modal Toggle State
	const [deleteModal, setDeleteModal] = useState(false);
	const handleDeleteModal = () => {
		setDeleteModal((v) => !v);
	};

	// Expense List Modal Toggle State
	const [expenseList, setExpenseList] = useState(false);
	const handleExpenseListModal = () => {
		setExpenseList((v) => !v);
	};

	// ----------------Checkbox select row function------------------
	const handleClick = (event, id) => {
		console.log(id);
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	// find row isSelected or not
	const isSelected = (id) => selected.indexOf(id) !== -1;

	// func to add new row to table
	const handleAddRow = () => {
		let colObj = {};

		col.list.forEach((item) => (colObj[item] = ""));

		// generate row data to append
		setRow({
			count: row.count + 1,
			list: [
				...row.list,
				{
					...colObj,
					date: null,
					id: Math.floor(Math.random() * 100),
					isCompleted: false,
				},
			],
		});
	};

	// handling change event in table `text` input fields
	const handleChange = (e, id) => {
		setRow((r) => ({
			count: r.count,
			list: r.list.map((item) => {
				if (item.id === id) {
					return { ...item, [e.target.name]: e.target.value };
				} else {
					return item;
				}
			}),
		}));
	};

	// handling change event in table `date` input fields
	const handleDateChange = (val, id) => {
		setRow((r) => ({
			count: r.count,
			list: r.list.map((item) => {
				if (item.id === id) {
					return { ...item, date: val };
				} else {
					return item;
				}
			}),
		}));
	};

	// handling duplicate row
	const handleDuplicateRow = (index) => {
		function dup(rowData) {
			const duplicateRow = rowData[index];
			const firstPart = rowData.slice(0, index + 1);
			const secondPart = rowData.slice(index + 1, rowData.length);

			return [...firstPart, { ...duplicateRow, id: Math.floor(Math.random() * 100) }, ...secondPart];
		}

		setRow((r) => ({ count: r.count + 1, list: dup(r.list) }));
	};

	useEffect(() => {}, [row]);

	return (
		<>
			<CustomStyledContainer component={Paper} sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
				{/* Sticky */}
				<Table aria-label="simple table" size={"small"} className="sticky-table">
					{/*----------- Sticky Header-------- */}
					<TableHead>
						<TableRow>
							<TableCell align="center">
								<Typography variant="subtitle2">Completed</Typography>
							</TableCell>
							<TableCell align="center">
								{" "}
								<Typography variant="subtitle2">Action</Typography>
							</TableCell>
							{col.list
								.slice(2)
								.filter((item) => !item.includes("_"))
								.map((item, index) => {
									return (
										<StyledTableCell align="center" label={item} key={index}>
											<Typography variant="subtitle2">{item}</Typography>
										</StyledTableCell>
									);
								})}
						</TableRow>
					</TableHead>
					{/*----------- Sticky Header-------- */}
					<TableBody>
						{/* Accordion Row */}
						<TableRow sx={{ backgroundColor: "#e3f9ff" }} onClick={() => setOpen(!open)}>
							<TableCell colSpan={10} className="accordion">
								<Stack direction="row" alignItems="center">
									<Typography
										variant="subtitle2"
										component="div"
										color={"primary"}
										fontWeight="bold"
										textTransform={"uppercase"}
										sx={{ maxWidth: "300px", paddingLeft: "10px", position: "sticky", left: 10 }}
									>
										Completed Task
									</Typography>
									<IconButton aria-label="expand row" size="small" className="dropdown" sx={{ visibility: "hidden" }}>
										{open ? (
											<ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} />
										) : (
											<ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />
										)}
									</IconButton>
								</Stack>
							</TableCell>
						</TableRow>
						{/* Accordion Row */}

						{/* ----------------- Sticky Table row -------------- */}
						{row.list.map((row, index) => {
							const isItemSelected = isSelected(row.id);

							const labelId = `enhanced-table-checkbox-${index}`;

							return (
								<TableRow
									key={row.id}
									sx={row.isCompleted && !open && visuallyHidden}
									// onClick={(event) => handleClick(event, row.id)}
									selected={row.isCompleted ? true : isItemSelected}
									className={row.isCompleted && open ? "shown" : "hidden"}
								>
									<TableCell component="th" scope="row" align="center">
										<Checkbox
											color="primary"
											checked={row.isCompleted ? true : isItemSelected}
											inputProps={{
												"aria-labelledby": labelId,
											}}
											onChange={(event) => handleClick(event, row.id)}
										/>
									</TableCell>
									<TableCell align="center" style={{ width: 100 }}>
										{isItemSelected || row.isCompleted ? (
											<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
												<IconButton color="primary" aria-label="upload picture" component="span">
													<EyeIcon bg={palette.primary.main} />
												</IconButton>
												<IconButton color="primary" aria-label="upload picture" component="span">
													<DeleteIcon bg={palette.grey[400]} />
												</IconButton>
											</Stack>
										) : (
											<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
												<IconButton color="primary" aria-label="copy" component="span" onClick={() => handleDuplicateRow(index)}>
													<CopyIcon bg={palette.primary.main} />
												</IconButton>
												<IconButton color="primary" aria-label="edit" component="span" onClick={() => handleEditModal()}>
													<EditIcon bg={palette.primary.main} />
												</IconButton>
												<IconButton color="primary" aria-label="delete" component="span" onClick={() => handleDeleteModal()}>
													<DeleteIcon bg={palette.primary.main} />
												</IconButton>
											</Stack>
										)}
									</TableCell>
									{col.list
										.slice(2)
										.filter((item) => !item.includes("_"))
										.map((col, index) => {
											return (
												<StyledTableCell align="center" key={index} className={col} label={col}>
													{col === "date" ? (
														<LocalizationProvider dateAdapter={AdapterMoment}>
															<DatePicker
																views={["year", "month"]}
																value={row[col]}
																onChange={(newValue) => {
																	handleDateChange(newValue._d, row.id);
																}}
																// value={value}
																// onChange={(newValue) => {
																// 	handleDateChange(newValue._d, row.id);
																// }}
																components={{
																	OpenPickerIcon: ArrowDropDownIcon,
																}}
																renderInput={(params) => <StyledInput variant="outlined" {...params} />}
															/>
														</LocalizationProvider>
													) : (
														<StyledInput
															name={col}
															value={row[col]}
															component={col === "expenses" && Link}
															onClick={col === "expenses" ? handleExpenseListModal : undefined}
															onChange={(e) => handleChange(e, row.id)}
														/>
													)}
												</StyledTableCell>
											);
										})}
								</TableRow>
							);
						})}

						{/* ----------------- Sticky Table row -------------- */}
					</TableBody>
				</Table>
				{/* Sticky */}

				{/* Scroll Table */}
				<Table aria-label="simple table" className="scroll-table" size={"small"}>
					{/*----------- Scroll Header-------- */}
					<TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
						<TableRow>
							{col.list
								.filter((item) => item.includes("_"))
								.map((col, index) => {
									return (
										<TableCell align="center" style={{ minWidth: "80px", textTransform: "uppercase" }} key={index}>
											<Typography variant="subtitle2">{col.replace("_", "")}</Typography>
										</TableCell>
									);
								})}
						</TableRow>
					</TableHead>
					{/*----------- Scroll Header-------- */}
					<TableBody>
						{/* Accordion Row */}
						<TableRow
							sx={{ backgroundColor: "#e3f9ff", cursor: "pointer", color: palette.common.white }}
							onClick={() => setOpen(!open)}
						>
							<TableCell colSpan={10} className="accordion">
								<IconButton aria-label="expand row" size="small" className="dropdown" sx={{ visibility: "hidden" }}>
									{open ? (
										<ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} />
									) : (
										<ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />
									)}
								</IconButton>
							</TableCell>
						</TableRow>
						{/* Accordion Row */}

						{/* ----------------- Scroll Table row -------------- */}
						{row.list.map((row, index) => {
							const isItemSelected = isSelected(row.id);

							// const labelId = `enhanced-table-checkbox-${index}`;

							return (
								<TableRow
									key={row.id}
									sx={row.isCompleted && !open && visuallyHidden}
									// onClick={(event) => handleClick(event, row.name)}
									selected={row.isCompleted ? true : isItemSelected}
									className={row.isCompleted && open ? "shown" : "hidden"}
								>
									{col.list
										.filter((item) => item.includes("_"))
										.map((col, index) => {
											return (
												<TableCell align="center" key={index}>
													<StyledInput value={row[col]} />
												</TableCell>
											);
										})}
								</TableRow>
							);
						})}

						{/* ----------------- Scroll Table row -------------- */}
					</TableBody>
				</Table>
				{/* Scroll Table */}

				{/* Add btn sticky Right */}
				<Table
					sx={{ position: "sticky", right: 0, maxWidth: 70 }}
					className="sticky-right-table"
					aria-label="simple table"
					size={"small"}
				>
					<TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
						<TableRow>
							<TableCell align="right" style={{ minWidth: "50px", padding: 7 }}>
								<StyledBtn
									style={{
										maxWidth: 50,
										minWidth: 50,
										paddingBlock: 6,
										paddingInline: 7,
										backgroundColor: palette.primary.main,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										borderRadius: 3,
									}}
									onClick={handleModalState}
								>
									<AddCircleIcon fontSize="small" sx={{ color: "#fff" }} />
								</StyledBtn>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<React.Fragment>
							<TableRow
								sx={{
									backgroundColor: "#e3f9ff",
									cursor: "pointer",
									color: palette.common.white,
									border: `1px solid ${palette.primary.main}`,
								}}
								onClick={() => setOpen(!open)}
							>
								<TableCell align="right" colSpan={3} className="accordion">
									<IconButton aria-label="expand row" size="small" className="dropdown">
										{open ? (
											<ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} />
										) : (
											<ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />
										)}
									</IconButton>
								</TableCell>
							</TableRow>
							{row.list.map((row, index) => {
								// const isItemSelected = isSelected(row.id);
								return (
									<TableRow
										key={index}
										sx={row.isCompleted && !open && visuallyHidden}
										// style={{ backgroundColor: row.isCompleted ? true : isItemSelected ? "transparent" : palette.common.white }}
									>
										<TableCell align="center" className="hiddenCell">
											<div style={{ height: 36, width: 23 }}></div>
										</TableCell>
									</TableRow>
								);
							})}
						</React.Fragment>
					</TableBody>
				</Table>
			</CustomStyledContainer>
			<StyledBtn variant="contained" onClick={handleAddRow}>
				<AddCircleIcon />
			</StyledBtn>

			{/* ----------------------  MODALS COMPONENTS  ------------------------- */}

			{/* Col Addition Modal */}
			<DataTableModal open={visible} handleClose={handleModalState} row={row} col={col} />
			{/* Col Addition Modal */}

			{/* Edit Row Modal */}
			<EditModal editModal={editModal} handleEditModal={handleEditModal} />
			{/* Edit Row Modal */}
			{/* Delete Row Modal */}
			<DeleteModal deleteModal={deleteModal} handleDeleteModal={handleDeleteModal} />
			{/* Delete Row Modal */}
			{/* ExpenseListModal */}
			<ExpenseListModal expenseList={expenseList} handleExpenseListModal={handleExpenseListModal} />
			{/* ExpenseListModal */}
		</>
	);
};

export default StickyColTable;

const CustomStyledContainer = styled(StyledTableContainer)(({ theme }) => ({
	overflow: "auto",
	borderRadius: 0,
	"& .MuiTableBody-root ": {
		border: "none",
	},
	"& .MuiTableCell-root": {
		"& input": {
			whiteSpace: "nowrap",
			wordBreak: "keep-all",
			height: 15,
		},
	},
}));

const StyledTableCell = styled(TableCell)(({ theme, label }) => ({
	[theme.breakpoints.down("md")]: {
		minWidth: label === "description" ? "200px" : label === "date" ? "150px" : "70px",
	},
	[theme.breakpoints.up("md")]: {
		width: label === "description" ? "calc(40%)" : label === "date" ? "140px" : "calc(7%)",
		minWidth: label === "date" && 150,
	},
}));
