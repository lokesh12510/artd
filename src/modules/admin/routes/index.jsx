import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout";
import routes from "./urls";

const AdminRoutes = () => {
	return (
		<Routes>
			<Route element={<AdminLayout />}>
				{routes?.map((route, i) => {
					return <Route key={i} path={route.path} element={route.element} />;
				})}
			</Route>
		</Routes>
	);
};

export default AdminRoutes;
