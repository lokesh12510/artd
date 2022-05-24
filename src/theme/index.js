import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";

import palette from "./palette";

const ThemeWrapper = ({ children }) => {
	// Option to override default Mui Theme
	const themeOptions = useMemo(
		() => ({
			palette,
			breakpoints: {
				values: {
					xs: 0,
					sm: 600,
					md: 1000,
					lg: 1200,
					xl: 1536,
				},
			},
		}),
		[]
	);

	// Mui theme creator
	const theme = createTheme(themeOptions);

	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeWrapper;
