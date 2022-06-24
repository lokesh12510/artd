import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import { ExportIcon } from "../../../../constants/icons";
import { StyledBtn } from "../../../../theme/GlobalStyles";

const OutputModal = ({ outputModal, handleOutputModal }) => {
	const editModalActions = [
		{
			title: "Cancel",
			variant: "outlined",
			color: "dark",
			handleAction: handleOutputModal,
		},
	];
	return (
		<CustomDialog
			title="Proposal Outputs"
			visible={outputModal}
			handleModalState={handleOutputModal}
			actions={editModalActions}
			maxWidth="sm"
			fullWidth={true}
		>
			<Stack
				justifyContent={"center"}
				alignItems="start"
				direction={"column"}
				px={1}
				spacing={2}
			>
				<Stack
					justifyContent={"space-between"}
					alignItems="center"
					direction={"row"}
					spacing={2}
					style={{ width: "100%" }}
				>
					<Typography style={{ minWidth: 100 }}>Select Output</Typography>

					<StyledBtn variant="contained" color="primary" startIcon={<ExportIcon />}>
						Export to Excel
					</StyledBtn>
				</Stack>

				<FormGroup row sx={{ justifyContent: "space-between", width: "100%" }}>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Budget by Phase & Task"
					/>
					<FormControlLabel control={<Checkbox />} label="Budget By Phase" />
					<FormControlLabel
						control={<Checkbox />}
						label="Project Plan"
						sx={{ marginInlineEnd: 0 }}
					/>
				</FormGroup>
			</Stack>
		</CustomDialog>
	);
};

export default OutputModal;
