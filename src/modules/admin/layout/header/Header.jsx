import { styled } from "@mui/material/styles";
import React from "react";
import { Box, Divider, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import palette from "../../../../theme/palette";
import AppIcons, { HomeIcon } from "../../../../constants/icons";
import { StyledInput } from "../../../../theme/GlobalStyles";

const Header = () => {
	return (
		<Root>
			{/* Page title */}
			<PageTitle variant="h5" color="primary" fontWeight={"bold"}>
				Project Planning
			</PageTitle>
			{/* SearchBar */}
			<SearchBar
				placeholder="search"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<img src={AppIcons.Search} alt="search" />
						</InputAdornment>
					),
				}}
			/>

			{/* Breadcrumb */}
			<BreadcrumbWrapper direction={"row"} alignItems="center" justifyContent={"space-evenly"}>
				<BreadcrumbItem>
					<HomeIcon bg={palette.grey[400]} />
				</BreadcrumbItem>
				<BreadcrumbDivider orientation="vertical" variant="middle" flexItem />
				<BreadcrumbItem>
					<Typography className="title" variant="body1" fontWeight={"600"}>
						Add Project
					</Typography>
				</BreadcrumbItem>
				<BreadcrumbDivider orientation="vertical" variant="middle" flexItem />
				<BreadcrumbItem active>
					<Typography active className="title" variant="body1" fontWeight={"600"}>
						Project Planning
					</Typography>
				</BreadcrumbItem>
			</BreadcrumbWrapper>
		</Root>
	);
};

export default Header;

const Root = styled(Box)(({ theme }) => ({
	minHeight: "60px",
	backgroundColor: "transparent",
	paddingBlock: 10,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: theme.spacing(1),
}));

const SearchBar = styled(StyledInput)(({ theme }) => ({
	maxWidth: "600px",
}));

const PageTitle = styled(Typography)(({ theme }) => ({
	marginLeft: 40,
}));

const BreadcrumbWrapper = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(1.2),
}));

const BreadcrumbItem = styled(Typography)(({ theme, active }) => ({
	paddingInline: theme.spacing(3),
	paddingRight: active ? 0 : theme.spacing(3),
	"&:first-child": {
		paddingInline: theme.spacing(4),
	},
	"& .title": {
		color: active ? palette.primary.main : palette.grey[400],
		gap: theme.spacing(2),
		letterSpacing: 0.4,
	},
}));
const BreadcrumbDivider = styled(Divider)(({ theme, active }) => ({
	height: 20,
	backgroundColor: palette.border,
	borderWidth: 1,
	margin: 0,
}));
