import { Stack, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import palette from "../../../theme/palette";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../../../theme/GlobalStyles";
import StickyColTable from "../../../components/StickyColTable";
import { data } from "../../../mockup/stickytableData";

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
						<StyledBtn variant="outlined" color={"primary"} size="small">
							Description
						</StyledBtn>
						<StyledBtn variant="outlined" color={"primary"} size="small">
							outputs
						</StyledBtn>
						<StyledBtn variant="outlined" color={"primary"} size="small">
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
				<StickyColTable data={data} />
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
		minWidth: 90,
	},
}));

const TableContainer = styled(StyledBox)(({ theme }) => ({
	flexDirection: "column",
	alignItems: "stretch",
	gap: 0,
}));

// const GridContainer = styled("div")(({ theme }) => ({
// 	position: "relative",
// 	width: "100%",
// 	"& .MuiDataGrid-columnHeaders": {
// 		backgroundColor: palette.secondary.main,
// 		borderRadius: 0,
// 	},
// 	"& .MuiDataGrid-columnHeader": {
// 		outline: "none!important",
// 		padding: "0 5px",
// 	},

// 	"& .MuiDataGrid-root": {
// 		"& .MuiDataGrid-cell": {
// 			padding: "0 5px",
// 		},
// 	},

// 	"& .MuiSvgIcon-fontSizeLarge": {
// 		backgroundColor: "#10577680",
// 	},
// 	"& .MuiDataGrid-columnHeaderCheckbox": {
// 		display: "none!important",
// 	},
// 	"& .MuiDataGrid-cellCheckbox": {
// 		display: "none!important",
// 	},

// 	"& .MuiOutlinedInput-root": { paddingRight: 0 },
// 	"& .MuiSelect-outlined": { paddingRight: "10px !important" },

// 	"& .MuiDataGrid-columnHeaderTitle": {
// 		color: palette.common.white,
// 		textTransform: "uppercase",
// 		letterSpacing: 1.2,
// 		fontSize: 14,
// 	},
// 	"& .MuiDataGrid-row.Mui-selected": {
// 		backgroundColor: palette.disabled,
// 		"& .tableField": {
// 			pointerEvents: "none",
// 		},
// 		"& input": {
// 			color: palette.grey[400],
// 		},
// 	},
// 	"& .MuiDataGrid-columnSeparator": {
// 		display: "none!important",
// 	},
// 	"& .MuiDataGrid-iconButtonContainer": {
// 		display: "none!important",
// 	},

// 	"& .MuiOutlinedInput-input": {
// 		padding: theme.spacing(0.8),
// 	},
// 	"& .MuiDataGrid-columnHeaderTitleContainer": {
// 		justifyContent: "center",
// 	},
// 	"& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
// 		outline: "none!important",
// 	},
// 	// "& .MuiDataGrid-root .pinnedColumns": {
// 	// 	position: "absolute",
// 	// 	overflow: "hidden",
// 	// 	height: "100%",
// 	// 	zIndex: 1,
// 	// 	display: "flex",
// 	// 	left: 0,
// 	// },
// }));

// Dummy data
