import styled from "@emotion/styled";
import { Box, MenuItem, Stack, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccordionWrapper from "../../../../../components/AccordionWrapper";
import DataTable from "../../../../../components/DataTable";
import InputField from "../../../../../components/InputField";
import { ActionApi } from "../../../../../mockup/HomeApi";
import { CustomToolBar } from "../../../../../theme/GlobalStyles";
import palette from "../../../../../theme/palette";

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
		headerName: "To Do (Error/ Warning)",
		minWidth: 200,
		flex: 1,
		renderCell: ({ value }) => {
			return (
				<Typography sx={{ color: palette[value.status].main }}>
					{value.title}
				</Typography>
			);
		},
	},
];
