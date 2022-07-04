import React from "react";
// Mui
import { Checkbox, Stack } from "@mui/material";
import styled from "@emotion/styled";

// Custom Styles
import { StyledInput } from "../../../../../theme/GlobalStyles";
import palette from "../../../../../theme/palette";
// Custom Icons
import { ArrowCheckIcon } from "../../../../../constants/icons";
import { memo } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
	selectedStaffId,
	selectStaff,
} from "../../../../../app/slices/staffSlice";

const StaffLists = ({ staffList }) => {
	const dispatch = useDispatch();

	const staffId = useSelector(selectedStaffId);

	const handleSelectStaff = (item) => {
		dispatch(selectStaff({ staffId: item.id }));
	};

	return (
		<ListBody direction={"column"} spacing={1}>
			{staffList.map((item, i) => {
				return (
					<ListItem
						key={item.id}
						direction={"row"}
						justifyContent="space-between"
						alignItems={"center"}
						spacing={1}
					>
						<Checkbox
							sx={{ color: palette.primary.main }}
							checkedIcon={<ArrowCheckIcon />}
							checked={staffId && staffId === item.id ? true : false}
							onChange={() => handleSelectStaff(item)}
						/>
						<StyledInput value={item.name} />
						<StyledInput style={{ maxWidth: 50 }} value={item.code} align="center" />
					</ListItem>
				);
			})}
		</ListBody>
	);
};

export default memo(StaffLists);

const ListBody = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.highlight,
	paddingBlock: theme.spacing(2),
	paddingRight: theme.spacing(2),
	height: "100%",
}));
const ListItem = styled(Stack)(({ theme }) => ({
	"& .MuiTextField-root .MuiOutlinedInput-input": {
		padding: theme.spacing(1),
		textTransform: "capitalize",
	},
	// "& .MuiCheckbox-root": {
	// 	paddingBlock: 4,
	// },
}));
