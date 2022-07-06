import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Error = ({
	title = "404",
	desc = "Something went wrong! Please Try to refresh!",
}) => {
	return (
		<Root>
			<Typography color={"primary"} variant="h1" fontWeight={"bold"} mb={2}>
				! {title}
			</Typography>
			<Typography color={"primary"} variant="p" mb={2}>
				{desc}
			</Typography>
			<Button
				component={Link}
				to={"/"}
				color="primary"
				variant="outlined"
				size="large"
			>
				Go To Home
			</Button>
		</Root>
	);
};

export default Error;

const Root = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	height: "100vh",
	"& .MuiTypography-root": {
		textTransform: "uppercase",
	},
}));
