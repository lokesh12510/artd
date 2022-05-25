import { Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import { ExportIcon } from "../../../../constants/icons";
import { StyledBtn, StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const OutputModal = ({ outputModal, handleOutputModal }) => {
	const editModalActions = [{ title: "Cancel", variant: "outlined", color: "dark", handleAction: handleOutputModal }];
	return (
		<CustomDialog
			title="Proposal Outputs"
			visible={outputModal}
			handleModalState={handleOutputModal}
			actions={editModalActions}
			maxWidth="sm"
			fullWidth={true}
		>
			<Stack justifyContent={"center"} alignItems="start" direction={"column"} px={3} spacing={2}>
				<Stack justifyContent={"space-between"} alignItems="center" direction={"row"} spacing={2} style={{ width: "100%" }}>
					<Typography style={{ minWidth: 100 }}>Select Output</Typography>

					<StyledBtn variant="contained" color="primary" startIcon={<ExportIcon />}>
						Export to Excel
					</StyledBtn>
				</Stack>
				<Stack justifyContent={"space-between"} alignItems="center" direction={"row"} spacing={2}>
					<Stack justifyContent={"start"} alignItems="center" direction={"column"} spacing={2}>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked />} label="Budget by Phase & Task" />
							<FormControlLabel control={<Checkbox />} label="Budget By Phase" />
						</FormGroup>
					</Stack>
					<Stack justifyContent={"start"} alignItems="center" direction={"column"} spacing={2}>
						<FormGroup>
							<FormControlLabel control={<Checkbox />} label="Expenses" />
							<FormControlLabel control={<Checkbox />} label="Project Plan" />
						</FormGroup>
					</Stack>
				</Stack>
			</Stack>
		</CustomDialog>
	);
};

export default OutputModal;
