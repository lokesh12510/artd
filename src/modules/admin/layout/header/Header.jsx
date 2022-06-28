import { styled } from "@mui/material/styles";
import React from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import AppIcons from "../../../../constants/icons";
import { StyledInput } from "../../../../theme/GlobalStyles";

const Header = () => {
	return (
		<Root>
			{/* Page title */}
			<PageTitle variant="h5" color="primary" fontWeight={"600"}>
				Project Planning
			</PageTitle>
			{/* SearchBar */}
			<SearchBar
				placeholder="Search"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<img src={AppIcons.Search} alt="Search" />
						</InputAdornment>
					),
				}}
			/>
		</Root>
	);
};

export default Header;

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
		marginLeft: 30,
		marginRight: 10,
	},
}));
