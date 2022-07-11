import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	isLoggedIn: false,
	token: null,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authLogin: (state, action) => {
			localStorage.setItem("token", action.payload.token);
			state.isLoggedIn = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		authUserUpdate: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { authLogin, authUserUpdate } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const currentUser = (state) => state.auth.user;

export default authSlice.reducer;
