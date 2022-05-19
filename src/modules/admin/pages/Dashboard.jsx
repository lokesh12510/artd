import {
	Box,
	Button,
	Stack,
	Typography,
	TextField,
	Checkbox,
	FormGroup,
	FormControlLabel,
	MenuItem,
	InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import palette from "../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../../../theme/GlobalStyles";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { AddCircle as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const Dashboard = () => {
	return (
		<Stack spacing={2}>
			<StyledBox>
				<StyledBtn variant="outlined" color="primary" startIcon={<ArrowBackIosIcon />}>
					Back
				</StyledBtn>

				<ProjectInfo direction={"row"} alignItems="center" justifyContent={"flex-start"}>
					<Typography variant={"body1"} color="dark">
						Project
					</Typography>
					<StyledInput value="23443" variant="outlined" />
				</ProjectInfo>
				<StyledInput value="The Big Project" variant="outlined" />
			</StyledBox>
			<TableContainer>
				<TableHeader direction={"row"} alignItems="center" justifyContent={"space-between"}>
					<StyledCheckBoxWrapper>
						<FormControlLabel control={<Checkbox />} label="Automatic numbering ?" />
					</StyledCheckBoxWrapper>

					<ButtonStack direction={"row"} alignItems="center" justifyContent={"center"}>
						<StyledBtn variant="outlined" color={"primary"}>
							Description
						</StyledBtn>
						<StyledBtn variant="outlined" color={"primary"}>
							outputs
						</StyledBtn>
						<StyledBtn variant="outlined" color={"primary"}>
							Bump
						</StyledBtn>
					</ButtonStack>
				</TableHeader>
				<GridContainer>
					<DataGrid
						autoHeight
						rows={rows}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						disableSelectionOnClick
						disableColumnMenu
					/>
				</GridContainer>
			</TableContainer>
		</Stack>
	);
};

export default Dashboard;

const ProjectInfo = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(1.5),
}));

const TableHeader = styled(Stack)(({ theme }) => ({
	backgroundColor: palette.secondary.light,
	padding: theme.spacing(1.5),
	flex: 1,
}));

const ButtonStack = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(1),
	"& .MuiButton-root": {
		backgroundColor: palette.common.white,
		minWidth: 130,
	},
}));

const TableContainer = styled(StyledBox)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "stretch",
	gap: 0,
}));

const GridContainer = styled("div")(({ theme }) => ({
	width: "100%",
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: palette.secondary.main,
		borderRadius: 0,
	},
	"& .MuiDataGrid-columnHeader": {
		outline: "none!important",
		"& .MuiSvgIcon-fontSizeMedium": {
			display: "none",
		},
	},

	"& .MuiSvgIcon-fontSizeLarge": {
		backgroundColor: "#10577680",
	},

	"& .MuiOutlinedInput-root": { paddingRight: 0 },
	"& .MuiSelect-outlined": { paddingRight: "10px !important" },

	"& .MuiDataGrid-columnHeaderTitle": {
		color: palette.common.white,
		textTransform: "uppercase",
		letterSpacing: 1.2,
		fontSize: 14,
	},
	"& .MuiDataGrid-columnSeparator": {
		display: "none!important",
	},
	"& .MuiDataGrid-iconButtonContainer": {
		display: "none!important",
	},
	"& .MuiDataGrid-footerContainer": {
		display: "none!important",
	},
	"& .MuiOutlinedInput-input": {
		padding: theme.spacing(0.8),
	},
	"& .MuiDataGrid-columnHeaderTitleContainer": {
		justifyContent: "center",
	},
}));

// Dummy data

const columns = [
	{
		field: "completed",
		headerName: "Completed",
		minWidth: 120,
		renderCell: (params) => [<Checkbox fontSize="large" />],
	},
	{
		field: "action",
		headerName: "Action",
		minWidth: 120,
		renderCell: (params) => [
			<GridActionsCellItem icon={<FileCopyIcon />} label="Delete" />,
			<GridActionsCellItem icon={<EditIcon />} label="Edit" />,
			<GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
		],
	},
	{
		field: "Phase",
		headerName: "Phase",
		width: 80,
		editable: true,
		renderCell: () => <TextField />,
	},
	{
		field: "Task",
		headerName: "Task",
		width: 80,
		editable: true,
		renderCell: () => <TextField />,
	},
	{
		field: "desc",
		headerName: "Description",
		width: 200,
		renderCell: () => <TextField />,
	},
	{
		field: "date",
		headerName: "Date",
		width: 150,
		renderCell: () => <TextField />,
	},
	{
		field: "time",
		headerName: "Time",
		width: 80,
		renderCell: () => <TextField />,
	},
	{
		field: "timeRate",
		headerName: "Time X Rate",
		width: 150,
		renderCell: () => <TextField />,
	},
	{
		field: "expense",
		headerName: "Expense",
		width: 120,
		renderCell: () => <TextField />,
	},
	{
		field: "NATC",
		headerName: "NATC",
		minWidth: 100,
		renderCell: () => <TextField />,
	},
	{
		field: "DAVC",
		headerName: "DAVC",
		minWidth: 100,
		renderCell: () => <TextField />,
	},
	{
		field: "JENT",
		headerName: "JENT",
		minWidth: 100,

		renderCell: () => <TextField />,
	},
];

const rows = [
	{ id: 1, Task: "Snow", Phase: "Jon", age: 35 },
	{ id: 2, Task: "Snow", Phase: "Jon", age: 35 },
	{ id: 3, Task: "Snow", Phase: "Jon", age: 35 },
];
