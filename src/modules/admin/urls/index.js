import React from "react";
import Dashboard from "../pages/projectPlanning/Index";
import StaffMaintenance from "../pages/staffMaintenance";

const urls = {
	Dashboard: "/",
	staffMaintenance: "/staffMaintenance",
};

// routes
const adminRoutes = [
	{
		path: urls.Dashboard,
		element: <Dashboard />,
		auth: true,
		roles: [],
	},
	{
		path: urls.staffMaintenance,
		element: <StaffMaintenance />,
		auth: true,
		roles: [],
	},
];

export default adminRoutes;
