import React, { memo } from "react";
import {
	Checkbox,
	IconButton,
	Stack,
	TableCell,
	TableRow,
} from "@mui/material";
import palette from "../../../../../theme/palette";
import {
	CopyIcon,
	DeleteIcon,
	EditIcon,
	EyeIcon,
} from "../../../../../constants/icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "@emotion/styled";
import { StyledInput } from "../../../../../theme/GlobalStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { editProjectRow } from "../../../../../app/slices/projectPlanningSlice";
import { useDispatch } from "react-redux";

const StickyRowItem = ({ row, cols, isItemSelected, rowIndex }) => {
	console.log("rendered Sticky Row", row);

	const dispatch = useDispatch();

	const handleValueChange = (e, id) => {
		dispatch(editProjectRow({ name: e.target.name, value: e.target.value, id }));
	};

	const handleDateChange = (val, id) => {
		dispatch(editProjectRow({ name: "date", value: val, id }));
	};

	const handleCheckbox = (val, id) => {
		dispatch(editProjectRow({ name: "isCompleted", value: !val, id }));
	};

	return (
		<TableRow
			key={row.id}
			// sx={row.isCompleted && !open && visuallyHidden}
			// // onClick={(event) => handleClick(event, row.id)}
			// selected={true}
			selected={row.isCompleted ? true : isItemSelected}
		>
			<TableCell scope="row" align="center">
				<Checkbox
					color="primary"
					style={{ color: palette.primary.light }}
					onChange={(event) => handleCheckbox(row.isCompleted, row.id)}
					checked={row.isCompleted}
				/>
			</TableCell>
			<TableCell align="center" style={{ width: 100 }}>
				{isItemSelected || row.isCompleted ? (
					<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
						<IconButton color="primary" aria-label="upload picture" component="span">
							<EyeIcon bg={palette.primary.main} />
						</IconButton>
						<IconButton color="primary" aria-label="upload picture" component="span">
							<DeleteIcon bg={palette.grey[400]} />
						</IconButton>
					</Stack>
				) : (
					<Stack direction="row" alignItems="center" justifyContent={"flex-end"}>
						<IconButton
							color="primary"
							aria-label="copy"
							component="span"
							// onClick={() => handleDuplicateRow(index)}
						>
							<CopyIcon bg={palette.primary.light} />
						</IconButton>
						<IconButton
							color="primary"
							aria-label="edit"
							component="span"
							// onClick={() => handleEditModal()}
						>
							<EditIcon bg={palette.primary.light} />
						</IconButton>
						<IconButton
							sx={{ color: palette.primary.light }}
							aria-label="delete"
							component="span"
							// onClick={() => handleDeleteModal()}
						>
							<DeleteIcon fontSize="small" />
						</IconButton>
					</Stack>
				)}
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
							tabIndex={index * rowIndex}
						>
							{col === "date" ? (
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DatePicker
										views={["year", "month"]}
										value={row[col]}
										// value={value}
										onChange={(newValue) => {
											handleDateChange(newValue._d, row.id);
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
									tabIndex={index * rowIndex}
									onChange={(e) => handleValueChange(e, row.id)}
									// onKeyDown={(e) => {
									// 	if (e.keyCode === 9) e.preventDefault();
									// }}
									align={col === "description" ? "left" : "center"}
								/>
							)}
						</StyledTableCell>
					);
				})}
		</TableRow>
	);
};

export default memo(StickyRowItem);

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
