import React, { useEffect, useState } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useCallback } from "react";
import { AppIcon } from "../../../../constants/icons";
import {
	StyledBox,
	StyledDataGrid,
	StyledPageTitle,
} from "../../../../theme/GlobalStyles";
import { clientApi } from "../../api/clientApi";
import AddClient from "./AddClient";
// Redux
import { useDispatch } from "react-redux";

// Components
import FilterBox from "./FilterBox";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
};

const initialFilter = {
	orgType: "All",
	govType: "All",
	state: "All",
	country: "All",
	status: "",
	searchText: "",
};

const ClientMaintenance = () => {
	const dispatch = useDispatch();

	const [tableValues, setTableValues] = useState(initialTableValues);
	const [filter, setFilter] = useState(initialFilter);

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setFilter((f) => ({ ...f, [name]: value }));
	};

	// Add modal toggle state
	const [openModal, setOpenModal] = useState(false);

	const handleModal = () => {
		setOpenModal((o) => !o);
	};

	// Client List api call
	const getTableList = useCallback(() => {
		const formData = {
			page: tableValues.page + 1,
			per_page: tableValues.pageSize,
			ClientName: filter.searchText,
			Active: filter.status,
		};

		setTableValues((prev) => ({ ...prev, loading: true }));

		clientApi
			.Clients(formData)
			.then((response) => {
				setTableValues((prev) => ({
					...prev,
					loading: false,
					rows: response.data.rows,
					rowCount: response.data.count,
				}));
			})
			.catch((e) => {
				console.log(e);
			});
	}, [tableValues.page, tableValues.pageSize, filter.status, filter.searchText]);

	useEffect(() => {
		getTableList();
	}, [
		dispatch,
		getTableList,
		tableValues.page,
		tableValues.pageSize,
		filter.status,
		filter.searchText,
	]);

	return (
		<>
			<StyledBox>
				<StyledPageTitle>Client Maintenance</StyledPageTitle>
				<FilterBox
					handleModal={handleModal}
					filter={filter}
					handleFilterChange={handleFilterChange}
				/>
				<StyledDataGrid
					getRowId={(row) => row.ClientCode}
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
			{/* Add modal */}
			<AddClient open={openModal} handleClose={handleModal} />
		</>
	);
};

export default ClientMaintenance;

const columns = [
	{ field: "ClientName", headerName: "Client Name", minWidth: 200, flex: 1 },
	{ field: "ClientCode", headerName: "Client Code", minWidth: 120 },
	{ field: "Country", headerName: "Country", minWidth: 120 },
	// { field: "gov_type", headerName: "Government Type", minWidth: 120, flex: 1 },
	{ field: "State", headerName: "State", minWidth: 120 },
	// { field: "status", headerName: "Status", minWidth: 120 },
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
