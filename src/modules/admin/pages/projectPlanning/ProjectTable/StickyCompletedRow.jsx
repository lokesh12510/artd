import React, { memo } from "react";
// Mui
import {
	Checkbox,
	IconButton,
	Stack,
	TableCell,
	TableRow,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { visuallyHidden } from "@mui/utils";
// Mui Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// Custom Styles
import palette from "../../../../../theme/palette";
// Custom Icons
import {
	StyledInput,
	StyledTableCell,
} from "../../../../../theme/GlobalStyles";
import { DeleteIcon, EyeIcon } from "../../../../../constants/icons";
// Redux
import { useSelector } from "react-redux";
import {
	isCompletedOpen,
	projectColumnList,
	selectCompletedRows,
} from "../../../../../app/slices/projectPlanningSlice";

const StickyCompRowItem = () => {
	const rows = useSelector(selectCompletedRows);
	const cols = useSelector(projectColumnList);

	return rows.map((row) => {
		return <RowItem cols={cols} row={row} key={row.id} />;
	});
};
export default memo(StickyCompRowItem);

const RowItem = memo(({ cols, row }) => {
	const open = useSelector(isCompletedOpen);

	return (
		<TableRow
			key={row.id}
			sx={row.isCompleted && !open && visuallyHidden} // Styling to hide or show completed rows
			selected={true}
		>
			{/* Checkbox */}
			<TableCell scope="row" align="center">
				<Checkbox
					color="primary"
					style={{ color: palette.primary.light }}
					// onChange={(event) => handleClick(event, row.id)}
					checked={true}
				/>
			</TableCell>
			{/* Checkbox */}

			{/* Icons Cell */}
			<TableCell align="center" style={{ width: 100 }}>
				<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
					<IconButton color="primary" aria-label="upload picture" component="span">
						<EyeIcon bg={palette.primary.main} />
					</IconButton>
					<IconButton
						sx={{ color: palette.primary.light }}
						aria-label="delete"
						component="span"
					>
						<DeleteIcon fontSize="small" />
					</IconButton>
				</Stack>
			</TableCell>
			{/* Icons Cell */}

			{/* Completed rows loop */}
			{cols
				.slice(2)
				.filter((item) => !item.includes("_"))
				.map((col, index) => {
					return (
						<StyledTableCell
							align="center"
							key={index}
							className={col}
							label={col}
							tabIndex={1}
						>
							{col === "date" ? (
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DatePicker
										views={["year", "month"]}
										value={row[col]}
										// value={value}
										onChange={(newValue) => {
											console.log(newValue);
										}}
										components={{
											OpenPickerIcon: ArrowDropDownIcon,
										}}
										renderInput={(params) => <StyledInput variant="outlined" {...params} />}
									/>
								</LocalizationProvider>
							) : (
								<StyledInput
									name={col}
									value={row[col]}
									onKeyDown={(e) => {
										if (e.keyCode === 9) e.preventDefault();
									}}
									align={col === "description" ? "left" : "center"}
								/>
							)}
						</StyledTableCell>
					);
				})}
		</TableRow>
	);
});
