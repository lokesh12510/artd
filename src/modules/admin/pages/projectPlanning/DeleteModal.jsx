import { Stack, Typography } from "@mui/material";
import React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import { StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const DeleteModal = ({ deleteModal, handleDeleteModal }) => {
	const deleteModalActions = [
		{ title: "Delete", variant: "contained", color: "primary", handleAction: handleDeleteModal },
		{ title: "Cancel", variant: "outlined", color: "dark", handleAction: handleDeleteModal },
	];

	return (
		<CustomDialog
			title="Delete Task?"
			visible={deleteModal}
			handleModalState={handleDeleteModal}
			actions={deleteModalActions}
			maxWidth="sm"
		>
			<Stack justifyContent={"flex-start"} alignItems="start" direction={"column"} px={3} spacing={2}>
				<Stack
					justifyContent={"space-between"}
					alignItems="start"
					direction={"row"}
					spacing={2}
					mb={2}
					style={{ width: "100%" }}
				>
					<Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={2} style={{ width: "100%" }}>
						<Typography style={{ minWidth: 100 }}>Phase</Typography>
						<StyledInput style={{ maxWidth: 70 }} value="2" />
					</Stack>
					<Stack justifyContent={"flex-end"} alignItems="center" direction={"row"} spacing={2} style={{ width: "100%" }}>
						<Typography style={{ minWidth: 100 }}>Task</Typography>
						<StyledInput style={{ maxWidth: 70 }} value="2" />
					</Stack>
				</Stack>
				<Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={2} style={{ width: "100%" }}>
					<Typography style={{ minWidth: 100 }}>Task Month</Typography>
					<Typography style={{ minWidth: 100 }} color={palette.grey[400]}>
						28 Jun 2022
					</Typography>
				</Stack>
				<Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={2} style={{ width: "100%" }}>
					<Typography style={{ minWidth: 100 }}>Description</Typography>
					<Typography style={{ minWidth: 100 }} color={palette.grey[400]}>
						Inception meeting
					</Typography>
				</Stack>
			</Stack>
		</CustomDialog>
	);
};

export default DeleteModal;
