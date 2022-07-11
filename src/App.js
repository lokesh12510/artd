import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeWrapper from "./theme";
import AppRoutes from "./routes";
import { CssBaseline } from "@mui/material";

const App = () => {
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
