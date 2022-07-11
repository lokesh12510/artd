import styled from "@emotion/styled";
import {
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";
import { StyledInput } from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";

const TaskInput = () => {
	return (
		<>
			<Stack spacing={1}>
				<Root
					justifyContent={"flex-start"}
					alignItems="start"
					direction={"column"}
					spacing={1}
				>
					<TableContainer>
						<Table size="small">
							<TableBody>
								<TableRow>
									<TableCell style={{ minWidth: 130 }}>
										<Typography align="center">
											Project Plan <br />
										</Typography>
										<Typography color={palette.grey[400]} mt={1} align="center">
											(Total)
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput value="" />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ minWidth: 130 }}>
										<Typography align="center">Task Ticked</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput value="" />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Root>
				<Root
					justifyContent={"flex-start"}
					alignItems="start"
					direction={"column"}
					spacing={1}
				>
					<TableContainer>
						<Table size="small">
							<TableBody>
								<TableRow>
									<TableCell style={{ minWidth: 130 }}>
										<Typography align="center">Project Budget</Typography>
										<Typography color={palette.grey[400]} mt={1} align="center">
											(Used)
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput value="1.03" />
									</TableCell>
									<TableCell>
										<StyledInput />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ minWidth: 130 }}>
										<Typography align="center">Consultancy</Typography>
										<Typography color={palette.grey[400]} mt={1} align="center">
											(Projected)
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ maxWidth: 130 }}>
										<Typography align="center">Consultancy</Typography>

										<Typography color={palette.grey[400]} mt={1} align="center">
											(projected at <br /> discounted rate)
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ minWidth: 130 }} align="center">
										<Typography align="center">Expenses</Typography>
										<Typography color={palette.grey[400]} mt={1} align="center">
											(Project)
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Root>
				<Root
					justifyContent={"flex-start"}
					alignItems="start"
					direction={"column"}
					spacing={1}
				>
					<TableContainer>
						<Table size="small">
							<TableBody>
								<TableRow>
									<TableCell style={{ minWidth: 130 }}>
										<Typography align="center">
											Consultancy <br />
											Time Budget
										</Typography>
									</TableCell>
									<TableCell>
										<StyledInput value="61" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="$ 2,546" />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
									<TableCell>
										<StyledInput value="61" style={{ visibility: "hidden" }} />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Root>
			</Stack>
		</>
	);
};

export default TaskInput;

const Root = styled(Stack)(({ theme }) => ({
	width: "100%",
	padding: theme.spacing(2),
	border: `1px solid ${palette.border}`,

	"& .MuiOutlinedInput-input": {
		backgroundColor: palette.border,
		height: 10,
		textAlign: "center",
	},
	"& .MuiTypography-root": {
		lineHeight: 1,
	},
	"& .MuiTableCell-root": {
		padding: "6px 3px",
		whiteSpace: "nowrap",
		borderBottom: "none",
	},
}));
