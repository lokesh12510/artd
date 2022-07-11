import { FormGroup, Grid, InputAdornment, MenuItem } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import CheckboxField from "../../../../components/CheckboxField";
import CustomDialog from "../../../../components/CustomDialog";
import InputField from "../../../../components/InputField";
import RadioField from "../../../../components/RadioField";

export default function AddInvoice({ open, handleClose }) {
	const initialState = {
		mobile: "",
	};

	const [values, setValues] = useState(initialState);

	const modalActions = [
		{
			title: "Save",
			variant: "contained",
			color: "primary",
			handleAction: handleClose,
		},
		{
			title: "Reset",
			variant: "outlined",
			color: "primary",
			handleAction: handleClose,
		},
		{
			title: "Cancel",
			variant: "outlined",
			color: "dark",
			handleAction: handleClose,
		},
	];

	const handleChange = (e) => {
		setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
	};

	return (
		<CustomDialog
			title="Add Invoice Contact"
			visible={open}
			handleModalState={handleClose}
			actions={modalActions}
			maxWidth="md"
			fullWidth={true}
			actionPosition="end"
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<InputField name="first name" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField name="last name" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField name="position title" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" name="client name">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormGroup row sx={{ justifyContent: "space-between" }}>
						<CheckboxField label={"Reference"} />
						<CheckboxField label={"Invoice"} />
						<CheckboxField label={"Project"} />
						<CheckboxField label={"QA"} />
					</FormGroup>
				</Grid>

				<Grid item xs={12} sm={6}>
					<InputField name="email" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField name="phone" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField
						name="mobile"
						onChange={handleChange}
						value={values.mobile}
						InputProps={{
							startAdornment: <InputAdornment position="start">+61</InputAdornment>,
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<RadioField
						label={"Status"}
						dir="row"
						radioList={[
							{ label: "Active", value: "Active" },
							{ label: "Inactive", value: "Inactive" },
						]}
					/>
				</Grid>
			</Grid>
		</CustomDialog>
	);
}
