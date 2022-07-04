import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
	name: "staff",
	initialState: {
		selectedStaffId: null,
		filterType: "active",
	},
	reducers: {
		selectStaff: (state, action) => {
			console.log(action.payload);
			state.selectedStaffId = action.payload.staffId;
		},
		setStaffFilter: (state, action) => {
			state.filterType = action.payload.filter;
		},
		resetStaff: (state) => {
			state.selectedStaffId = null;
		},
	},
});

export const { selectStaff, resetStaff, setStaffFilter } = staffSlice.actions;

export default staffSlice.reducer;

export const selectedStaffId = (state) => state.staff.selectedStaffId;
export const StaffFilterType = (state) => state.staff.filterType;
