import React from "react";
// Mui
import { Stack, Typography } from "@mui/material";
// Custom Styles
import palette from "../../../../theme/palette";

const Footer = () => {
	return (
		<Stack
			direction={"row"}
			alignItems="center"
			justifyContent={"space-between"}
			my={3}
		>
			<Typography>
				Copyrights &copy; 2022{" "}
				<Typography component={"span"} color={palette.copyright}>
					ARTD
				</Typography>{" "}
				All rights reserved
			</Typography>
			<Typography>
				Designed and Developed by{" "}
				<Typography component={"span"} color={palette.copyright}>
					INTERGY
				</Typography>
			</Typography>
		</Stack>
	);
};

export default Footer;
