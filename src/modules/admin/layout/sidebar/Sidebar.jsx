import React, { useEffect, useState, memo } from "react";
import { styled } from "@mui/material/styles";
import palette from "../../../../theme/palette";
import AppImage from "../../../../constants/images";
import {
	Collapse,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";
import { AppIcon } from "../../../../constants/icons";
import { useTheme } from "@emotion/react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { urls } from "../../urls";
// Icons
import ToggleIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const SidebarListItem = ({ open, item, handleOpen, isOpen }) => {
	const location = useLocation();
	const isSubMenu = Boolean(item.subMenu?.length > 0);
	const isVisible = Boolean(isOpen === item.title);
	const isActive = Boolean(item.pathName === location.pathname);

	const navigate = useNavigate();

	return (
		<React.Fragment key={item.id}>
			<StyledListItem selected={isActive} disablePadding>
				<ListItemButton
					onClick={() =>
						open && isSubMenu ? handleOpen(item.title) : navigate(item.pathName)
					}
				>
					<ListItemIcon>
						<AppIcon
							icon={item.icon}
							color={isActive ? "light" : "primary"}
							fontSize={open ? "small" : "medium"}
						/>
					</ListItemIcon>
					<ListItemText secondary={item.title} />
					{open &&
						isSubMenu &&
						(isVisible ? (
							<ExpandLessIcon color={isActive ? "light" : "primary"} />
						) : (
							<ExpandMoreIcon color={isActive ? "light" : "primary"} />
						))}
				</ListItemButton>
			</StyledListItem>
			{open && isSubMenu && (
				<Collapse in={isVisible} timeout={"auto"}>
					<List component={"div"} disablePadding>
						{item?.subMenu?.map((item, i) => {
							return (
								<MenuItem key={item.id} component={Link} to={item.pathName}>
									{item.title}
								</MenuItem>
							);
						})}
					</List>
				</Collapse>
			)}
		</React.Fragment>
	);
};

const SidebarListWrapper = memo(({ open, handleToggle }) => {
	const [isOpen, setIsOpen] = useState("");

	const handleOpen = (title) => {
		// console.log("clicked");
		// handleToggle();
		setIsOpen((t) => (t === title ? "" : title));
	};

	return (
		<>
			<StyledListWrapper open={open}>
				{MenuList.map((item, i) => {
					return (
						<SidebarListItem
							key={item.id}
							open={open}
							isOpen={isOpen}
							item={item}
							handleOpen={handleOpen}
						/>
					);
				})}
			</StyledListWrapper>
		</>
	);
});

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
				keepMounted: false,
			}}
			onClose={handleToggle}
		>
			<LogoImg open={open}>
				<img className="image" src={AppImage.Logo} alt="" />
			</LogoImg>
			{/* Menu Toggle Btn  */}
			<MenuBtn
				onClick={handleToggle}
				// sx={{ zIndex: isMd ? 1 : 1201 }}
			>
				{open ? <CloseIcon color="primary" /> : <ToggleIcon color="primary" />}
			</MenuBtn>
			{/* Menu Toggle Btn  */}
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
			{/* Sidebar List component */}
			<SidebarListWrapper open={open} handleToggle={handleToggle} />
		</Root>
	);

	// Function to trigger when window width is changing
	function handleWindowWidthChange() {
		var windowWidth = window.innerWidth;
		var breakpointwidth = theme.breakpoints.values.md;
		var isSmallScreen = windowWidth < breakpointwidth;

		if (isSmallScreen && isPermanent) {
			setPermanent(false);
		} else if (!isSmallScreen && !isPermanent) {
			setPermanent(true);
		}
	}
};

export default Sidebar;

