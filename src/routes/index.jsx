import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../modules/admin/layout";
import Error from "../modules/admin/pages/Error";
import adminRoutes from "../modules/admin/urls";

const AppRoutes = () => {
	return (
		<Routes>
			{/* Admin module route */}
			<Route element={<AdminLayout />}>
				{adminRoutes?.map((route, i) => {
					return <Route key={i} path={route.path} element={route.element} />;
				})}
			</Route>
			{/* Admin module route */}

			{/* 404 route */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AppRoutes;
