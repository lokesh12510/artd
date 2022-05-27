import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";

import palette from "./palette";
import typography from "./typography";

const ThemeWrapper = ({ children }) => {
	// Option to override default Mui Theme
	const themeOptions = useMemo(
		() => ({
			palette,
			typography,
			breakpoints: {
				values: {
					xs: 0,
					sm: 600,
					md: 1000,
					lg: 1200,
					xl: 1536,
				},
			},
			components: {
				MuiOutlinedInput: {
					styleOverrides: {
						root: {
							...typography.body2,
						},
					},
				},
				MuiTableHead: {
					styleOverrides: {
						root: {
							".MuiTableCell-head": {
								backgroundColor: palette.secondary.main,
							},
							".MuiTableCell-root": {
								...typography.subtitle2,
							},
						},
					},
				},

				MuiButton: {
					defaultProps: {
						disableElevation: true,
						disableRippled: true,
					},
					styleOverrides: {
						sizeSmall: {
							padding: "6px 16px",
						},
						sizeMedium: {
							padding: "8px 20px",
						},
						sizeLarge: {
							padding: "11px 24px",
						},
						textSizeSmall: {
							padding: "7px 12px",
						},
						textSizeMedium: {
							padding: "9px 16px",
						},
						textSizeLarge: {
							padding: "12px 16px",
						},
					},
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
