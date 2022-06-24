import { Stack, Typography } from "@mui/material";
import React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import { StyledInput } from "../../../../theme/GlobalStyles";

const EditModal = ({ editModal, handleEditModal }) => {
	const editModalActions = [
		{
			title: "Save",
			variant: "contained",
			color: "primary",
			handleAction: handleEditModal,
		},
		{
			title: "Reset",
			variant: "outlined",
			color: "primary",
			handleAction: handleEditModal,
		},
		{
			title: "Cancel",
			variant: "outlined",
			color: "dark",
			handleAction: handleEditModal,
		},
	];
	return (
		<CustomDialog
			title="Edit Phase & Task description"
			visible={editModal}
			handleModalState={handleEditModal}
			actions={editModalActions}
			maxWidth="sm"
			fullWidth={true}
			actionPosition="center"
		>
			<Stack
				justifyContent={"center"}
				alignItems="start"
				direction={"column"}
				px={3}
				spacing={2}
			>
				<Stack
					justifyContent={"center"}
					alignItems="center"
					direction={"row"}
					spacing={2}
					style={{ width: "100%" }}
				>
					<Typography style={{ minWidth: 100 }}>Phase</Typography>
					<StyledInput style={{ maxWidth: 50 }} value="2" align="center" disabled />
					<StyledInput style={{ flex: 2 }} disabled />
				</Stack>
				<Stack
					justifyContent={"center"}
					alignItems="center"
					direction={"row"}
					spacing={2}
					style={{ width: "100%" }}
				>
					<Typography style={{ minWidth: 100 }}>Task</Typography>
					<StyledInput style={{ maxWidth: 50 }} value="2" align="center" disabled />
					<StyledInput style={{ flex: 2 }} disabled />
				</Stack>
			</Stack>
		</CustomDialog>
	);
};

export default EditModal;
