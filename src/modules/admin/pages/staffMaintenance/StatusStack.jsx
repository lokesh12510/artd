import { Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { StyledBox, StyledBtn, StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const StatusStack = () => {
	return (
		<StyledBox>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} lg={3}>
					<StatusCard direction={"column"} alignItems="center" justifyContent={"center"} spacing={1.5}>
						<Typography align="center" style={{ maxWidth: "75%" }} color={palette.common.black}>
							Number of weeks (Prior to the current week) displayed in combo boxes
						</Typography>
						<StyledInput align="center" style={{ maxWidth: 100 }} value="3015" />
						<Button variant="outlined" fullWidth>
							Accept New Week
						</Button>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<StatusCard direction={"column"} alignItems="center" justifyContent={"center"} spacing={1.5}>
						<Typography align="center" style={{ maxWidth: "75%" }} color={palette.common.black} mb={3}>
							Maximum number of weeks to display
						</Typography>
						<Typography align="center" color={palette.common.black}>
							3513
						</Typography>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<StatusCard direction={"column"} alignItems="center" justifyContent={"center"} spacing={1.5}>
						<Typography align="center" style={{ maxWidth: "75%" }} color={palette.common.black} mb={3}>
							Default number of week to display
						</Typography>
						<Typography align="center" color={palette.common.black}>
							3513
						</Typography>
					</StatusCard>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<StatusCard direction={"column"} alignItems="center" justifyContent={"center"} spacing={1.5}>
						<Typography align="center" style={{ maxWidth: "75%" }} color={palette.common.black} mb={3}>
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
	padding: theme.spacing(2),
	borderRadius: 5,
	border: `1px solid ${palette.border}`,
}));
