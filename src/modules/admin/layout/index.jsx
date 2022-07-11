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
			<BodyContainer open={isSidebarOpen} ismd={isMd.toString()}>
				<Header handleToggle={handleToggle} open={isSidebarOpen} />
				<Wrapper>{children}</Wrapper>
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
	height: "100%",
	minHeight: "100vh",
});

const drawerWidth = 250;
const drawerMinWidth = 120;

const Wrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(1.2),
	paddingTop: 0,
}));

const BodyContainer = styled("main", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, ismd }) => ({
	position: "relative",
	flexGrow: 1,
	minHeight: "100%",
	padding: 0,
	backgroundColor: palette.body.main,
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(ismd === "true" && {
		marginLeft: `${open ? drawerWidth : drawerMinWidth}px`,
	}),
	...(!ismd === "true" && {
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
