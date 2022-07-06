import React, { useMemo } from "react";
// Mui
import {
	createTheme,
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
// Addition override styles in JS
import palette from "./palette";
import typography from "./typography";
import { useTheme } from "@emotion/react";

const ThemeWrapper = ({ children }) => {
	// Option to override default Mui Theme

	const muiTheme = useTheme();

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
				MuiCssBaseline: {
					styleOverrides: {
						body: {
							color: palette.common.black,
							backgroundColor: palette.background.default,
						},
					},
				},
				MuiOutlinedInput: {
					styleOverrides: {
						root: {
							...typography.body2,
							"&.Mui-disabled": {
								"& input": {
									color: palette.grey[500],
									WebkitTextFillColor: palette.grey[500],
								},
								backgroundColor: palette.grey[100],
								"& fieldset": {
									borderColor: palette.grey[100],
								},
							},
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
				MuiTableCell: {
					styleOverrides: {
						root: {
							color: "#000000CC",
						},
					},
				},
				MuiFormLabel: {
					styleOverrides: {
						root: {
							color: "#000000B2",
							fontWeight: 600,
						},
					},
				},

				MuiButton: {
					defaultProps: {
						disableElevation: true,
					},
					styleOverrides: {
						root: {
							fontWeight: "500",
						},
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
						outlinedPrimary: {
							color: palette.primary.light,
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
