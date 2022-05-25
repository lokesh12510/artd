import React from "react";
import Dashboard from "../pages/projectPlanning/Dashboard";

const urls = {
	Dashboard: "/",
	add: "/add",
};

// routes
const adminRoutes = [
	{
		path: urls.Dashboard,
		element: <Dashboard />,
		auth: true,
		roles: [],
	},
];

export default adminRoutes;
