import React, { useCallback } from "react";
// Redux
import { useSelector } from "react-redux";
import {
	projectColumnList,
	selectPendingRows,
} from "../../../../../app/slices/projectPlanningSlice";
// Components
import ScrollRowItem from "./ScrollRowItem";

const ScrollRows = React.memo(({ selected = [] }) => {
	const rows = useSelector(selectPendingRows);

	const cols = useSelector(projectColumnList);

	// All callback should wrapped with `useCallback` hook for better performance in table
	const isSelected = useCallback((id) => selected.indexOf(id) !== -1, [selected]);

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
