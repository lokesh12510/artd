import {
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid,
	IconButton,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import InputField from "../../../../components/InputField";
import { StyledBox, StyledInput, StyledSelect, StyledTableContainer } from "../../../../theme/GlobalStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import styled from "@emotion/styled";
import palette from "../../../../theme/palette";
import { AddIcon, DeleteIcon, EditIcon } from "../../../../constants/icons";

const StaffForm = () => {
	return (
		<Grid container rowSpacing={2} columnSpacing={2}>
			{/* ------------- Staff Form ----------------- */}
			<Grid item xs={12}>
				<StyledBox>
					<Grid container spacing={3}>
						<Grid item xs>
							<Stack direction={"column"} spacing={2}>
								<InputField name="code" value="NM2" style={{ maxWidth: 100 }} />
								<InputField name="name" value="Brad Astbury" />
								<InputField name="email" value="demo@gmail.com.au" />
								<InputField name="User Type" value={0} select>
									<MenuItem value={0}>Marketing</MenuItem>
									<MenuItem value={1}>News</MenuItem>
								</InputField>

								<FormGroup aria-label="position" row>
									<FormControlLabel value="top" control={<Checkbox />} label="Active?" />
									<FormControlLabel value="start" control={<Checkbox />} label="Available for project?" />
									<FormControlLabel value="bottom" control={<Checkbox />} label="Left ARTD?" />
								</FormGroup>
							</Stack>
						</Grid>
						<Grid item xs>
							<Stack direction={"column"} spacing={2}>
								<InputField name="Type" value={0} select>
									<MenuItem value={0}>Select</MenuItem>
									<MenuItem value={1}>News</MenuItem>
								</InputField>
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DatePicker
										// value={item.when}
										// onChange={(newValue) => {
										// 	handleDateChange(newValue._d, item.id);
										// }}
										renderInput={(params) => <InputField name="Start date" {...params} />}
									/>
								</LocalizationProvider>
								<InputField name="Start Week" value={0} select>
									<MenuItem value={0}>Select</MenuItem>
									<MenuItem value={1}>News</MenuItem>
								</InputField>
								<InputField name="End Week" value={0} select>
									<MenuItem value={0}>Select</MenuItem>
									<MenuItem value={1}>News</MenuItem>
								</InputField>
							</Stack>
						</Grid>
					</Grid>
				</StyledBox>
			</Grid>
			{/* ------------- Staff Form ----------------- */}
			<Grid item xs={6}>
				<StyledBox>
					<Stack direction={"column"} justifyContent="flex-start" spacing={2}>
						<Typography color={"primary"} variant="h5">
							Parameters
						</Typography>
						<InputField name="As of Week" value={0} select>
							<MenuItem value={0}>Select</MenuItem>
							<MenuItem value={1}>News</MenuItem>
						</InputField>
						<div>
							<DateIndicator>07 Apr 2022</DateIndicator>
						</div>
						<Divider />
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Role" value={0} select>
								<MenuItem value={0}>Analyst</MenuItem>
								<MenuItem value={1}>News</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Rate" value={0} select>
								<MenuItem value={0}>$990</MenuItem>
								<MenuItem value={1}>$920</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Portfolio" value={0} select>
								<MenuItem value={0}>KoE</MenuItem>
								<MenuItem value={1}>KoE</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Chargeable Ratio" value={0} select>
								<MenuItem value={0}>8000</MenuItem>
								<MenuItem value={1}>2000</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Productivity Rate" value={0} select>
								<MenuItem value={0}>6500</MenuItem>
								<MenuItem value={1}>2000</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Agreement Days" value={0} select>
								<MenuItem value={0}>5.0</MenuItem>
								<MenuItem value={1}>2.0</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Salary" value={0} select>
								<MenuItem value={0}>$62,000</MenuItem>
								<MenuItem value={1}>$34,000</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
						<Stack direction={"row"} alignItems="flex-end" justifyContent={"space-between"} spacing={1}>
							<InputField name="Windows Logon" value={0} select>
								<MenuItem value={0}>david.watling</MenuItem>
								<MenuItem value={1}>david.watling</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</Stack>
					</Stack>
				</StyledBox>
			</Grid>
			<Grid item xs={6}>
				<StyledBox style={{ height: "100%" }}>
					<Stack direction={"column"} justifyContent="flex-start" spacing={2}>
						<Typography color={"primary"} variant="h5">
							Edit Parameters
						</Typography>
						{[...new Array(4)].map((item, i) => {
							return (
								<Stack key={i} direction={"row"} alignItems="center" justifyContent={"space-between"} spacing={1}>
									<StyledSelect name="phase" select>
										<MenuItem value={"1"}>1</MenuItem>
										<MenuItem value={"2"}>2</MenuItem>
										<MenuItem value={"3"}>3</MenuItem>
									</StyledSelect>
									<StyledSelect name="phase" select>
										<MenuItem value={"1"}>1</MenuItem>
										<MenuItem value={"2"}>2</MenuItem>
										<MenuItem value={"3"}>3</MenuItem>
									</StyledSelect>
									<StyledSelect name="phase" select>
										<MenuItem value={"1"}>1</MenuItem>
										<MenuItem value={"2"}>2</MenuItem>
										<MenuItem value={"3"}>3</MenuItem>
									</StyledSelect>

									<IconButton>
										<DeleteIcon bg={palette.primary.main} />
									</IconButton>
									<IconButton>
										<AddIcon bg={palette.primary.main} />
									</IconButton>
								</Stack>
							);
						})}
					</Stack>
				</StyledBox>
			</Grid>
		</Grid>
	);
};

export default StaffForm;

const DateIndicator = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: theme.spacing(1),
	paddingInline: theme.spacing(2),
	backgroundColor: palette.grey[300],
	width: "fit-content",
	margin: "auto",
	borderRadius: 3,
}));
