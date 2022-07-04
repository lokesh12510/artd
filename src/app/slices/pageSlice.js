import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
	name: "pageInfo",
	initialState: {
		title: "",
	},
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload.title;
		},
		resetPage: (state) => {
			state.title = "";
		},
	},
});

export const { setTitle, resetPage } = pageSlice.actions;

export default pageSlice.reducer;

export const pageTitle = (state) => state.pageInfo.title;
