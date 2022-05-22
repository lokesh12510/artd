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
import React, { useState } from "react";
import palette from "../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../../../theme/GlobalStyles";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { CopyIcon, DeleteIcon, EditIcon, EyeIcon } from "../../../constants/icons";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import StickyColTable from "../../../components/StickyColTable";
import { data } from '../../../mockup/stickytableData';

const Dashboard = () => {
	const [selectionModel, setSelectionModel] = React.useState();

	const [tableRow, setTableRow] = useState(rows);

	const handleAddRow = () => {
		setTableRow([...tableRow, { id: Math.floor(Math.random() * 1000) }]);
	};

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
				{/* <GridContainer>
					<DataGrid
						autoHeight
						autoWidth
						rows={tableRow}
						columns={columns}
						disableSelectionOnClick
						disableColumnMenu
						hideFooterPagination
						checkboxSelection
						hideFooter
						onSelectionModelChange={(newSelectionModel) => {
							setSelectionModel(newSelectionModel);
						}}
						selectionModel={selectionModel}
					/>
				</GridContainer>
				<div className="">
					<StyledBtn variant="contained" color="primary" onClick={handleAddRow}>
						<AddCircleIcon />
					</StyledBtn>
				</div> */}
				<StickyColTable  data={data}/>
				{/* <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} mt={4}>
					<Typography variant="h5" color="primary" gutterBottom>
						Deliverables
					</Typography>
				</Stack> */}
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
	position: "relative",
	width: "100%",
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: palette.secondary.main,
		borderRadius: 0,
	},
	"& .MuiDataGrid-columnHeader": {
		outline: "none!important",
		padding: "0 5px",
	},

	"& .MuiDataGrid-root": {
		"& .MuiDataGrid-cell": {
			padding: "0 5px",
		},
	},

	"& .MuiSvgIcon-fontSizeLarge": {
		backgroundColor: "#10577680",
	},
	"& .MuiDataGrid-columnHeaderCheckbox": {
		display: "none!important",
	},
	"& .MuiDataGrid-cellCheckbox": {
		display: "none!important",
	},

	"& .MuiOutlinedInput-root": { paddingRight: 0 },
	"& .MuiSelect-outlined": { paddingRight: "10px !important" },

	"& .MuiDataGrid-columnHeaderTitle": {
		color: palette.common.white,
		textTransform: "uppercase",
		letterSpacing: 1.2,
		fontSize: 14,
	},
	"& .MuiDataGrid-row.Mui-selected": {
		backgroundColor: palette.disabled,
		"& .tableField": {
			pointerEvents: "none",
		},
		"& input": {
			color: palette.grey[400],
		},
	},
	"& .MuiDataGrid-columnSeparator": {
		display: "none!important",
	},
	"& .MuiDataGrid-iconButtonContainer": {
		display: "none!important",
	},

	"& .MuiOutlinedInput-input": {
		padding: theme.spacing(0.8),
	},
	"& .MuiDataGrid-columnHeaderTitleContainer": {
		justifyContent: "center",
	},
	"& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
		outline: "none!important",
	},
	// "& .MuiDataGrid-root .pinnedColumns": {
	// 	position: "absolute",
	// 	overflow: "hidden",
	// 	height: "100%",
	// 	zIndex: 1,
	// 	display: "flex",
	// 	left: 0,
	// },
}));

// Dummy data

const columns = [
	{
		field: "completed",
		headerName: "Completed",
		headerClassName: ["pinnedColumns"],
		cellClassName: ["pinnedColumns"],

		minWidth: 120,
		align: "center",

		renderCell: (params) => {
			const isSelected = params.api.isRowSelected(params.id);
			return (
				<Checkbox
					fontSize="large"
					checked={isSelected}
					onChange={(event) => {
						params.api.selectRow(params.id, !isSelected);
					}}
				/>
			);
		},
	},
	{
		field: "action",
		headerName: "Action",
		headerClassName: ["pinnedColumns"],
		cellClassName: ["pinnedColumns"],
		minWidth: 100,
		align: "center",

		renderCell: (params) => {
			const isSelected = params.api.isRowSelected(params.id);

			return isSelected ? (
				<>
					<GridActionsCellItem icon={<EyeIcon bg={palette.primary.main} />} label="Delete" />
					<GridActionsCellItem icon={<DeleteIcon bg={palette.grey[400]} />} label="Delete" />
				</>
			) : (
				<>
					<GridActionsCellItem icon={<CopyIcon bg={palette.primary.main} />} label="Copy" />
					<GridActionsCellItem icon={<EditIcon bg={palette.primary.main} />} label="Edit" />
					<GridActionsCellItem icon={<DeleteIcon bg={palette.primary.main} />} label="Delete" />
				</>
			);
		},
	},
	{
		field: "Phase",
		headerName: "Phase",
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],
		width: 80,
		editable: true,

		renderCell: () => <TextField />,
	},
	{
		field: "Task",
		headerName: "Task",
		width: 80,
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],
		editable: true,
		cellAlign: "center",

		renderCell: () => <TextField />,
	},
	{
		field: "desc",
		headerName: "Description",
		headerClassName: ["pinnedColumns, colDesc"],
		cellClassName: ["tableField", "pinnedColumns, colDesc"],
		minWidth: 200,
		flex: 3,
		renderCell: () => <TextField fullWidth />,
	},
	{
		field: "date",
		headerName: "Date",
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],
		width: 150,

		renderCell: () => <TextField />,
	},
	{
		field: "time",
		headerName: "Time",
		width: 80,
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],

		renderCell: () => <TextField />,
	},
	{
		field: "timeRate",
		headerName: "Time X Rate",
		width: 150,
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],

		renderCell: () => <TextField />,
	},
	{
		field: "expense",
		headerName: "Expense",
		width: 120,
		headerClassName: ["pinnedColumns"],
		cellClassName: ["tableField", "pinnedColumns"],

		renderCell: () => <TextField />,
	},
	{
		field: "NATC",
		headerName: "NATC",
		minWidth: 100,
		cellClassName: "tableField",
		renderCell: () => <TextField />,
	},
	{
		field: "DAVC",
		headerName: "DAVC",
		minWidth: 100,
		cellClassName: "tableField",
		renderCell: () => <TextField />,
	},
	{
		field: "JENT",
		headerName: "JENT",
		minWidth: 100,
		cellClassName: "tableField",
		renderCell: () => <TextField />,
	},
	{
		field: "add",
		headerName: "Add",
		minWidth: 100,
		minHeight: 120,
		cellClassName: "tableField",
		renderHeader: () => (
			<StyledBtn variant="contained" color="primary">
				<AddCircleIcon />
			</StyledBtn>
		),
	},
];

const rows = [
	{ id: 1, Task: "Snow", Phase: "Jon", age: 35 },
	{ id: 2, Task: "Snow", Phase: "Jon", age: 35 },
	{ id: 3, Task: "Snow", Phase: "Jon", age: 35 },
];
