import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import palette from "../../../../theme/palette";
import AppImage from "../../../../constants/images";
import { Button, Typography } from "@mui/material";
import AppIcons from "../../../../constants/icons";

const Sidebar = () => {
	return (
		<Root>
			<LogoImg>
				<img className="image" src={AppImage.Logo} alt="" />
			</LogoImg>
			<ProfileContainer>
				<img src={AppImage.Avatar} className="profileImg" alt="" />
				<Typography variant="body1" gutterBottom={false} lineHeight={1}>
					Welcome
				</Typography>
				<Typography variant="body1" fontWeight={"bold"}>
					Alexis
				</Typography>
			</ProfileContainer>

			<MenuWrapper>
				<MenuItem active>
					<MenuIcon src={AppIcons.HomeLight} alt="" />
				</MenuItem>
				<MenuItem>
					<MenuIcon src={AppIcons.WorkDark} alt="" />
				</MenuItem>
				<MenuItem>
					<MenuIcon src={AppIcons.CalenderDark} alt="" />
				</MenuItem>
				<MenuItem>
					<MenuIcon src={AppIcons.ReportDark} alt="" />
				</MenuItem>
				<MenuItem>
					<MenuIcon src={AppIcons.ReportSearchDark} alt="" />
				</MenuItem>
				<MenuItem>
					<MenuIcon src={AppIcons.HelpDark} alt="" />
				</MenuItem>
			</MenuWrapper>
		</Root>
	);
};

export default Sidebar;

const MIN_WIDTH = "120px";

const Root = styled(Box)(({ theme }) => ({
	width: MIN_WIDTH,
	minHeight: "100vh",
	backgroundColor: palette.common.white,
	paddingBlock: 10,
	boxShadow: "0px 0px 4px rgba(148, 148, 148, 0.25)",
}));

const LogoImg = styled("div")(({ theme }) => ({
	padding: theme.spacing(2),
	"& .image": {
		width: "100%",
		height: "100%",
	},
}));

const ProfileContainer = styled("div")(({ theme }) => ({
	backgroundColor: palette.secondary.main,
	paddingBlock: theme.spacing(1),
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	color: palette.common.white,
	"& .profileImg": {
		width: 45,
		height: 45,
		objectFit: "cover",
		borderRadius: "50%",
		marginBlock: theme.spacing(1),
	},
}));

const MenuWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	width: "100%",
}));

const MenuItem = styled(Button)(({ theme, active }) => ({
	width: "100%",
	flex: 1,
	borderRadius: 0,
	padding: theme.spacing(1),
	backgroundColor: active ? palette.primary.main : palette.common.white,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: 65,
	"&:hover": {
		backgroundColor: active ? palette.primary.main : palette.common.white,
	},
}));

const MenuIcon = styled("img")(({ theme }) => ({
	width: 24,
	height: 24,
	objectFit: "contain",
}));

// const  = styled("div")(({ theme }) => ({}));
