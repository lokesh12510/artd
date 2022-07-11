import styled from "@emotion/styled";
import { Box, MenuItem, Stack } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AccordionWrapper from "../../../../../components/AccordionWrapper";
import DataTable from "../../../../../components/DataTable";
import InputField from "../../../../../components/InputField";
import { AppIcon, EditIcon } from "../../../../../constants/icons";
import { projectList } from "../../../../../mockup/HomeApi";
import {
	CustomBox,
	CustomToolBar,
	StyledBtn,
} from "../../../../../theme/GlobalStyles";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
	search: {},
};

const ProjectList = () => {
	const [tableValues, setTableValues] = useState(initialTableValues);

	// Adding mock data on load
	useEffect(() => {
		setTableValues((v) => ({
			...v,
			rows: projectList.rows,
			rowCount: projectList.rowCount,
			page: 1,
			pageSize: 1,
		}));
	}, []);

	return (
		<AccordionWrapper title={"Project list"}>
			<>
				<CustomToolBar>
					<CustomBox>
						<Stack
							direction={"row"}
							justifyContent="flex-end"
							alignItems="center"
							spacing={4}
						>
							<InputField select defaultValue="All" name="Project Manager">
								<MenuItem value="All">All</MenuItem>
								<MenuItem value="Option 2">Option 2</MenuItem>
							</InputField>

							<InputField select defaultValue="All" name="Team">
								<MenuItem value="All">All</MenuItem>
								<MenuItem value="Option 2">Option 2</MenuItem>
							</InputField>

							<InputField select defaultValue="All" name="Project Type">
								<MenuItem value="All">All</MenuItem>
								<MenuItem value="Option 2">Option 2</MenuItem>
							</InputField>

							<InputField select defaultValue="All" name="Status">
								<MenuItem value="All">All</MenuItem>
								<MenuItem value="Option 2">Option 2</MenuItem>
							</InputField>
						</Stack>
					</CustomBox>
				</CustomToolBar>
				<Stack alignItems={"flex-end"} mt={1} pr={1}>
					<StyledCornerBtn variant="contained">
						<AppIcon icon="Add" />
					</StyledCornerBtn>
				</Stack>
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

export default ProjectList;

const StyledCornerBtn = styled(StyledBtn)(() => ({
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
}));

// Columns
const columns = [
	{ field: "project", headerName: "Project", minWidth: 140 },
	{ field: "title", headerName: "Project title", minWidth: 400, flex: 1 },
	{ field: "team", headerName: "Team", minWidth: 140, flex: 1 },
	{ field: "status", headerName: "Status", minWidth: 140 },
	{ field: "pd", headerName: "PD", minWidth: 140 },
	{ field: "pm", headerName: "PM", minWidth: 140 },
	{
		field: "edit",
		headerName: "Edit Project",
		minWidth: 140,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => [
			<GridActionsCellItem icon={<EditIcon />} label="Edit" />,
		],
	},
	{
		field: "planner",
		headerName: "Project Planner",
		minWidth: 140,
		align: "center",
		headerAlign: "center",
		renderCell: (params) => [
			<GridActionsCellItem
				icon={<AppIcon icon="Planner" color="primary" />}
				label="Planner"
			/>,
		],
	},
];