// Sidebar menu list
const MenuList = [
	{
		id: 1,
		title: "Home",
		icon: "Home",
		pathName: "/",
	},
	{
		id: 2,
		title: "Maintenance",
		icon: "Work",
		pathName: "/projects",
		subMenu: [
			{
				id: 1,
				title: "Add Project",
				pathName: urls.addProject,
			},
			{
				id: 2,
				title: "Staff Maintenance",
				pathName: urls.staffMaintenance,
			},
			{
				id: 3,
				title: "Project Management",
				pathName: "/",
			},
			{
				id: 4,
				title: "Add Extra Weeks",
				pathName: urls.addExtraWeeks,
			},
		],
	},
	{
		id: 3,
		title: "Calender",
		icon: "Calender",
		pathName: "/time-sheet",
		subMenu: [
			{
				id: 1,
				title: "Add Project",
				pathName: urls.addProject,
			},
			{
				id: 2,
				title: "Staff Maintenance",
				pathName: urls.staffMaintenance,
			},
			{
				id: 3,
				title: "Project Management",
				pathName: "/",
			},
		],
	},
	{
		id: 4,
		title: "Report",
		icon: "Report",
		pathName: "/report",
	},
	{
		id: 5,
		title: "Search",
		icon: "ReportSearch",
		pathName: "/report-search",
	},
	{
		id: 6,
		title: "Help desk",
		icon: "Help",
		pathName: "/help-desk",
	},
];

const MAX_WIDTH = "250px";
const MIN_WIDTH = "120px";

const Root = styled(Drawer)(({ theme, open }) => ({
	position: "fixed",
	width: open ? MAX_WIDTH : MIN_WIDTH,
	minHeight: "100vh",
	backgroundColor: palette.common.white,
	boxShadow: "0px 0px 4px rgba(148, 148, 148, 0.25)",
	"& .MuiPaper-root": {
		width: "inherit",
		transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
}));

const LogoImg = styled("div")(({ theme, open }) => ({
	padding: theme.spacing(2),
	marginInline: "auto",
	paddingBlock: !open && theme.spacing(0.5),
	transition: theme.transitions.create("all", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	"& .image": {
		width: "100%",
		height: "100%",
		maxWidth: "80px",
		transform: !open && "scale(.7) translateX(-25px)",
		transition: theme.transitions.create("all", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
}));

const ProfileContainer = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.secondary.main,
	paddingBlock: theme.spacing(1),
	width: "100%",
	paddingInline: theme.spacing(3),
	color: palette.common.white,
	// transition: theme.transitions.create("all", {
	// 	easing: theme.transitions.easing.sharp,
	// 	duration: theme.transitions.duration.leavingScreen,
	// }),
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
		minWidth: 38,
		justifyContent: open ? "flex-start" : "center",
	},
	"& .MuiListItemText-root": {
		display: open ? "block" : "none",
	},
	"& .MuiListItemButton-root": {
		paddingInline: theme.spacing(open ? 3.5 : 2),
	},
	"& .MuiList-root": {
		backgroundColor: palette.secondary.light,
		"& .MuiMenuItem-root": {
			paddingLeft: theme.spacing(8),
			paddingBlock: theme.spacing(1.3),
			color: palette.primary.main,
		},
	},
}));

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
	width: "100%",
	flex: 1,
	borderRadius: 0,
	"& .MuiListItemText-root": {
		"& .MuiTypography-root": {
			color: palette.primary.main,
			fontWeight: "500",
		},
	},

	"& .MuiListItemButton-root": {
		width: "100%",
		justifyContent: "center",
		minHeight: 65,
		paddingInline: theme.spacing(3),
		"&:hover": {
			backgroundColor: palette.primary.dark,
		},
	},
	"&.Mui-selected": {
		backgroundColor: palette.primary.main,
		"& .MuiListItemText-root": {
			"& .MuiTypography-root": {
				color: palette.common.white,
			},
		},
		"& .MuiListItemButton-root": {
			"&:hover": {
				backgroundColor: palette.primary.main,
			},
		},
	},
}));

const MenuBtn = styled(IconButton)(({ theme, breakpointwidth }) => ({
	position: "absolute",
	// left: breakpointwidth,
	right: 0,
	top: 10,
	// background: theme.palette.primary.main,
	borderRadius: 3,
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
	transition: theme.transitions.create("left", {
		easing: theme.transitions.easing.easeOut,
		duration: theme.transitions.duration.leavingScreen,
	}),
	"&:hover": {
		// background: theme.palette.primary.dark,
	},
}));
