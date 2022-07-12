import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../modules/auth/api/authApi";

const initialState = {
	loading: false,
	isLoggedIn: false,
	token: null,
	user: null,
};

// Api to fetch user details on refresh
export const authOnLoadAsync = createAsyncThunk(
	"authOnLoad",
	async (data, thunkAPI) => {
		const { token } = thunkAPI.getState().auth;
		if (token && token !== null) {
			try {
				const response = await authApi.user();
				return {
					isLoggedIn: true,
					token: token,
					user: response.data.user,
				};
			} catch (error) {
				thunkAPI.dispatch(authLogout());
			}
		}
		return thunkAPI.rejectWithValue();
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authLogin: (state, action) => {
			state.isLoggedIn = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		authUserUpdate: (state, action) => {
			state.user = action.payload;
		},
		authLogout: (state) => {
			state.token = null;
			state.user = null;
			state.isLoggedIn = false;
			state.loading = false;
		},
		[authOnLoadAsync.pending]: (state) => {
			state.loading = true;
		},
		[authOnLoadAsync.fulfilled]: (state, action) => {
			state.loading = false;
			state.isLoggedIn = action.payload.isLoggedIn;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		[authOnLoadAsync.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const { authLogin, authUserUpdate, authLogout } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const currentUser = (state) => state.auth.user;

export default authSlice.reducer;
