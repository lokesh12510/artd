import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import palette from "../../../../theme/palette";
import AppImage from "../../../../constants/images";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import AppIcons from "../../../../constants/icons";
import { useTheme } from "@emotion/react";

const SidebarListItem = ({ active, title, icon }) => {
	console.log(title);
	return (
		<StyledListItem active={active} disablePadding>
			<ListItemButton>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText secondary={title} />
			</ListItemButton>
		</StyledListItem>
	);
};

const Sidebar = ({ open, handleToggle }) => {
	let theme = useTheme();
	// local
	const [isPermanent, setPermanent] = useState(true);

	useEffect(function () {
		window.addEventListener("resize", handleWindowWidthChange);
		handleWindowWidthChange();
		return function cleanup() {
			window.removeEventListener("resize", handleWindowWidthChange);
		};
	});

	return (
		<Root
			variant={isPermanent ? "permanent" : "temporary"}
			open={open}
			ModalProps={{
				keepMounted: true,
			}}
			onClose={handleToggle}
		>
			<LogoImg>
				<img className="image" src={AppImage.Logo} alt="" />
			</LogoImg>
			<ProfileContainer
				direction={open ? "row" : "column"}
				spacing={open ? 1 : 0}
				alignItems="center"
				justifyContent={open ? "flex-start" : "center"}
			>
				<img src={AppImage.Avatar} className="profileImg" alt="" />
				<Typography variant="body2" gutterBottom={false} lineHeight={1}>
					Welcome
				</Typography>
				<Typography variant="body2" fontWeight={"600"}>
					Alexis
				</Typography>
			</ProfileContainer>

			<StyledListWrapper open={open}>
				<SidebarListItem
					active={true}
					title={"Home"}
					icon={<MenuIcon src={AppIcons.HomeLight} alt="" />}
				/>
				<SidebarListItem
					active={false}
					title={"Project"}
					icon={<MenuIcon src={AppIcons.WorkDark} alt="" />}
				/>
				<SidebarListItem
					active={false}
					title={"Calender"}
					icon={<MenuIcon src={AppIcons.CalenderDark} alt="" />}
				/>
				<SidebarListItem
					active={false}
					title={"Report"}
					icon={<MenuIcon src={AppIcons.ReportDark} alt="" />}
				/>
				<SidebarListItem
					active={false}
					title={"Search"}
					icon={<MenuIcon src={AppIcons.ReportSearchDark} alt="" />}
				/>
				<SidebarListItem
					active={false}
					title={"Help desk"}
					icon={<MenuIcon src={AppIcons.HelpDark} alt="" />}
				/>
			</StyledListWrapper>
		</Root>
	);

	// ##################################################################
	function handleWindowWidthChange() {
		var windowWidth = window.innerWidth;
		var breakpointWidth = theme.breakpoints.values.md;
		var isSmallScreen = windowWidth < breakpointWidth;

		if (isSmallScreen && isPermanent) {
			setPermanent(false);
		} else if (!isSmallScreen && !isPermanent) {
			setPermanent(true);
		}
	}
};

export default Sidebar;

const MAX_WIDTH = "250px";
const MIN_WIDTH = "120px";

const Root = styled(Drawer)(({ theme, open }) => ({
	position: "relative",
	width: open ? MAX_WIDTH : MIN_WIDTH,
	minHeight: "100vh",
	backgroundColor: palette.common.white,
	boxShadow: "0px 0px 4px rgba(148, 148, 148, 0.25)",
	transition: theme.transitions.create("all", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	"& .MuiPaper-root": {
		width: open ? MAX_WIDTH : MIN_WIDTH,
		minWidth: MIN_WIDTH,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
}));

const LogoImg = styled("div")(({ theme }) => ({
	padding: theme.spacing(2),
	marginInline: "auto",
	"& .image": {
		width: "100%",
		height: "100%",
		maxWidth: "80px",
	},
}));

const ProfileContainer = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.secondary.main,
	paddingBlock: theme.spacing(1),
	width: "100%",
	paddingInline: theme.spacing(3),
	color: palette.common.white,
	transition: theme.transitions.create("all", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	"& .profileImg": {
		width: 45,
		height: 45,
		objectFit: "cover",
		borderRadius: "50%",
		marginBlock: theme.spacing(1),
	},
}));

const StyledListWrapper = styled(List)(({ theme, open }) => ({
	paddingBlock: 0,
	"& .MuiListItem-root": {
		flexDirection: open ? "row" : "column",
	},
	"& .MuiListItemIcon-root": {
		justifyContent: open ? "flex-start" : "center",
	},
	"& .MuiListItemText-root": {
		display: open ? "block" : "none",
	},
	"& .MuiListItemButton-root": {
		paddingInline: theme.spacing(open ? 3.5 : 2),
	},
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
	width: "100%",
	flex: 1,
	borderRadius: 0,
	// padding: theme.spacing(1),
	// [theme.breakpoints.down("md")]: {
	// 	paddingBlock: theme.spacing(0.5),
	// },
	backgroundColor: active ? palette.primary.main : palette.common.white,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"& .MuiListItemText-root": {
		"& .MuiTypography-root": {
			color: active ? palette.common.white : palette.primary.main,
			fontWeight: "500",
		},
	},
	"& .MuiListItemButton-root": {
		width: "100%",
		justifyContent: "center",
		minHeight: 65,
		paddingInline: theme.spacing(3),
	},
	"&:hover": {
		backgroundColor: active ? palette.primary.main : palette.common.white,
	},
}));

const MenuIcon = styled("img")(({ theme }) => ({
	width: 24,
	height: 24,
	objectFit: "contain",
}));
