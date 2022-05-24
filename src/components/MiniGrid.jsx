import { styled } from "@mui/system";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledInput, StyledTableContainer } from "../theme/GlobalStyles";
import { IconButton, MenuItem } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AddIcon, DeleteIcon } from "../constants/icons";
import palette from "../theme/palette";

const MiniGrid = () => {
	const initialValue = [{ id: 1, phase: 1, task: 2, desc: "Inception Meeting", when: new Date() }];

	const [rows, setRows] = useState([...initialValue, ...initialValue]);

	const handleDeleteRow = (id) => {
		setRows((r) => r.filter((item) => item.id !== id));
	};
	const handleAddRow = (id) => {
		setRows((r) => [...r, { id: Math.floor(Math.random() * 30), phase: "", task: "", desc: "", when: null }]);
	};

	const handleChange = (e, id) => {
		console.log(e.target.value, e.target.name);
		setRows((r) => r.map((item) => (item.id === id ? { ...item, [e.target.name]: e.target.value } : item)));
	};

	// handling change event in table `date` input fields
	const handleDateChange = (val, id) => {
		console.log(val, id);
		setRows((r) =>
			r.map((item) => {
				if (item.id === id) {
					return { ...item, when: val };
				} else {
					return item;
				}
			})
		);
	};

	return (
		<Root>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Phase</TableCell>
						<TableCell align="left">Task</TableCell>
						<TableCell align="left" sx={{ minWidth: 150 }}>
							Description
						</TableCell>
						<TableCell align="left" sx={{ minWidth: 120 }}>
							When
						</TableCell>

						<TableCell align="center" sx={{ minWidth: 75 }}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((item, index) => {
						return (
							<TableRow>
								<TableCell component="th" scope="row">
									<StyledInput name="phase" value={item.phase} select onChange={(e) => handleChange(e, item.id)}>
										<MenuItem value={""}></MenuItem>
										<MenuItem value={"1"}>1</MenuItem>
										<MenuItem value={"2"}>2</MenuItem>
										<MenuItem value={"3"}>3</MenuItem>
									</StyledInput>
								</TableCell>
								<TableCell component="th" scope="row">
									<StyledInput name="task" value={item.task} select onChange={(e) => handleChange(e, item.id)}>
										<MenuItem value={""}></MenuItem>
										<MenuItem value={"1"}>1</MenuItem>
										<MenuItem value={"2"}>2</MenuItem>
										<MenuItem value={"3"}>3</MenuItem>
									</StyledInput>
								</TableCell>

								<TableCell component="th" scope="row">
									<StyledInput name="desc" value={item.desc} onChange={(e) => handleChange(e, item.id)} />
								</TableCell>
								<TableCell component="th" scope="row">
									<LocalizationProvider dateAdapter={AdapterMoment}>
										<DatePicker
											value={item.when}
											onChange={(newValue) => {
												console.log(newValue._d);
												handleDateChange(newValue._d, item.id);
											}}
											renderInput={(params) => <StyledInput {...params} />}
										/>
									</LocalizationProvider>
								</TableCell>
								{index > 0 && (
									<TableCell component="th" scope="row" align="center">
										<IconButton onClick={() => handleDeleteRow(item.id)}>
											<DeleteIcon bg={palette.primary.main} />
										</IconButton>
										<IconButton onClick={() => handleAddRow(item.id)}>
											<AddIcon bg={palette.primary.main} />
										</IconButton>
									</TableCell>
								)}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Root>
	);
};

export default MiniGrid;

const Root = styled(StyledTableContainer)(({ theme }) => ({
	width: "100%",
	backgroundColor: "#045a701a",
	height: "100%",
	overflow: "auto",
}));
