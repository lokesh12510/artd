import React from "react";
// Mui
import { Stack, Typography } from "@mui/material";
// Custom Styles
import palette from "../../../../theme/palette";
import styled from "@emotion/styled";

const Footer = () => {
	return (
		<StyledFooter>
			<Stack
				direction={"row"}
				alignItems="center"
				justifyContent={"space-between"}
				my={2}
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
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled("footer")(() => ({
	position: "absolute",
	bottom: 10,
	paddingInline: 20,
}));
