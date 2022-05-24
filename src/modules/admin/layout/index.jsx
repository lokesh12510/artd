import React from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
// components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import palette from "../../../theme/palette";

const AdminLayout = () => {
	return (
		<RootLayout>
			<Sidebar />
			<BodyContainer>
				<Header />
				<Outlet />
			</BodyContainer>
		</RootLayout>
	);
};

export default AdminLayout;

// styles

const RootLayout = styled("div")({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
});

const BodyContainer = styled("div")(({ theme }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	padding: theme.spacing(1.2),
	backgroundColor: palette.body.main,
}));
