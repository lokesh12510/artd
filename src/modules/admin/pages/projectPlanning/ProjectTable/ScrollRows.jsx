import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import {
	projectColumnList,
	selectPendingRows,
} from "../../../../../app/slices/projectPlanningSlice";
import ScrollRowItem from "./ScrollRowItem";

const ScrollRows = React.memo(({ selected = [] }) => {
	const rows = useSelector(selectPendingRows);

	const cols = useSelector(projectColumnList);

	const isSelected = useCallback((id) => selected.indexOf(id) !== -1, [selected]);

	console.log("rendered Scroll Rows", rows);
	return rows.map((row, index) => {
		const isItemSelected = isSelected(row.id);

		return (
			<ScrollRowItem
				isItemSelected={isItemSelected}
				row={row}
				cols={cols}
				key={row.id}
				rowIndex={index}
			/>
		);
	});
});

export default ScrollRows;
