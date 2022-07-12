import { Grid, MenuItem } from "@mui/material";
import * as React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import InputField from "../../../../components/InputField";
import RadioField from "../../../../components/RadioField";
import SelectField from "../../../../components/SelectField";
import { CustomBox } from "../../../../theme/GlobalStyles";
// Redux
import { useSelector } from "react-redux";
import { selectList } from "../../../../app/slices/listSlice";

// eslint-disable-next-line no-unused-vars
const initialState = {
	ClientName: "",
	abn: "",
	orgType: "",
	govType: "",
	state: "",
	country: "",
	address: "",
	suburb: "",
};

export default function AddClient({ open, handleClose }) {
	// List State from redux
	const { govTypeList, orgTypeList, stateList, countryList } =
		useSelector(selectList);

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
					<InputField label="client name" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField label="ABN" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						list={orgTypeList}
						value={""}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="Organization type"
						name="orgType"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						list={govTypeList}
						value={""}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="government type"
						name="govType"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						list={stateList}
						value={""}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="state"
						name="state"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectField
						list={countryList}
						value={""}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="country"
						name="country"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" label="organization type">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" label="government type">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" label="state">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12} sm={6}>
					<InputField select defaultValue="All" label="country">
						<MenuItem value="All">All</MenuItem>
					</InputField>
				</Grid>
				<Grid item xs={12}>
					<CustomBox>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<InputField multiline label="address" height={100} />
							</Grid>
							<Grid item xs={6}>
								<InputField multiline label="suburb" />
							</Grid>
							<Grid item xs={6}>
								<InputField select defaultValue="All" label="state">
									<MenuItem value="All">All</MenuItem>
								</InputField>
							</Grid>
							<Grid item xs={12} sm={6}>
								<InputField select defaultValue="All" label="country">
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
