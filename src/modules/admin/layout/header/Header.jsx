import React from "react";
// Mui
import {
	AppBar,
	IconButton,
	InputAdornment,
	Stack,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import styled from "@emotion/styled";
// Custom Styles
import { StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
// Custom Icon
import { AppIcon } from "../../../../constants/icons";
// Redux
import { useSelector } from "react-redux";
import { pageTitle } from "../../../../app/slices/pageSlice";
// Icons
import CloseIcon from "@mui/icons-material/Close";
import ToggleIcon from "@mui/icons-material/Menu";

const Header = ({ handleToggle, open }) => {
	const title = useSelector(pageTitle);

	// MUi Scroll event hook
	const trigger = useScrollTrigger({
		threshold: 10,
		disableHysteresis: true,
	});

	return (
		<Root
			position="sticky"
			color={trigger ? "primary" : "secondary"}
			elevation={trigger ? 1 : 0}
			sx={{ backgroundColor: trigger ? "#fff" : "transparent" }}
		>
			{/* Page title */}
			<Stack direction={"row"} alignItems="center">
				<MenuBtn onClick={handleToggle}>
					{open ? <CloseIcon color="light" /> : <ToggleIcon color="light" />}
				</MenuBtn>

				<PageTitle variant="h5" color="primary" fontWeight={"600"}>
					{title}
				</PageTitle>
			</Stack>

			{/* SearchBar */}
			<SearchBar
				placeholder="Search"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<AppIcon icon="Search" sx={{ fontSize: "16px", color: palette.grey[400] }} />
						</InputAdornment>
					),
				}}
			/>
		</Root>
	);
};

export default Header;

// Styles
const Root = styled(AppBar)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: theme.spacing(1.3),
	position: "sticky",
	top: 0,
	zIndex: 1200,
	flexDirection: "row",
}));

const SearchBar = styled(StyledInput)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		maxWidth: "300px",
	},
	[theme.breakpoints.up("md")]: {
		maxWidth: "600px",
	},
}));

const PageTitle = styled(Typography)(({ theme }) => ({
	marginLeft: 20,
	marginRight: 15,
	[theme.breakpoints.down("md")]: {
		marginLeft: 20,
		marginRight: 10,
	},
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({
	background: theme.palette.primary.main,
	// left: -10,
	borderRadius: 3,
	// borderTopLeftRadius: 0,
	// borderBottomLeftRadius: 0,
	"&:hover": {
		background: theme.palette.primary.dark,
	},
}));
