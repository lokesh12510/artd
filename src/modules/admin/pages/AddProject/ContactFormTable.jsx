import styled from "@emotion/styled";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import React from "react";
import InputField from "../../../../components/InputField";

const ContactFormTable = ({ data }) => {
	return (
		<Table aria-label="simple table">
			<StyledTableHead>
				<TableRow>
					<TableCell align="center" sx={{ minWidth: 400 }}>
						Position Title
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 150 }}>
						Email
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 150 }}>
						Phone
					</TableCell>
					<TableCell align="center" sx={{ minWidth: 120 }}>
						Mobile
					</TableCell>
				</TableRow>
			</StyledTableHead>
			<TableBody>
				{data.map((item, i) => {
					return (
						<TableRow key={i}>
							<TableCell>
								<InputField value={item.position} disabled />
							</TableCell>
							<TableCell>
								<InputField value={item.email} disabled />
							</TableCell>
							<TableCell>
								<InputField value={item.phone} disabled />
							</TableCell>
							<TableCell>
								<InputField value={item.mobile} disabled />
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default ContactFormTable;

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
