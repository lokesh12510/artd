import React, { useEffect, useState } from "react";
// Mui
import { Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
// Components
import AccordionWrapper from "../../../../../components/AccordionWrapper";
import DataTable from "../../../../../components/DataTable";
// Custom Icon
import { AppIcon } from "../../../../../constants/icons";
// Custom Styles
import palette from "../../../../../theme/palette";
// Mock Api
import { ActionApi } from "../../../../../mockup/HomeApi";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
	search: {},
};

const ActionList = () => {
	const [tableValues, setTableValues] = useState(initialTableValues);

	// Adding mock data on load
	useEffect(() => {
		setTableValues((v) => ({
			...v,
			rows: ActionApi.rows,
			rowCount: ActionApi.rowCount,
			page: 1,
			pageSize: 1,
		}));
	}, []);

	return (
		<AccordionWrapper title={"Task for the Selected Month"}>
			<>
				<DataTable
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
			</>
		</AccordionWrapper>
	);
};

export default ActionList;

// Columns
const columns = [
	{ field: "project", headerName: "Project", minWidth: 200 },
	{ field: "title", headerName: "Project title", minWidth: 400, flex: 1 },
	{
		field: "toDo",
		minWidth: 200,
		flex: 1,
		renderHeader: () => {
			return (
				<Typography color={"primary"} fontWeight="600">
					To Do (
					<Typography sx={{ color: palette.error.main }} component="span">
						Error
					</Typography>
					/{" "}
					<Typography sx={{ color: palette.warning.main }} component="span">
						Warning
					</Typography>
					)
				</Typography>
			);
		},
		renderCell: ({ value }) => {
			return (
				<Typography sx={{ color: palette[value.status].main }}>
					{value.title}
				</Typography>
			);
		},
	},
	{
		field: "action",
		headerName: "Action",
		minWidth: 140,
		align: "center",
		headerAlign: "center",
		sortable: false,
		renderCell: (params) => [
			<GridActionsCellItem
				icon={<AppIcon icon="Eye" color="primary" />}
				label="view"
			/>,
		],
	},
];
