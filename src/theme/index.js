import React, { useMemo } from "react";
// Mui
import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
// Addition override styles in JS
import palette from "./palette";
import typography from "./typography";
import shadows, { customShadows } from "./shadows";

const ThemeWrapper = ({ children }) => {
	// Option to override default Mui Theme

	const themeOptions = useMemo(
		() => ({
			palette,
			typography,
			shadows,
			customShadows,
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
						"*": {
							margin: 0,
							padding: 0,
							boxSizing: "border-box",
						},
						html: {
							width: "100%",
							height: "100%",
							WebkitOverflowScrolling: "touch",
						},
						body: {
							width: "100%",
							height: "100%",
							color: palette.common.black,
							backgroundColor: palette.background.default,
						},
						"#root": {
							width: "100%",
							height: "100%",
						},
						input: {
							"&[type=number]": {
								MozAppearance: "textfield",
								"&::-webkit-outer-spin-button": {
									margin: 0,
									WebkitAppearance: "none",
								},
								"&::-webkit-inner-spin-button": {
									margin: 0,
									WebkitAppearance: "none",
								},
							},
						},
						img: {
							display: "block",
							maxWidth: "100%",
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

				// MuiTableHead: {
				// 	styleOverrides: {
				// 		root: {
				// 			".MuiTableCell-head": {
				// 				backgroundColor: palette.secondary.main,
				// 			},
				// 			".MuiTableCell-root": {
				// 				...typography.subtitle2,
				// 			},
				// 		},
				// 	},
				// },
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
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeWrapper;
