import React from "react";
import Dashboard from "../pages/Dashboard";
import AddProject from "../pages/AddProject";

const urls = {
	Dashboard: "/",
	add: "/add",
};

// routes
const routes = [
	{
		path: urls.Dashboard,
		element: <Dashboard />,
		auth: true,
		roles: [],
	},
	{
		path: urls.add,
		element: <AddProject />,
		auth: true,
		roles: [],
	},
];

export default routes;
