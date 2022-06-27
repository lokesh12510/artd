import React from "react";

import { useSelector } from "react-redux";
import {
	projectColumnList,
	selectPendingRows,
} from "../../../../../app/slices/projectPlanningSlice";
import { useCallback } from "react";
import StickyRowItem from "./StickyRowItem";

const StickyRows = React.memo(({ selected = [] }) => {
	const rows = useSelector(selectPendingRows);
	const cols = useSelector(projectColumnList);

	const isSelected = useCallback((id) => selected.indexOf(id) !== -1, [selected]);

	return rows.map((row, index) => {
		const isItemSelected = isSelected(row.id);

		// const labelId = `enhanced-table-checkbox-${index}`;
		return (
			<StickyRowItem
				isItemSelected={isItemSelected}
				row={row}
				cols={cols}
				key={row.id}
				rowIndex={index}
			/>
		);
	});
});

export default StickyRows;
