import React from "react";
// Router
import { Navigate, useLocation } from "react-router-dom";
import { authUrls } from "../urls/Index";

// Redux
import { useSelector } from "react-redux";
import { selectAuth } from "../../../app/slices/authSlice";
// Components
import PageLoader from "../../../components/PageLoader";
import Error from "../pages/Error";

const SecureRoute = ({ children, module_id }) => {
	const location = useLocation();

	// redux store
	const { isLoggedIn, token, loading, user } = useSelector(selectAuth);

	// if loading
	if (loading) {
		return <PageLoader />;
	}

	// if not logged in
	if (!isLoggedIn || token === null) {
		return <Navigate to={authUrls.login} state={{ from: location }} />;
	}

	// to check module access
	const user_modules = (user && user.Modules) || null;
	const checkAccess =
		module_id && user_modules && user_modules.some((item) => item.ID === module_id);

	if (!checkAccess) {
		// access denied
		return (
			<Error
				title="401 - Unauthorized"
				desc="You aren’t authenticated to access this page."
			/>
		);
	}

	return children;
};

export default SecureRoute;
