import React from "react";
import Dashboard from "../pages/Dashboard";

const urls = {
	Dashboard: "/",
};

// routes
const routes = [
	{
		path: urls.Dashboard,
		element: <Dashboard />,
		auth: true,
		roles: [],
	},
];

export default routes;
