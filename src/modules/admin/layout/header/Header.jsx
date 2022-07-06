import React from "react";
// Mui
import {
	Box,
	IconButton,
	InputAdornment,
	Stack,
	Typography,
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
// Hook
import useResponsive from "../../../../hooks/useResponsive";
// Icons
import ToggleIcon from "@mui/icons-material/Menu";

const Header = ({ handleToggle }) => {
	const title = useSelector(pageTitle);

	// Responsive check for above `md`
	const isMd = useResponsive("up", "md");

	return (
		<Root>
			{/* Page title */}
			<Stack direction={"row"} alignItems="center">
				{!isMd && (
					<IconButton
						onClick={handleToggle}
						// sx={{ zIndex: isMd ? 1 : 1201 }}
					>
						<ToggleIcon color="primary" />
					</IconButton>
				)}

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
const Root = styled(Box)(({ theme }) => ({
	backgroundColor: "transparent",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: theme.spacing(1.5),
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
