import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
// components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import palette from "../../../theme/palette";
import Footer from "./footer/Footer";
import { IconButton } from "@mui/material";

import ToggleIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useResponsive from "../../../hooks/useResponsive";
const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const isMd = useResponsive("up", "md");
	console.log(isMd);

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
				{/* ##############################################  */}
				<MenuBtn
					onClick={handleToggle}
					breakpointwidth={isSidebarOpen ? drawerWidth : isMd ? drawerMinWidth : 0}
					sx={{ zIndex: isMd ? 1 : 1201 }}
				>
					{isSidebarOpen ? <CloseIcon color="light" /> : <ToggleIcon color="light" />}
				</MenuBtn>
				{/* ##############################################  */}
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
