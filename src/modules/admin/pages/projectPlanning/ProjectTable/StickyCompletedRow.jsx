import React, { memo } from "react";
import {
	Checkbox,
	IconButton,
	Stack,
	TableCell,
	TableRow,
} from "@mui/material";
import palette from "../../../../../theme/palette";
import { DeleteIcon, EyeIcon } from "../../../../../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
	StyledInput,
	StyledTableCell,
} from "../../../../../theme/GlobalStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
	isCompletedOpen,
	projectColumnList,
	selectCompletedRows,
} from "../../../../../app/slices/projectPlanningSlice";
import { useSelector } from "react-redux";
import { visuallyHidden } from "@mui/utils";

const StickyCompRowItem = () => {
	const rows = useSelector(selectCompletedRows);
	const cols = useSelector(projectColumnList);

	return rows.map((row) => {
		console.log("rendered Scroll Completed Row", row.id);
		return <RowItem cols={cols} row={row} key={row.id} />;
	});
};
export default memo(StickyCompRowItem);

const RowItem = memo(({ cols, row }) => {
	console.log("rendered Sticky Completed Row", row.id);
	const open = useSelector(isCompletedOpen);
	return (
		<TableRow
			key={row.id}
			sx={row.isCompleted && !open && visuallyHidden}
			// // onClick={(event) => handleClick(event, row.id)}
			// selected={true}
			selected={true}
		>
			<TableCell scope="row" align="center">
				<Checkbox
					color="primary"
					style={{ color: palette.primary.light }}
					// onChange={(event) => handleClick(event, row.id)}
					checked={true}
				/>
			</TableCell>
			<TableCell align="center" style={{ width: 100 }}>
				<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
					<IconButton color="primary" aria-label="upload picture" component="span">
						<EyeIcon bg={palette.primary.main} />
					</IconButton>
					<IconButton color="primary" aria-label="upload picture" component="span">
						<DeleteIcon bg={palette.grey[400]} />
					</IconButton>
				</Stack>
			</TableCell>
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
