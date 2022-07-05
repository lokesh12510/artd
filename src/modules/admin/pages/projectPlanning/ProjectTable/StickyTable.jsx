import React, { useCallback } from "react";
// Mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import styled from "@emotion/styled";
// Custom Styles
import palette from "../../../../../theme/palette";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
	isCompletedOpen,
	projectColumnList,
	toggleCompletedList,
} from "../../../../../app/slices/projectPlanningSlice";
// Components
import StickyRows from "./StickyRows";
import StickyCompletedRow from "./StickyCompletedRow";

const StickyTable = () => {
	const dispatch = useDispatch();

	const cols = useSelector(projectColumnList);
	const open = useSelector(isCompletedOpen);

	// Func to toggle `open` status of completed rows
	const handleCompleteOpen = useCallback(() => {
		dispatch(toggleCompletedList());
	}, [dispatch]);

	const HeaderCols = useCallback(() => {
		return (
			<TableRow>
				<TableCell align="center">
					<Typography variant="subtitle2">Completed</Typography>
				</TableCell>
				<TableCell align="center">
					{" "}
					<Typography variant="subtitle2">Action</Typography>
				</TableCell>
				{cols
					.slice(2) // To Remove `id` and `isCompleted` columns
					.filter((item) => !item.includes("_")) // Filter columns which includes '_'
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
		<Table aria-label="simple table" size={"small"} className="sticky-table">
			{/* Table header cells section */}
			<TableHead>
				<HeaderCols />
			</TableHead>
			{/* Table header cells section */}
			<TableBody>
				{/* This table row acts as button to toggle completed rows to show or not in sticky table component*/}
				<TableRow sx={{ backgroundColor: "#e3f9ff" }} onClick={handleCompleteOpen}>
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
						</Stack>
					</TableCell>
				</TableRow>
				{/* This table row acts as button to toggle completed rows to show or not in sticky table component*/}

				{/* Completed status rows in sticky table component */}
				<StickyCompletedRow />
				{/* Completed status rows in sticky table component */}

				{/* Pending status rows in sticky table component */}
				<StickyRows />
				{/* Pending status rows in sticky table component */}
			</TableBody>
		</Table>
	);
};

export default StickyTable;

// Styles
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
