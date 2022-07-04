import React from "react";
// Mui
import { Box, InputAdornment, Typography } from "@mui/material";
import styled from "@emotion/styled";
// Custom Styles
import { StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
// Custom Icon
import { AppIcon } from "../../../../constants/icons";
// Redux
import { useSelector } from "react-redux";
import { pageTitle } from "../../../../app/slices/pageSlice";

const Header = () => {
	const title = useSelector(pageTitle);

	return (
		<Root>
			{/* Page title */}

			<PageTitle variant="h5" color="primary" fontWeight={"600"}>
				{title}
			</PageTitle>

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
	marginLeft: 50,
	marginRight: 15,
	[theme.breakpoints.down("md")]: {
		marginLeft: 50,
		marginRight: 10,
	},
}));
