import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";

import palette from "./palette";
import typography from "./typography";

const ThemeWrapper = ({ children }) => {
	// Option to override default Mui Theme
	const themeOptions = useMemo(
		() => ({
			palette,
			// typography,
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
