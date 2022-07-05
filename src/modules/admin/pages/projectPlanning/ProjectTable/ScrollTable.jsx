import React, { useCallback } from "react";
// Mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom Styles
import palette from "../../../../../theme/palette";
// Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
	isCompletedOpen,
	projectColumnList,
	projectColumnTotal,
	toggleCompletedList,
} from "../../../../../app/slices/projectPlanningSlice";
// Components
import ScrollRows from "./ScrollRows";
import ScrollCompletedRow from "./ScrollCompletedRow";

const ScrollTable = () => {
	const cols = useSelector(projectColumnList); // Select Columns from redux
	const colTotal = useSelector(projectColumnTotal); // Select Column count from redux

	const dispatch = useDispatch();
	const open = useSelector(isCompletedOpen); // Select Open Status of completed rows from redux

	// Func to toggle (dispatch) open status of completed rows
	const handleCompleteOpen = useCallback(() => {
		dispatch(toggleCompletedList());
	}, [dispatch]);

	const HeaderCols = useCallback(() => {
		return (
			<TableRow>
				{cols
					.slice(2) // To remove id and isCompleted columns
					.filter((item) => item.includes("_")) // To filter only the column values that includes '_' which indicates it need to be scrolled or not
					.map((item, index) => {
						return (
							<StyledTableCell align="center" label={item} key={index}>
								<Typography variant="subtitle2">{item.replace("_", "")}</Typography>
							</StyledTableCell>
						);
					})}
			</TableRow>
		);
	}, [cols]);

	return (
		<StyledScrollTable
			aria-label="simple table"
			size={"small"}
			className="scroll-table"
		>
			{/* Scroll Table Header Cells */}
			<TableHead>
				<HeaderCols />
			</TableHead>
			{/* Scroll Table Header Cells */}

			<TableBody>
				{/* This row acts as button to toggle the completed row to show or not in scroll table component */}
				<TableRow
					sx={{
						backgroundColor: "#e3f9ff",
						cursor: "pointer",
						color: palette.common.white,
					}}
					onClick={handleCompleteOpen}
				>
					<TableCell className="accordion" colSpan={colTotal}>
						<IconButton
							aria-label="expand row"
							size="small"
							className="dropdown"
							sx={{ visibility: "hidden" }}
						>
							{open ? (
								<ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} />
							) : (
								<ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />
							)}
						</IconButton>
					</TableCell>
				</TableRow>
				{/* This row acts as button to toggle the completed row to show or not in scroll table component */}

				{/* Completed Rows in Scroll Component */}
				<ScrollCompletedRow />
				{/* Completed Rows in Scroll Component */}

				{/* Pending rows in Scroll Component */}
				<ScrollRows />
				{/* Pending rows in Scroll Component */}
			</TableBody>
		</StyledScrollTable>
	);
};

export default ScrollTable;

// Styles
const StyledScrollTable = styled(Table)(({ theme }) => ({
	position: "relative",
	"& .MuiTableHead-root": {
		"& .MuiTableCell-root": {
			"&:last-of-type": {
				paddingRight: 80,
			},
		},
	},
	"& .MuiTableBody-root": {
		"& .MuiTableCell-root": {
			"&:last-of-type": {
				paddingRight: 60,
			},
		},
	},
}));

const StyledTableCell = styled(TableCell)(({ theme, label }) => ({
	[theme.breakpoints.down("md")]: {
		minWidth:
			label === "description" ? "200px" : label === "date" ? "150px" : "70px",
	},
	[theme.breakpoints.up("md")]: {
		width:
			label === "description" ? "calc(40%)" : label === "date" ? "140px" : "calc(7%)",
		minWidth: label === "date" && 150,
	},
}));
