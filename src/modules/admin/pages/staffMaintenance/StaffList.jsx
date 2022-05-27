import { Checkbox, FormHelperText, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ArrowCheckIcon } from "../../../../constants/icons";

const StaffList = ({ selectedStaff, handleSelectStaff, data }) => {
	return (
		<StaffListContainer direction={"column"}>
			<ListHeader direction={"row"} justifyContent="space-between" alignItems={"center"}>
				<FormControl>
					<RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
						<FormControlLabel
							value="Active"
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
							label="Active"
						/>
					</RadioGroup>
					<FormHelperText>50</FormHelperText>
				</FormControl>
				<FormControl>
					<RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
						<FormControlLabel
							value="All"
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
							label="All"
						/>
					</RadioGroup>
					<FormHelperText>50</FormHelperText>
				</FormControl>
				<FormControl>
					<RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
						<FormControlLabel
							value="Left"
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
							label="Left"
						/>
					</RadioGroup>
					<FormHelperText>50</FormHelperText>
				</FormControl>
			</ListHeader>
			<ListBody direction={"column"} spacing={1}>
				{data.map((item, i) => {
					return (
						<ListItem key={item.id} direction={"row"} justifyContent="space-between" alignItems={"center"} spacing={1}>
							<Checkbox
								checkedIcon={<ArrowCheckIcon />}
								checked={selectedStaff && selectedStaff.id === item.id ? true : false}
								onChange={() => handleSelectStaff(item)}
							/>
							<StyledInput value={item.name} />
							<StyledInput style={{ maxWidth: 50 }} value={item.code} align="center" />
						</ListItem>
					);
				})}
			</ListBody>
		</StaffListContainer>
	);
};

export default StaffList;

const StaffListContainer = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: "100%",
}));
const ListHeader = styled(Stack)(({ theme }) => ({
	borderTopLeftRadius: 5,
	borderTopRightRadius: 5,
	backgroundColor: palette.primary.main,
	padding: theme.spacing(2),
	"& .MuiTypography-root": {
		color: palette.common.white,
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
const ListBody = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.highlight,
	paddingBlock: theme.spacing(2),
	paddingRight: theme.spacing(2),
	height: "100%",
}));
const ListItem = styled(Stack)(({ theme }) => ({
	"& .MuiTextField-root .MuiOutlinedInput-input": {
		padding: theme.spacing(0.7),
	},
}));
