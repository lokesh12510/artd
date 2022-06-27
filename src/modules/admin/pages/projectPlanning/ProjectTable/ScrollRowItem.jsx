import React, { memo } from "react";
import {
	StyledInput,
	StyledTableCell,
} from "../../../../../theme/GlobalStyles";
import { TableRow } from "@mui/material";
import { editProjectRow } from "../../../../../app/slices/projectPlanningSlice";
import { useDispatch } from "react-redux";

const ScrollRowItem = ({ cols, row, isItemSelected, rowIndex }) => {
	const dispatch = useDispatch();

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
