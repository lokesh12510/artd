import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "../modules/admin/layout";
import Error from "../modules/admin/pages/Error";
import adminRoutes from "../modules/admin/urls";
// Redux
import { useDispatch } from "react-redux";
import { resetPage } from "../app/slices/pageSlice";

const AppRoutes = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(resetPage());
	}, [dispatch, location.pathname]);

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
