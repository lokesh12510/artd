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
import React, { useState } from "react";
import InputField from "../../../../components/InputField";
import { StyledBox, StyledInput, StyledSelect, StyledTableContainer } from "../../../../theme/GlobalStyles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import styled from "@emotion/styled";
import palette from "../../../../theme/palette";
import { AddIcon, DeleteIcon, EditIcon } from "../../../../constants/icons";

const StaffForm = ({ selectedStaff }) => {
	const [field, setField] = useState("");

	const handleField = (id) => {
		setField(id);
	};
	return (
		<Grid container rowSpacing={2} columnSpacing={2}>
			{/* ------------- Staff Form ----------------- */}
			<Grid item xs={12}>
				<StyledBox>
					<Grid container spacing={3}>
						<Grid item xs>
							<Stack direction={"column"} spacing={2}>
								<InputField name="code" value={selectedStaff?.code || ""} style={{ maxWidth: 100 }} />
								<InputField name="name" value={selectedStaff?.name || ""} />
								<InputField name="email" value={selectedStaff?.email || ""} />
								<InputField name="User Type" value={selectedStaff?.userType || ""} select>
									<MenuItem value={"Marketing"}>Marketing</MenuItem>
									<MenuItem value={"Developer"}>Developer</MenuItem>
								</InputField>

								<FormGroup aria-label="position" row>
									<FormControlLabel
										value="top"
										control={<Checkbox />}
										checked={selectedStaff && selectedStaff?.status === "active" ? true : false}
										label="Active?"
									/>
									<FormControlLabel
										value="start"
										control={<Checkbox />}
										checked={selectedStaff && selectedStaff?.status === "available" ? true : false}
										label="Available for project?"
									/>
									<FormControlLabel
										value="bottom"
										control={<Checkbox />}
										checked={selectedStaff && selectedStaff?.status === "left" ? true : false}
										label="Left ARTD?"
									/>
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
										value={selectedStaff?.date || null}
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
						<MergeStack
							direction={"row"}
							alignItems="flex-end"
							justifyContent={"space-between"}
							spacing={1}
							className={`field  ${field === "role" && "merge"}`}
						>
							<InputField name="Role" value={selectedStaff?.role || ""} select>
								<MenuItem value={"Analyst"}>Analyst</MenuItem>
								<MenuItem value={"FrontEnd"}>Developer</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }} onClick={() => handleField("role")}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</MergeStack>
						<MergeStack
							direction={"row"}
							alignItems="flex-end"
							justifyContent={"space-between"}
							spacing={1}
							className={`field  ${field === "rate" && "merge"}`}
						>
							<InputField name="Rate" value={selectedStaff?.rate || ""} select>
								<MenuItem value={"$940"}>$940</MenuItem>
								<MenuItem value={"$840"}>$840</MenuItem>
							</InputField>

							<IconButton style={{ marginBottom: "10px" }} onClick={() => handleField("rate")}>
								<EditIcon bg={palette.primary.main} />
							</IconButton>
						</MergeStack>
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
						{selectedStaff &&
							selectedStaff?.parameters.map((item, i) => {
								return (
									<Stack key={i} direction={"row"} alignItems="center" justifyContent={"space-between"} spacing={1}>
										<StyledSelect name="param 1" select value={item.param1}>
											<MenuItem value={823}>823</MenuItem>
											<MenuItem value={1023}>1023</MenuItem>
										</StyledSelect>
										<StyledSelect name="param 2" select value={item.param2}>
											<MenuItem value={823}>823</MenuItem>
											<MenuItem value={2342}>2342</MenuItem>
										</StyledSelect>
										<StyledSelect name="Desc" select value={item.desc}>
											<MenuItem value={"Desc 1"}>Desc 1</MenuItem>
											<MenuItem value={"Desc 2"}>Desc 2</MenuItem>
											<MenuItem value={"Nama Jalu"}>Nama Jalu</MenuItem>
											<MenuItem value={"Jalu Nama"}>Jalu Nama</MenuItem>
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
	padding: theme.spacing(0.8),
	paddingInline: theme.spacing(2),
	backgroundColor: palette.grey[200],
	border: `1px solid ${palette.grey[300]}`,
	width: "fit-content",
	margin: "auto",
	borderRadius: 3,
	color: palette.grey[600],
}));

const MergeStack = styled(Stack)(({ theme }) => ({
	position: "relative",
	"&.merge": {
		transform: "translate(11px, -2px) scale(1.1)",
		padding: "15px",
		border: `1px solid ${palette.grey[300]}`,
		zIndex: 2,
		background: "#fff",
		borderRight: "none",
		borderRadius: "10px",
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		transition: "all .2s ease",
		// "&::after": {
		// 	content: '""',
		// 	zIndex: 2,
		// 	position: "absolute",
		// 	right: "-54px",
		// 	width: 40,
		// 	height: 40,
		// 	border: `1px solid ${palette.grey[300]}`,
		// 	borderTopColor: "transparent",
		// 	borderRightColor: "transparent",
		// 	backgroundColor: palette.common.white,
		// 	boxShadow: "-1px 1px 0.5px 0px rgb(229 229 229)",
		// 	transform: "translate(11px, -2px) scale(1.1)",
		// 	// borderTop: `1px solid ${palette.grey[300]}`,
		// 	// borderBottom: `1px solid ${palette.grey[300]}`,
		// 	//     borderTopLeftRadius: 21
		// },
		"& .MuiOutlinedInput-input": {
			border: `1px solid ${palette.secondary.main}`,
		},
	},
}));
