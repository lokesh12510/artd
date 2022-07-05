import React from "react";
// Mui
import { Grid } from "@mui/material";
// Components
import Form from "./Form";
import Parameters from "./Parameters";
import EditParameters from "./EditParameters";

const StaffForm = () => {
	return (
		<Grid container rowSpacing={2} columnSpacing={2}>
			{/* ------------- Staff Form ----------------- */}
			<Grid item xs={12}>
				<Form />
			</Grid>
			{/* ------------- Staff Form ----------------- */}
			<Grid item xs={6}>
				<Parameters />
			</Grid>
			<Grid item xs={6}>
				<EditParameters />
			</Grid>
		</Grid>
	);
};

export default StaffForm;
