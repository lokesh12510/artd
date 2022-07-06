import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import InputField from "../../../../components/InputField";
import {
	CustomBox,
	StyledBox,
	StyledBtn,
	StyledLabel,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";
import ExtraWeeksApi from "../../api/extraWeekApi";

const initialState = {
	WeekCode: "",
	"Month Code": "",
	Quarter: "",
	MonthSort: "",
	DateFrom: "",
	weeks: 1,
};

const AddExtraWeeks = () => {
	// Form Values State
	const [values, setValues] = useState(initialState);

	// Get Extra Weeks Api Call
	const getLastRow = () => {
		let formData = {};
		ExtraWeeksApi.GetLastRow(formData)
			.then((response) => {
				let resData = response.data.data;
				for (let key in values) {
					if (resData[key] !== null && typeof resData[key] !== "undefined") {
						setValues((prev) => ({ ...prev, [key]: resData[key] }));
					}
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		getLastRow();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Handle Weeks value change
	const handleWeekChange = (e) => {
		setValues((prev) => ({ ...prev, weeks: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		for (let key in values) {
			formData.append(key, values[key]);
		}
		ExtraWeeksApi.Store(formData)
			.then((response) => {
				//navigate(urls.WeekAdd);
				getLastRow();
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<StyledBox>
			<StyledPageTitle mb={2}>Add Extra Weeks</StyledPageTitle>
			<CustomBox>
				<Typography color={"secondary"} mb={3}>
					Currently, the last row has the following values
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12} lg={6}>
						<Grid container spacing={5} justifyContent="flex-end">
							<Grid item xs={4}>
								<CustomInput
									name="week code"
									style={{ maxWidth: 150 }}
									value={values.WeekCode}
									disabled
								/>
							</Grid>
							<Grid item xs={4}>
								<CustomInput name="Month Code" value={values["Month Code"]} disabled />
							</Grid>
							<Grid item xs={4}>
								<CustomInput
									name="Quarter"
									style={{ maxWidth: 150 }}
									value={values.Quarter}
									disabled
								/>
							</Grid>
							<Grid item xs={4}>
								<CustomInput name="Date From" value={values.DateFrom} disabled />
							</Grid>
							<Grid item xs={4}>
								<CustomInput
									name="Month Sort"
									style={{ maxWidth: 150 }}
									value={values.MonthSort}
									disabled
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Stack direction="row" justifyContent={"flex-start"} alignItems="center" mt={2}>
							<CustomLabel shrink>How many weeks (1-52) do you want to add?</CustomLabel>
							<InputField value={values.weeks} onChange={handleWeekChange} />
						</Stack>
					</Grid>
					<Stack alignItems="flex-end" sx={{ width: "100%" }}>
						<StyledBtn variant="contained" color="primary" onClick={handleSubmit}>
							Submit
						</StyledBtn>
					</Stack>
				</Grid>
			</CustomBox>
		</StyledBox>
	);
};

export default AddExtraWeeks;

const CustomInput = styled(InputField)(() => ({
	pointerEvents: "none",
}));

const CustomLabel = styled(StyledLabel)(() => ({
	textOverflow: "initial",
	overflow: "visible",
	maxWidth: "unset",
	transformOrigin: "unset",
}));
