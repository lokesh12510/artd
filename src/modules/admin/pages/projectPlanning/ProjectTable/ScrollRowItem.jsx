import React, { memo } from "react";
// Mui
import { TableRow } from "@mui/material";
// Custom Styles
import {
	StyledInput,
	StyledTableCell,
} from "../../../../../theme/GlobalStyles";
// Redux
import { useDispatch } from "react-redux";
import { editProjectRow } from "../../../../../app/slices/projectPlanningSlice";

const ScrollRowItem = ({ cols, row, isItemSelected, rowIndex }) => {
	const dispatch = useDispatch();

	// Func to handle change event in table cell
	const handleValueChange = (e, id) => {
		dispatch(editProjectRow({ name: e.target.name, value: e.target.value, id }));
	};

	return (
		<TableRow key={row.id} selected={row.isCompleted ? true : isItemSelected}>
			{cols
				.filter((item) => item.includes("_"))
				.map((col, index) => {
					console.log("mapping rows");
					return (
						<StyledTableCell
							align="center"
							key={index}
							className={col}
							label={col}
							tabIndex={7 + index * rowIndex}
						>
							<StyledInput
								name={col}
								value={row[col]}
								tabIndex={7 + index * rowIndex}
								onChange={(e) => handleValueChange(e, row.id)}
								// onKeyDown={(e) => {
								// 	if (e.keyCode === 9) e.preventDefault();
								// }}
								align={"center"}
							/>
						</StyledTableCell>
					);
				})}
		</TableRow>
	);
};

export default memo(ScrollRowItem);
// IMPORTANT: Every row item should wrapped within `memo`, So it will re-render only when the props changes.
