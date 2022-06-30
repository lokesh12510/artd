import React from "react";
// Mui
import styled from "@emotion/styled";
import {
	Card,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
// Components
import DateField from "../../../../components/DateField";
import InputField from "../../../../components/InputField";
// Custom Icons
import { AddIcon, DeleteIcon } from "../../../../constants/icons";

const InvoiceFormTable = ({ data }) => {
	// func to set status based color
	function findStatus(status) {
		switch (status) {
			case "paid":
				return "success";
			case "sent":
				return "warning";
			case "expected":
				return "light";
			default:
				return "success";
		}
	}
	return (
		<Table aria-label="simple table">
			<StyledTableHead>
				<TableRow>
					<TableCell align="center" sx={{ minWidth: 400 }}>
						Milestone
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 150 }}>
						When
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 150 }}>
						Value
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 120 }}>
						Status
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 75 }}></TableCell>
					<TableCell align="center" sx={{ minWidth: 75 }}></TableCell>
				</TableRow>
			</StyledTableHead>
			<TableBody>
				{data.map((item, i) => {
					return (
						<TableRow key={i}>
							<TableCell>
								<InputField value={item.mil} />
							</TableCell>
							<TableCell>
								<DateField value={item.when} />
							</TableCell>
							<TableCell>
								<InputField value={item.val} />
							</TableCell>
							<TableCell align="center">
								<StyledCard status={findStatus(item.status)}>
									<Typography textTransform={"capitalize"} variant="body2" fontWeight={"500"}>
										{item.status}
									</Typography>
								</StyledCard>
							</TableCell>
							<TableCell align="center">
								<IconButton>
									<DeleteIcon color="primary" fontSize="small" />
								</IconButton>
							</TableCell>
							<TableCell align="center">
								<IconButton>
									<AddIcon color="primary" fontSize="small" />
								</IconButton>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default InvoiceFormTable;

// Styles
const StyledTableHead = styled(TableHead)(({ theme }) => ({
	border: "none !important",
	"& .MuiTableCell-head": {
		backgroundColor: "transparent !important",
		color: `${theme.palette.label} !important`,
		textTransform: "Capitalize  !important",
		fontWeight: "500 !important",
		paddingBlock: "1px !important",
	},
}));

const StyledCard = styled(Card)(({ theme, status }) => ({
	height: 40,
	display: "grid",
	placeItems: "center",
	boxShadow: "none",
	backgroundColor: theme.palette[status].light,
	border: `1px solid ${theme.palette[status].main}33`,
	color: theme.palette[status].dark,
	borderRadius: 3,
}));
