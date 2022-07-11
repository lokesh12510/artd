import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
	ExpandMore as ExpandMoreIcon,
	ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import CustomPagination from "./CustomPagination";
import palette from "../../theme/palette";

const DataTable = (props) => {
	return (
		<>
			<DataGrid
				{...props}
				components={{
					NoRowsOverlay: CustomNoRowsOverlay,
					ColumnSortedDescendingIcon: ExpandMoreIcon,
					ColumnSortedAscendingIcon: ExpandLessIcon,
					Pagination: () => {
						return <CustomPagination />;
					},
				}}
				columns={
					props.columns &&
					props.columns.map((column) => ({
						...column,
						//headerAlign: 'left',
						//headerClassName: 'bg-danger',
						//flex: 1,
						//sortable: false,
						//minWidth: 100,
					}))
				}
				pagination
				paginationMode="server"
				rowsPerPageOptions={[10, 20, 30, 40, 50]}
				autoHeight={true}
				rowHeight={50}
				headerHeight={50}
				//density="compact"
				disableSelectionOnClick
				disableColumnMenu
				sx={{
					"&.MuiDataGrid-root": {
						border: "none",
					},
					".MuiDataGrid-columnSeparator": {
						display: "none",
					},
					"& .MuiPaginationItem-page.Mui-selected": {
						color: "#fff",
					},

					"& .MuiPaginationItem-page": {
						color: "#000",
					},
					"& .MuiPaginationItem-root": {
						marginInline: 0.9,
					},
					"& .MuiPaginationItem-previousNext": {
						border: `1px solid ${palette.secondary.main}`,
						color: palette.secondary.main,
						paddingInline: 2,
					},
					"& .MuiPaginationItem-previousNext.Mui-disabled": {
						color: palette.grey[400],
						border: `1px solid ${palette.grey[400]}`,
					},
					// ".MuiDataGrid-columnHeaders": {
					// 	backgroundColor: theme.palette.secondary.main,
					// 	color: theme.palette.primary.contrastText,
					// },
				}}
			/>
		</>
	);
};

export default DataTable;
