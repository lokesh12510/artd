import styled from "@emotion/styled";
import { Grid, InputAdornment, MenuItem } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import InputField from "../../../../components/InputField";
import RadioField from "../../../../components/RadioField";
import { AppIcon } from "../../../../constants/icons";
import { invoiceApi } from "../../../../mockup/InvoiceApi";
import {
	CustomBox,
	StyledBox,
	StyledBtn,
	StyledDataGrid,
	StyledInput,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
import AddInvoice from "./AddInvoice";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
	search: {},
};

const InvoiceMaintenance = () => {
	const [tableValues, setTableValues] = useState(initialTableValues);

	// Add modal toggle state
	const [openModal, setOpenModal] = useState(false);

	const handleModal = () => {
		setOpenModal((o) => !o);
	};

	// Adding mock data on load
	useEffect(() => {
		setTableValues((v) => ({
			...v,
			rows: invoiceApi.rows,
			rowCount: invoiceApi.rowCount,
			page: 1,
			pageSize: 4,
		}));
	}, []);
	return (
		<>
			<StyledBox>
				<StyledPageTitle>Invoice Maintenance</StyledPageTitle>

				<CustomBox my={2}>
					<Grid container spacing={2} justifyContent="space-between">
						<Grid item xs={12} md={7}>
							<StyledInput
								placeholder="Name Search..."
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<AppIcon icon="Search" sx={{ fontSize: "16px", color: palette.grey[400] }} />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} md={2.5}>
							<StyledBtn size="small" variant="contained" color="primary" fullWidth>
								Search
							</StyledBtn>
						</Grid>
						<Grid item xs={12} md={2.5}>
							<StyledBtn
								variant="contained"
								color="primary"
								fullWidth
								size="small"
								startIcon={<AppIcon icon="Add" />}
								onClick={handleModal}
							>
								Add Invoice
							</StyledBtn>
						</Grid>
						<Grid item xs={4}>
							<InputField select defaultValue="All" label="client Name">
								<MenuItem value="All">All</MenuItem>
							</InputField>
						</Grid>
						<Grid item xs={4}>
							<InputField select defaultValue="All" label="contact type">
								<MenuItem value="All">All</MenuItem>
							</InputField>
						</Grid>
						<Grid item xs={4}>
							<StyledRadioField
								label={"Status"}
								dir="row"
								radioList={[
									{ label: "Active", value: "Active" },
									{ label: "Inactive", value: "Inactive" },
								]}
							/>
						</Grid>
					</Grid>
				</CustomBox>
				<StyledDataGrid
					getRowId={(row) => row.id}
					loading={tableValues.loading}
					columns={columns}
					rows={tableValues.rows}
					rowCount={tableValues.rowCount}
					page={tableValues.page}
					pageSize={tableValues.pageSize}
					onPageChange={(page) => {
						setTableValues((prev) => ({ ...prev, page: page }));
					}}
					onPageSizeChange={(pageSize) => {
						setTableValues((prev) => ({ ...prev, pageSize: pageSize }));
					}}
				/>
			</StyledBox>
			{/* --------Add Modal----------- */}
			<AddInvoice open={openModal} handleClose={handleModal} />
		</>
	);
};

export default InvoiceMaintenance;

const columns = [
	{ field: "first_name", headerName: "First Name", minWidth: 120, flex: 1 },
	{ field: "last_name", headerName: "last Name", minWidth: 120, flex: 1 },
	{ field: "position", headerName: "Position Title", minWidth: 120, flex: 1 },
	{ field: "client_name", headerName: "Client Name", minWidth: 120, flex: 1 },
	{ field: "contact_type", headerName: "Contact Type", minWidth: 120, flex: 1 },
	{ field: "email", headerName: "Email", minWidth: 120 },
	{ field: "status", headerName: "Status", minWidth: 120 },
	{
		field: "action",
		headerName: "Action",
		minWidth: 140,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => [
			<GridActionsCellItem
				icon={<AppIcon icon="Eye" color="primary" />}
				label="eye"
			/>,
			<GridActionsCellItem
				icon={<AppIcon icon="Edit" color="primary" />}
				label="Edit"
			/>,
			<GridActionsCellItem
				icon={<AppIcon icon="Delete" color="primary" />}
				label="delete"
			/>,
		],
	},
];

const StyledRadioField = styled(RadioField)(({ theme }) => ({
	"& .MuiFormControlLabel-root": {
		marginRight: 20,
	},
	"& .MuiFormControlLabel-label": {
		fontWeight: 400,
	},
}));
