import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeWrapper from "./theme";
import AppRoutes from "./routes";
import "./App.css";

const App = () => {
	return (
		<>
			{/* Router Dom wrapper */}
			<BrowserRouter>
				{/* Mui Theme wrapper */}
				<ThemeWrapper>
					{/* App Navigation routes */}
					<AppRoutes />
				</ThemeWrapper>
			</BrowserRouter>
		</>
	);
};

export default App;
