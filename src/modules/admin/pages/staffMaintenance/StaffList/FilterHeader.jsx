import React from "react";
// Mui
import { FormHelperText, Stack } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";
// Custom Styles
import palette from "../../../../../theme/palette";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
	setStaffFilter,
	StaffFilterType,
} from "../../../../../app/slices/staffSlice";
import { useCallback } from "react";
import { memo } from "react";

// Filter Item component
const FilterItem = memo(({ item, filterType, handleChange, count }) => {
	return (
		<FormControl>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				name="radio-buttons-group"
				value={filterType}
				onChange={handleChange}
			>
				<FormControlLabel
					value={item}
					control={
						<Radio
							size="small"
							sx={{
								color: palette.common.white,
								"&.Mui-checked": {
									color: palette.common.white,
								},
							}}
						/>
					}
					label={item}
				/>
			</RadioGroup>
			{count && <FormHelperText>{count[item]}</FormHelperText>}
		</FormControl>
	);
});

const FilterHeader = ({ count }) => {
	const filters = ["active", "all", "left"];

	// Select Staff
	const dispatch = useDispatch();
	const filterType = useSelector(StaffFilterType);

	const handleChange = useCallback(
		(event) => {
			dispatch(setStaffFilter({ filter: event.target.value }));
		},
		[dispatch]
	);

	return (
		<ListHeader
			direction={"row"}
			justifyContent="space-between"
			alignItems={"center"}
		>
			{filters.map((item, index) => {
				return (
					<FilterItem
						item={item}
						key={index}
						handleChange={handleChange}
						filterType={filterType}
						count={count}
					/>
				);
			})}
		</ListHeader>
	);
};

export default FilterHeader;

// Styles
const ListHeader = styled(Stack)(({ theme }) => ({
	borderTopLeftRadius: 5,
	borderTopRightRadius: 5,
	backgroundColor: palette.primary.main,
	padding: theme.spacing(2),
	"& .MuiTypography-root": {
		color: palette.common.white,
		textTransform: "capitalize",
	},
	"& .MuiFormHelperText-root": {
		color: palette.secondary.main,
		fontWeight: "600",
		fontSize: 14,
		textAlign: "center",
	},
	"& .MuiRadio-root": {
		paddingBlock: 1,
	},
}));
