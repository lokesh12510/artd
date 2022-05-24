import React from "react";
import { CloseBtn, StyledBtn, StyledDialog } from "../theme/GlobalStyles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
		<StyledDialog open={visible} onClose={handleModalState} maxWidth={maxWidth} fullWidth={fullWidth}>
			<CloseBtn onClick={handleModalState}>
				<CloseIcon />
			</CloseBtn>
			<DialogTitle variant="h5" color={"primary"} fontWeight="bold">
				{title}
			</DialogTitle>
			<Divider />
			<DialogContent>{children}</DialogContent>
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
		</StyledDialog>
	);
};

export default CustomDialog;
