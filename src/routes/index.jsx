import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../modules/admin/pages/Error";
import AdminRoutes from "../modules/admin/routes";

const AppRoutes = () => {
	return (
		<Routes>
			{/* Admin module route */}
			<Route path="/*" element={<AdminRoutes />} />
			{/* Admin module route */}

			{/* 404 route */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AppRoutes;
