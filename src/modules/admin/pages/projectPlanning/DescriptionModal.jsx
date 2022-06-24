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
import moment from "moment";

const DescriptionModal = ({ descModal, handleDescModal }) => {
	const rows = [
		{
			id: 1,
			phase: 2,
			task: 2,
			date: new Date(),
			desc: "Inception Meeting 1",
		},
		{
			id: 2,
			phase: 3,
			task: 2,
			date: new Date(),
			desc: "Inception Meeting 2",
		},
		{
			id: 3,
			phase: 4,
			task: 2,
			date: new Date(),
			desc: "Murry review guides survey toolkit on inception meeting 3",
		},
		{
			id: 4,
			phase: 2,
			task: 3,
			date: new Date(),
			desc: "Inception Meeting 4",
		},
	];

	return (
		<CustomDialog
			title="Description"
			visible={descModal}
			handleModalState={handleDescModal}
			maxWidth={"md"}
			fullWidth={true}
		>
			<StyledTableContainer>
				<Table aria-label="simple table" className="stripped">
					<TableHead>
						<TableRow>
							<TableCell>Phase</TableCell>
							<TableCell>Task</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((item, index) => {
							return (
								<TableRow
									key={item.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell>
										<Typography color={palette.grey[600]}>{item.phase}</Typography>
									</TableCell>
									<TableCell>
										<Typography color={palette.grey[600]}>{item.task}</Typography>
									</TableCell>

									<TableCell>
										<Typography color={palette.grey[600]}>
											{moment(item.date).format("Do MMM YYYY")}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography color={palette.grey[600]}>{item.desc}</Typography>
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

export default DescriptionModal;
