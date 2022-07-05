import React from "react";
import AddProject from "../pages/AddProject/Index";
import Dashboard from "../pages/projectPlanning/Index";
import StaffMaintenance from "../pages/staffMaintenance";

/* 
	All admin routes need to be declared in this page 
	Exported from as `adminRoutes` to avoid unnecessary name duplication and reusability across components

	TODO: After completing development all pages must be imported as React.lazy() to reduce bundle size which will minimize the initial loading time
*/

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
