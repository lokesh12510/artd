import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeWrapper from "./theme";
import AppRoutes from "./routes";
import { CssBaseline } from "@mui/material";
// Redux
import { useDispatch } from "react-redux";
import { authOnLoadAsync } from "./app/slices/authSlice";
const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(process.env.REACT_APP_PROJECT_NAME);
		// save token to redux store
		dispatch(authOnLoadAsync());
	}, [dispatch]);

	return (
		<>
			{/* Router Dom wrapper */}
			<BrowserRouter>
				{/* Mui Theme wrapper */}
				<ThemeWrapper>
					<CssBaseline />
					{/* App Navigation routes */}
					<AppRoutes />
				</ThemeWrapper>
			</BrowserRouter>
		</>
	);
};

export default App;
