import React from "react";
// Router
import { Navigate } from "react-router-dom";
import { urls } from "../../admin/urls";
// Redux
import { useSelector } from "react-redux";
import { selectAuth } from "../../../app/slices/authSlice";
// Components
import PageLoader from "../../../components/PageLoader";

const GuestRoute = ({ children, ...rest }) => {
	// redux store
	const { isLoggedIn, token, loading } = useSelector(selectAuth);

	// if loading
	if (loading) {
		return <PageLoader />;
	}

	// if logged in
	if (isLoggedIn && token !== null) {
		return <Navigate to={urls.Home} />;
	}

	return children;
};

export default GuestRoute;
