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

const StaffListItem = ({ item, checked, handleSelectStaff }) => {
	return (
		<ListItem
			key={item.StaffCode}
			direction={"row"}
			justifyContent="space-between"
			alignItems={"center"}
			spacing={1}
		>
			<Checkbox
				sx={{ color: palette.primary.main }}
				checkedIcon={<ArrowCheckIcon />}
				checked={checked}
				onChange={() => handleSelectStaff(item.StaffCode)}
			/>
			<StyledInput value={item.StaffName} />
			<StyledInput style={{ maxWidth: 50 }} value={item.StaffCode} align="center" />
		</ListItem>
	);
};

export default memo(StaffListItem);

const ListItem = styled(Stack)(({ theme }) => ({
	"& .MuiTextField-root .MuiOutlinedInput-input": {
		padding: theme.spacing(1),
		textTransform: "capitalize",
	},
	// "& .MuiCheckbox-root": {
	// 	paddingBlock: 4,
	// },
}));
