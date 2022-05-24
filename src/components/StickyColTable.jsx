import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import { CopyIcon, DeleteIcon, EditIcon, EyeIcon } from "../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { StyledBtn, StyledInput } from "../theme/GlobalStyles";

import { Checkbox, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../theme/palette";
// import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";

const StickyColTable = ({ data }) => {
	// const [tableData, setTableData] = useState(data);
	const [selected, setSelected] = React.useState([]);

	// eslint-disable-next-line
	const [col, setCol] = useState(data.columns);
	const [row, setRow] = useState(data.rows);

	// Accordion Toggle state
	const [open, setOpen] = React.useState(false);

	// ----------------Checkbox select row function------------------
	const handleClick = (event, id) => {
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

		console.log(colObj);

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
		console.log(e, id);
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
		console.log(val, id);
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

	useEffect(() => {
		console.log(row);
	}, [row]);

	return (
		<GridContainer>
			<TableContainer component={Paper} sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
				{/* Sticky */}
				<Table aria-label="simple table" size={"small"} className="sticky-table">
					{/*----------- Sticky Header-------- */}
					<TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
						<TableRow>
							<TableCell align="center">Completed</TableCell>
							<TableCell align="center">Action</TableCell>
							{col.list
								.slice(2)
								.filter((item) => !item.includes("_"))
								.map((item, index) => {
									return (
										<StyledTableCell align="center" label={item} key={index}>
											{item}
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
										variant="body1"
										component="div"
										color={"primary"}
										fontWeight="bold"
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
									style={{ transition: "all 1ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", height: "auto", transitionDuration: "266ms" }}
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
												<IconButton color="primary" aria-label="upload picture" component="span">
													<CopyIcon bg={palette.primary.main} />
												</IconButton>
												<IconButton color="primary" aria-label="upload picture" component="span">
													<EditIcon bg={palette.primary.main} />
												</IconButton>
												<IconButton color="primary" aria-label="upload picture" component="span">
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
																	console.log(newValue._d);
																	handleDateChange(newValue._d, row.id);
																}}
																// value={value}
																// onChange={(newValue) => {
																// 	console.log(newValue._d);
																// 	handleDateChange(newValue._d, row.id);
																// }}
																components={{
																	OpenPickerIcon: ArrowDropDownIcon,
																}}
																renderInput={(params) => <StyledInput {...params} />}
															/>
														</LocalizationProvider>
													) : (
														<StyledInput
															name={col}
															value={row[col]}
															component={col === "expenses" && Link}
															to="/"
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
											{col.replace("_", "")}
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
									style={{ transition: "all 1ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", height: "auto", transitionDuration: "266ms" }}
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
				<Table sx={{ position: "sticky", right: 0, maxWidth: 70 }} aria-label="simple table" size={"small"}>
					<TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
						<TableRow>
							<TableCell align="right" style={{ minWidth: "50px" }}>
								<div
									style={{
										maxWidth: 50,
										paddingBlock: 6,
										paddingInline: 10,
										backgroundColor: palette.primary.main,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										borderRadius: 3,
									}}
								>
									<AddCircleIcon fontSize="small" />
								</div>
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
										<TableCell align="center">
											<div style={{ height: 36, width: 23 }}></div>
										</TableCell>
									</TableRow>
								);
							})}
						</React.Fragment>
					</TableBody>
				</Table>
			</TableContainer>

			<StyledBtn variant="contained" onClick={handleAddRow}>
				<AddCircleIcon />
			</StyledBtn>
		</GridContainer>
	);
};

export default StickyColTable;

const GridContainer = styled("div")(({ theme }) => ({
	position: "relative",
	width: "100%",
	overflow: "hidden",

	"& .MuiTableHead-root": {
		minHeight: 80,
	},
	[theme.breakpoints.up("md")]: {
		"& .sticky-table": {
			backgroundColor: "#fff",
			position: "sticky",
			left: 0,
			zIndex: 2,
		},
	},
	"& .sticky-table": {
		"& .MuiTableCell-head": {
			color: "#fff",
			textTransform: "uppercase",
			padding: theme.spacing(1),
			paddingBlock: theme.spacing(2),
		},
	},
	"& .scroll-table": {
		flex: 2,
		backgroundColor: "#fff",
		"& .MuiTableCell-body": {
			paddingBlock: theme.spacing(1),
		},
		"& .MuiTableCell-head": {
			color: "#fff",
			padding: theme.spacing(1),
			paddingBlock: theme.spacing(2),
		},
	},

	"& .MuiTableRow-root": {
		border: "none",
		cursor: "pointer",
	},
	"& .MuiTableCell-head": {
		color: "#fff",
		padding: theme.spacing(1.5),
		minWidth: 55,
	},
	"& .MuiTableRow-root.Mui-selected": {
		"&:hover": {
			backgroundColor: "rgba(16, 87, 118, 0.08)",
		},
	},
	"& .Mui-selected": {
		"& .MuiTextField-root": {
			pointerEvents: "none",
			"& input": {
				color: palette.grey[400],
				backgroundColor: "rgba(16, 87, 118, 0.08)",
			},
		},
		"& .MuiInputBase-input": {
			pointerEvents: "none",
		},
	},
	"& .MuiTableCell-root": {
		"& .dropdown": {
			padding: 0,
			"& .MuiSvgIcon-root": {
				width: 32,
				height: 32,
			},
		},
		"& .MuiInputAdornment-root": {
			marginLeft: 0,
		},
	},

	"& .MuiTableCell-body": {
		paddingBlock: theme.spacing(1),
		paddingInline: theme.spacing(0.6),
		"& .MuiInputBase-input": {
			padding: theme.spacing(1),
		},
		"& .MuiCheckbox-root": {
			padding: theme.spacing(0.6),
		},
		"& input": {
			textAlign: "center",
			whiteSpace: "nowrap",
			wordBreak: "keep-all",
		},
	},

	"& .accordion": {
		borderBottom: `1px solid ${palette.primary.main}`,
	},
	"& .date": {
		"& .MuiFormControl-root": {
			overflow: "hidden",
			backgroundColor: "rgb(255 255 255 / 8%)",
			"& .MuiButtonBase-root": {
				padding: 1,
				backgroundColor: "rgba(16, 87, 118, 0.08)",
				borderRadius: 0,
				position: "relative",
				right: -3,
			},
			"& .MuiSvgIcon-root": {
				fontSize: "2.3rem",
			},
			"& input": {
				backgroundColor: "transparent",
			},
		},
	},
	"& .expenses": {
		"& input": {
			backgroundColor: "#e3f9ff",
			textDecoration: "underline",
			cursor: "pointer",
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
