import styled from "@emotion/styled";
import { Box, MenuItem, Stack, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccordionWrapper from "../../../../../components/AccordionWrapper";
import DataTable from "../../../../../components/DataTable";
import InputField from "../../../../../components/InputField";
import { taskData } from "../../../../../mockup/HomeApi";
import { CustomToolBar } from "../../../../../theme/GlobalStyles";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
	search: {},
};

const TaskList = () => {
	const [tableValues, setTableValues] = useState(initialTableValues);

	// Adding mock data on load
	useEffect(() => {
		setTableValues((v) => ({
			...v,
			rows: [
				...taskData.rows,
				{
					id: "TOTAL",
					label: "Total Booking Days",
					booked: 686.4,
					task: "Total Proposals  0",
				},
			],
			rowCount: taskData.rowCount,
			page: 1,
			pageSize: 1,
		}));
	}, []);

	return (
		<AccordionWrapper title={"Task for the Selected Month"}>
			<>
				<StyledToolBar>
					<Stack
						direction={"row"}
						justifyContent="flex-end"
						alignItems="center"
						spacing={4}
						sx={{ width: "100%" }}
					>
						<Typography>
							Total Days Available{" "}
							<Typography component="span" fontWeight={"bold"} mx={1}>
								5.04
							</Typography>{" "}
							|{" "}
							<Typography component={Link} href={"#"} color={"primary"} mx={1}>
								% Capacity 5.3
							</Typography>
						</Typography>
						<InputField select defaultValue="mar 2022">
							<MenuItem value="mar 2022">Mar 2022</MenuItem>
							<MenuItem value="apr 2022">Apr 2022</MenuItem>
						</InputField>
					</Stack>
				</StyledToolBar>
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

export default TaskList;

// Columns
const columns = [
	{
		field: "project",
		headerName: "Project",
		minWidth: 200,
		colSpan: ({ row }) => {
			if (row.id === "TOTAL") {
				return 2;
			}
			return undefined;
		},
		valueGetter: ({ value, row }) => {
			if ("TOTAL") {
				return row.label;
			}
			return value;
		},
	},
	{ field: "title", headerName: "Project title", minWidth: 400 },
	{ field: "booked", headerName: "Booked", minWidth: 200 },
	{ field: "task", headerName: "Task", minWidth: 200 },
];

const StyledToolBar = styled(CustomToolBar)(({ theme }) => ({
	padding: theme.spacing(1),
	backgroundColor: theme.palette.common.white,
	"& .MuiFormControl-root": {
		maxWidth: 130,
	},
}));
