import React, { useLayoutEffect } from "react";
// Router
import { Route, Routes, useLocation } from "react-router-dom";
import adminRoutes from "../modules/admin/urls";
// Components
import AdminLayout from "../modules/admin/layout";
import authRoutes from "../modules/auth/urls/Index";
import SecureRoute from "../modules/auth/helpers/SecureRoute";
import GuestRoute from "../modules/auth/helpers/GuestRoute";
import Error from "../modules/auth/pages/Error";
// Redux
import { useDispatch } from "react-redux";
import { resetPage } from "../app/slices/pageSlice";

const AppRoutes = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	// * Effect to reset page config like `page title` when navigating to another page
	useLayoutEffect(() => {
		dispatch(resetPage());
	}, [dispatch, location.pathname]);

	return (
		<Routes>
			{/* Auth module route */}
			{authRoutes.map((auth) => {
				return (
					<Route
						key={auth.path}
						path={auth.path}
						element={<GuestRoute>{auth.element}</GuestRoute>}
					/>
				);
			})}

			{/* Admin module route */}
			{adminRoutes.map((admin) => (
				<Route
					key={admin.path}
					path={admin.path}
					element={
						admin.auth ? (
							<SecureRoute module_id={admin.module_id}>
								<AdminLayout>{admin.element}</AdminLayout>
							</SecureRoute>
						) : (
							<GuestRoute>{admin.element}</GuestRoute>
						)
					}
				/>
			))}

			{/* 404 route */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AppRoutes;
