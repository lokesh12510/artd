import React from "react";
import AddProject from "../pages/AddProject/Index";
import Dashboard from "../pages/projectPlanning/Index";
import StaffMaintenance from "../pages/staffMaintenance";

export const urls = {
	Dashboard: "/",
	staffMaintenance: "/staffMaintenance",
	addProject: "/add-project",
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
	{
		path: urls.addProject,
		element: <AddProject />,
		auth: true,
		roles: [],
	},
];

export default adminRoutes;
