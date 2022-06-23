import React from "react";
import { CloseBtn, StyledBtn } from "../theme/GlobalStyles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import palette from "../theme/palette";
const CustomDialog = ({
	title,
	children,
	actions,
	visible,
	handleModalState,
	maxWidth,
	fullWidth = true,
	actionPosition,
}) => {
	// Modal Toggle State
	// const [visible, setVisible] = useState(false);

	// const handleModalState = () => {
	// 	setVisible((v) => !v);
	// };

	return (
		<Root
			open={visible}
			onClose={handleModalState}
			maxWidth={maxWidth}
			fullWidth={fullWidth}
		>
			<CloseBtn onClick={handleModalState}>
				<CloseIcon />
			</CloseBtn>
			<DialogTitle variant="h5" color={"primary"} fontWeight={"600"}>
				{title}
			</DialogTitle>
			<Divider />
			<DialogContent>{children}</DialogContent>
			{actions && actions.length > 0 && (
				<DialogActions sx={{ justifyContent: actionPosition }}>
					{actions.map((item, index) => {
						return (
							<StyledBtn
								key={index}
								variant={item.variant || "outlined"}
								color={item.color || "primary"}
								onClick={item.handleAction || handleModalState}
							>
								{item.title || "Close"}
							</StyledBtn>
						);
					})}
				</DialogActions>
			)}
		</Root>
	);
};

export default CustomDialog;

const Root = styled(Dialog)(({ theme }) => ({
	"& .MuiDivider-root": {
		marginInline: theme.spacing(3),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(3),
		paddingTop: 0,
		"& .MuiButton-root": {
			minWidth: 120,
		},
		gap: theme.spacing(2),
	},
	"& .MuiTableContainer-root": {
		position: "relative",
		overflow: "auto",

		"& .MuiTableCell-root": {
			borderBottom: `1px solid ${palette.border}`,
			padding: theme.spacing(1),
			"& .MuiInputBase-input": {
				padding: theme.spacing(0.6),
			},
		},
	},
}));
