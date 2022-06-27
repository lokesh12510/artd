import { createSlice, createSelector } from "@reduxjs/toolkit";
import { data } from "../../mockup/projectPlanningApi";

const projectPlanningSlice = createSlice({
	name: "projectPlanning",
	initialState: {
		pending: data.rows.pending,
		completed: data.rows.completed,
		columns: data.columns,
		isCompletedOpen: false,
	},
	reducers: {
		addRow: (state) => {
			console.log("added");
			let colObj = {};
			state.columns.list.forEach((item) => (colObj[item] = ""));

			state.pending.list.push({
				...colObj,
				date: null,
				id: state.pending.list.length + Math.floor(Math.random() * 100),
				isCompleted: false,
			});
			state.pending.total += 1;
		},
		toggleCompletedList: (state) => {
			state.isCompletedOpen = !state.isCompletedOpen;
		},
		editRow: (state, action) => {
			const { name, value, id } = action.payload;
			console.log(value);
			state.pending.list = state.pending.list.map((r) => {
				if (r.id === id) {
					return { ...r, [name]: value };
				} else {
					return r;
				}
			});
		},
	},
});

export const {
	addRow: addToProjectList,
	toggleCompletedList,
	editRow: editProjectRow,
} = projectPlanningSlice.actions;

export default projectPlanningSlice.reducer;

export const selectCompletedRows = (state) =>
	state.projectPlanning.completed.list;

export const selectCompletedTotal = (state) =>
	state.projectPlanning.completed.total;

export const selectPendingRows = (state) => state.projectPlanning.pending.list;
export const pendingRows = createSelector([selectPendingRows], (rows) => rows);

export const selectPendingTotal = (state) =>
	state.projectPlanning.pending.total;

export const projectColumnList = (state) => state.projectPlanning.columns.list;

export const projectColumnTotal = (state) =>
	state.projectPlanning.columns.count;

export const isCompletedOpen = (state) => state.projectPlanning.isCompletedOpen;
