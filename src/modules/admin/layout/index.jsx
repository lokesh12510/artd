import React, { useState } from "react";
// Mui
import styled from "@emotion/styled";
// Router
// import { Outlet } from "react-router-dom";
// Components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// Custom Styles
import palette from "../../../theme/palette";
// Hooks
import useResponsive from "../../../hooks/useResponsive";

const AdminLayout = ({ children }) => {
	// Sidebar open state
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Responsive check for above `md`
	const isMd = useResponsive("up", "md");

	// Sidebar Open state handler
	const handleToggle = () => {
		setIsSidebarOpen((p) => !p);
	};

	return (
		<RootLayout>
			<Sidebar open={isSidebarOpen} handleToggle={handleToggle} />
			<BodyContainer open={isSidebarOpen} isMd={isMd}>
				<Header handleToggle={handleToggle} />
				{children}
				<Footer />
			</BodyContainer>
		</RootLayout>
	);
};

export default AdminLayout;

// styles

const RootLayout = styled("main")({
	position: "relative",
	// display: "flex",
	minHeight: "100%",
});

const drawerWidth = 250;
const drawerMinWidth = 120;
const BodyContainer = styled("main", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, isMd }) => ({
	position: "relative",
	flexGrow: 1,
	minHeight: "100%",
	padding: theme.spacing(1.2),
	backgroundColor: palette.body.main,
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(isMd && {
		marginLeft: `${open ? drawerWidth : drawerMinWidth}px`,
	}),
	...(!isMd && {
		marginLeft: 0,
	}),

	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
	}),
	paddingBottom: 50,
}));
