import { Grid, MenuItem } from "@mui/material";
import * as React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import InputField from "../../../../components/InputField";
import RadioField from "../../../../components/RadioField";
import { CustomBox } from "../../../../theme/GlobalStyles";

export default function AddClient({ open, handleClose }) {
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
	return (
		<CustomDialog
			title="Add Client"
			visible={open}
			handleModalState={handleClose}
			actions={modalActions}
			maxWidth="md"
			fullWidth={true}
			actionPosition="end"
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<InputField name="client name" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField name="ABN" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" name="organization type">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" name="government type">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" name="state">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" name="country">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12}>
					<CustomBox>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<InputField multiline name="address" height={100} />
							</Grid>
							<Grid item xs={6}>
								<InputField multiline name="suburb" />
							</Grid>
							<Grid item xs={6}>
								<InputField select defaultValue="All" name="state">
									<MenuItem value="All">All</MenuItem>
								</InputField>
							</Grid>
							<Grid item xs={12} sm={6}>
								<InputField select defaultValue="All" name="country">
									<MenuItem value="All">All</MenuItem>
								</InputField>
							</Grid>
						</Grid>
					</CustomBox>
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
