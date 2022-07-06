import Login from "../pages/Login";

export const authUrls = {
	login: "/login",
};

const authRoutes = [
	{
		path: authUrls.login,
		element: <Login />,
	},
];

export default authRoutes;
