import React, { useState } from "react";
// Mui
import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
// Router
import { Outlet } from "react-router-dom";
// Components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// Custom Styles
import palette from "../../../theme/palette";
// Icons
import ToggleIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// Hooks
import useResponsive from "../../../hooks/useResponsive";

const AdminLayout = () => {
	// Sidebar open state
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Responsive check for above `md`
	const isMd = useResponsive("up", "md");
	console.log(isMd);

	// Sidebar Open state handler
	const handleToggle = () => {
		setIsSidebarOpen((p) => !p);
	};

	return (
		<RootLayout>
			<Sidebar open={isSidebarOpen} handleToggle={handleToggle} />
			<BodyContainer open={isSidebarOpen}>
				<Header />
				<Outlet />
				<Footer />
				{/* Menu Toggle Btn  */}
				<MenuBtn
					onClick={handleToggle}
					breakpointwidth={isSidebarOpen ? drawerWidth : isMd ? drawerMinWidth : 0}
					sx={{ zIndex: isMd ? 1 : 1201 }}
				>
					{isSidebarOpen ? <CloseIcon color="light" /> : <ToggleIcon color="light" />}
				</MenuBtn>
				{/* Menu Toggle Btn  */}
			</BodyContainer>
		</RootLayout>
	);
};

export default AdminLayout;

// styles

const RootLayout = styled("main")({
	position: "relative",
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
});

const drawerWidth = 250;
const drawerMinWidth = 120;
const BodyContainer = styled("main", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	padding: theme.spacing(1.2),
	backgroundColor: palette.body.main,
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${open ? drawerWidth : 0}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: 0,
	}),
}));

const MenuBtn = styled(IconButton)(({ theme, breakpointwidth }) => ({
	position: "absolute",
	left: breakpointwidth,
	top: 10,
	background: theme.palette.primary.main,
	borderRadius: 3,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	transition: theme.transitions.create("left", {
		easing: theme.transitions.easing.easeOut,
		duration: theme.transitions.duration.leavingScreen,
	}),
	"&:hover": {
		background: theme.palette.primary.dark,
	},
}));
