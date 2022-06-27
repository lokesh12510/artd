import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton, Typography } from "@mui/material";
import palette from "../../../../../theme/palette";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import ScrollRows from "./ScrollRows";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
	isCompletedOpen,
	projectColumnList,
	projectColumnTotal,
	toggleCompletedList,
} from "../../../../../app/slices/projectPlanningSlice";
import { useCallback } from "react";
import ScrollCompletedRow from "./ScrollCompletedRow";

const ScrollTable = () => {
	const cols = useSelector(projectColumnList);
	const colTotal = useSelector(projectColumnTotal);

	const dispatch = useDispatch();
	const open = useSelector(isCompletedOpen);

	const handleCompleteOpen = useCallback(() => {
		dispatch(toggleCompletedList());
	}, [dispatch]);

	const HeaderCols = useCallback(() => {
		return (
			<TableRow>
				{cols
					.slice(2)
					.filter((item) => item.includes("_"))
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
			<TableHead>
				<HeaderCols />
			</TableHead>
			<TableBody>
				{/* Accordion Row */}
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
				{/* Accordion Row */}
				<ScrollCompletedRow />
				<ScrollRows />
			</TableBody>
		</StyledScrollTable>
	);
};

export default ScrollTable;

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
