import React from "react";
import CustomDialog from "../../../../components/CustomDialog";
import {
	StyledInput,
	StyledTableContainer,
} from "../../../../theme/GlobalStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import palette from "../../../../theme/palette";

const SummaryModal = ({ summaryModal, handleSummaryModal }) => {
	const rows = [
		{
			id: 1,
			month: "Jan 2022",
			staff: "AH",
			plannedHours: 3.5,
			plannedDays: 0.47,
			actualHours: 3.5,
			actualDays: 0.47,
		},
		{
			id: 2,
			month: "Jan 2022",
			staff: "AH",
			plannedHours: 3.5,
			plannedDays: 0.47,
			actualHours: 3.5,
			actualDays: 0.47,
		},
		{
			id: 3,
			month: "Feb 2022",
			staff: "SMB",
			plannedHours: 3.5,
			plannedDays: 0.47,
			actualHours: 3.5,
			actualDays: 0.47,
		},
		{
			id: 4,
			month: "Jan 2022",
			staff: "SMB",
			plannedHours: 1,
			plannedDays: 0.47,
			actualHours: 1,
			actualDays: 0.47,
		},
	];

	return (
		<CustomDialog
			title="Project Time Summary"
			visible={summaryModal}
			handleModalState={handleSummaryModal}
			maxWidth={"md"}
			fullWidth={true}
		>
			<StyledTableContainer>
				<Table aria-label="simple table" className="stripped">
					<TableHead>
						<TableRow>
							<TableCell align="center">Month</TableCell>
							<TableCell align="center">Staff</TableCell>
							<TableCell align="center">Planned Hours</TableCell>
							<TableCell align="center">Planned Days</TableCell>
							<TableCell align="center">Actual Hours</TableCell>
							<TableCell align="center">Actual Days</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((item, index) => {
							return (
								<TableRow
									key={item.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.month}</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.staff}</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.plannedHours}</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.plannedDays}</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.actualHours}</Typography>
									</TableCell>
									<TableCell align="center">
										<Typography color={palette.grey[600]}>{item.actualDays}</Typography>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</StyledTableContainer>
		</CustomDialog>
	);
};

export default SummaryModal;
