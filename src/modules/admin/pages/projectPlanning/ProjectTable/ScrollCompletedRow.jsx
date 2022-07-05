import React, { memo } from "react";
// Mui
import {
	StyledInput,
	StyledTableCell,
} from "../../../../../theme/GlobalStyles";
import { visuallyHidden } from "@mui/utils";
import { TableRow } from "@mui/material";
// Redux
import { useSelector } from "react-redux";
import {
	isCompletedOpen,
	projectColumnList,
	selectCompletedRows,
} from "../../../../../app/slices/projectPlanningSlice";

const ScrollCompletedRow = () => {
	const rows = useSelector(selectCompletedRows);
	const cols = useSelector(projectColumnList);

	return rows.map((row) => {
		return <RowItem cols={cols} row={row} key={row.id} />;
	});
};

export default memo(ScrollCompletedRow);

const RowItem = memo(({ cols, row }) => {
	const open = useSelector(isCompletedOpen);

	return (
		<TableRow
			key={row.id}
			selected={true}
			sx={row.isCompleted && !open && visuallyHidden} // Style to hide or show completed rows
		>
			{cols
				.filter((item) => item.includes("_"))
				.map((col, index) => {
					return (
						<StyledTableCell
							align="center"
							key={index}
							className={col}
							label={col}
							tabIndex={1}
						>
							<StyledInput
								name={col}
								value={row[col]}
								onKeyDown={(e) => {
									if (e.keyCode === 9) e.preventDefault();
								}}
								align={"center"}
							/>
						</StyledTableCell>
					);
				})}
		</TableRow>
	);
});
