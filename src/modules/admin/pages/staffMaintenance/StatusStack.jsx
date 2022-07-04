import { Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { StyledBox, StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const StatusStack = () => {
	return (
		<StyledBox>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<StatusCard
						direction={"column"}
						alignItems="center"
						justifyContent={"center"}
						spacing={1.5}
					>
						<Typography
							align="center"
							style={{ maxWidth: "75%" }}
							color={palette.common.black}
						>
							Number of weeks (Prior to the current week) displayed in combo boxes
						</Typography>
						<StyledInput align="center" style={{ maxWidth: 100 }} value="3015" />
						<CustomBtn variant="outlined">Accept New Week</CustomBtn>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<StatusCard
						direction={"column"}
						alignItems="center"
						justifyContent={"center"}
						spacing={1.5}
					>
						<Typography
							align="center"
							style={{ maxWidth: "75%" }}
							color={palette.common.black}
							mb={3}
						>
							Maximum number of weeks to display
						</Typography>
						<Typography align="center" color={palette.common.black}>
							3513
						</Typography>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<StatusCard
						direction={"column"}
						alignItems="center"
						justifyContent={"center"}
						spacing={1.5}
					>
						<Typography
							align="center"
							style={{ maxWidth: "75%" }}
							color={palette.common.black}
							mb={3}
						>
							Default number of week to display
						</Typography>
						<Typography align="center" color={palette.common.black}>
							3513
						</Typography>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3}>
					<StatusCard
						direction={"column"}
						alignItems="center"
						justifyContent={"center"}
						spacing={1.5}
					>
						<Typography
							align="center"
							style={{ maxWidth: "75%" }}
							color={palette.common.black}
							mb={3}
						>
							Current Week Number
						</Typography>
						<Typography align="center" color={palette.common.black}>
							3513
						</Typography>
					</StatusCard>
				</Grid>
			</Grid>
		</StyledBox>
	);
};

export default StatusStack;

const StatusCard = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.highlight,
	height: "100%",
	minHeight: 200,
	padding: theme.spacing(1),
	borderRadius: 5,
	border: `1px solid ${palette.border}`,
}));

const CustomBtn = styled(Button)(({ theme }) => ({
	whiteSpace: "nowrap",
	letterSpacing: 0,
}));
