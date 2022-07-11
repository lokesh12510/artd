import React, { useEffect, useState } from "react";
// Mui
import styled from "@emotion/styled";
import { FormGroup, MenuItem, Stack } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
// Components
import AccordionWrapper from "../../../../../components/AccordionWrapper";
import CheckboxField from "../../../../../components/CheckboxField";
import DataTable from "../../../../../components/DataTable";
import InputField from "../../../../../components/InputField";
// Custom Icons
import { AppIcon } from "../../../../../constants/icons";
// Custom Styles
import {
	CustomBox,
	CustomToolBar,
	StyledBtn,
} from "../../../../../theme/GlobalStyles";
// Mock Api
import { proposalApi } from "../../../../../mockup/HomeApi";

const initialTableValues = {
	loading: false,
	rows: [],
	rowCount: 0,
	page: 0,
	pageSize: 10,
	search: {},
};

const ProposalList = () => {
	const [tableValues, setTableValues] = useState(initialTableValues);

	// Adding mock data on load
	useEffect(() => {
		setTableValues((v) => ({
			...v,
			rows: proposalApi.rows,
			rowCount: proposalApi.rowCount,
			page: 1,
			pageSize: 1,
		}));
	}, []);

	return (
		<AccordionWrapper title={"List of Opportunities and Proposals"}>
			<>
				<CustomToolBar>
					<CustomBox>
						<Stack
							direction={"row"}
							justifyContent="flex-end"
							alignItems="center"
							spacing={4}
						>
							<FormGroup>
								<CheckboxField label={"Opportunities"} color={"primary"} />
								<CheckboxField label={"Proposals"} color={"primary"} />
							</FormGroup>

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

export default ProposalList;

const StyledCornerBtn = styled(StyledBtn)(() => ({
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
}));

// Columns
const columns = [
	{ field: "project", headerName: "Project", minWidth: 140 },
	{ field: "classification", headerName: "Classification", minWidth: 140 },
	{ field: "team", headerName: "Team", minWidth: 140, flex: 1 },
	{ field: "status", headerName: "Status", minWidth: 140 },
	{ field: "dateReceived", headerName: "Date Received", minWidth: 140 },
	{ field: "dueDate", headerName: "Due Date", minWidth: 140 },
	{ field: "pd", headerName: "PD", minWidth: 140 },
	{ field: "pm", headerName: "PM", minWidth: 140 },
	{ field: "pr", headerName: "PR", minWidth: 140 },
	{ field: "title", headerName: "Project title", minWidth: 200 },
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
