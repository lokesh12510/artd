import React from "react";
import AddProject from "../pages/AddProject/Index";
import ClientMaintenance from "../pages/clientMaintenance/Index";
import AddExtraWeeks from "../pages/ExtraWeeks/Index";
import Home from "../pages/home/Index";
import InvoiceMaintenance from "../pages/invoiceMaintenace/Index";
import ProjectPlanning from "../pages/projectPlanning/Index";
import StaffMaintenance from "../pages/staffMaintenance";

/* 
	All admin routes need to be declared in this page 
	Exported from as `adminRoutes` to avoid unnecessary name duplication and reusability across components

	TODO: After completing development all pages must be imported as React.lazy() to reduce bundle size which will minimize the initial loading time
*/

export const urls = {
	Home: "/",
	projectPlanning: "/project-planning",
	staffMaintenance: "/staffMaintenance",
	addProject: "/add-project",
	addExtraWeeks: "/add-weeks",
	clients: "/clients",
	invoice: "/invoice",
};

// routes
const adminRoutes = [
	{
		path: urls.Home,
		element: <Home />,
		auth: true,
		module_id: 2,
	},
	{
		path: urls.projectPlanning,
		element: <ProjectPlanning />,
		auth: true,
		module_id: 2,
	},
	{
		path: urls.staffMaintenance,
		element: <StaffMaintenance />,
		auth: true,
		module_id: 21,
	},
	{
		path: urls.addProject,
		element: <AddProject />,
		auth: true,
		module_id: 12,
	},
	{
		path: urls.addExtraWeeks,
		element: <AddExtraWeeks />,
		auth: true,
		module_id: 15,
	},
	{
		path: urls.clients,
		element: <ClientMaintenance />,
		auth: true,
		module_id: 11,
	},
	{
		path: urls.invoice,
		element: <InvoiceMaintenance />,
		auth: true,
		module_id: 13,
	},
];

export default adminRoutes;
