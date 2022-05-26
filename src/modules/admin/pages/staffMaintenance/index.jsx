import {
	Checkbox,
	FormHelperText,
	Grid,
	Stack,
	Table,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { AddIcon } from "../../../../constants/icons";
import { StyledBox, StyledBtn, StyledInput, StyledTableContainer } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const StaffMaintenance = () => {
	return (
		<StyledBox>
			<Stack direction={"row"} justifyContent="space-between" alignItems={"center"} mb={3}>
				<Typography variant="h4" color={"primary"}>
					Staff Maintenance
				</Typography>
				<StyledBtn variant="contained" startIcon={<AddIcon />}>
					Add Staff
				</StyledBtn>
			</Stack>
			<Grid container>
				<Grid item xs={3} lg={3}>
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
							{[...Array(15)].map((item, i) => {
								return (
									<ListItem key={i} direction={"row"} justifyContent="space-between" alignItems={"center"} spacing={1}>
										<Checkbox />
										<StyledInput value={"David Crotty"} />
										<StyledInput style={{ maxWidth: 50 }} value="AL" />
									</ListItem>
								);
							})}
						</ListBody>
					</StaffListContainer>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default StaffMaintenance;

const StaffListContainer = styled(Stack)(({ theme }) => ({
	width: "100%",
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
	backgroundColor: palette.hightLight,
	paddingBlock: theme.spacing(2),
	paddingRight: theme.spacing(2),
}));
const ListItem = styled(Stack)(({ theme }) => ({
	"& .MuiOutlinedInput-input": {
		padding: theme.spacing(0.7),
	},
}));
