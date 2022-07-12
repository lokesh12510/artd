import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonApi } from "../../modules/admin/api/commonApi";

const initialState = {
	userTypeList: [],
	weekList: [],
	staffTypeList: [],
	orgTypeList: [],
	govTypeList: [],
	countryList: [],
	stateList: [],
	roleStaffList: [],
	portfolioList: [],
};

export const userTypeListAsync = createAsyncThunk(
	"userTypeListAsync",
	async (data, thunkAPI) => {
		try {
			let response = await commonApi.userTypeList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const weekListAsync = createAsyncThunk(
	"weekListAsync",
	async (data, thunkAPI) => {
		try {
			let response = await commonApi.weekList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const staffTypeListAsync = createAsyncThunk(
	"staffTypeListAsync",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.staffTypeList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const roleStaffListAsync = createAsyncThunk(
	"roleStaffList",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.roleStaffList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const portfolioListAsync = createAsyncThunk(
	"portfolioList",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.portfolioList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const orgTypeListAsync = createAsyncThunk(
	"orgTypeListAsync",
	async (data, thunkAPI) => {
		try {
			let response = await commonApi.orgTypeList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const govTypeListAsync = createAsyncThunk(
	"govTypeListAsync",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.govTypeList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const countryListAsync = createAsyncThunk(
	"countryListAsync",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.countryList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const stateListAsync = createAsyncThunk(
	"stateListAsync",
	async (data, thunkAPI) => {
		try {
			const response = await commonApi.stateList();
			return response.data.rows;
		} catch (error) {
			return thunkAPI.rejectWithValue();
		}
	}
);

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: {
		[userTypeListAsync.fulfilled]: (state, action) => {
			state.userTypeList = action.payload;
		},
		[weekListAsync.fulfilled]: (state, action) => {
			state.weekList = action.payload;
		},
		[staffTypeListAsync.fulfilled]: (state, action) => {
			state.staffTypeList = action.payload;
		},
		[roleStaffListAsync.fulfilled]: (state, action) => {
			state.roleStaffList = action.payload;
		},
		[portfolioListAsync.fulfilled]: (state, action) => {
			state.portfolioList = action.payload;
		},
		[orgTypeListAsync.fulfilled]: (state, action) => {
			state.orgTypeList = action.payload;
		},
		[govTypeListAsync.fulfilled]: (state, action) => {
			state.govTypeList = action.payload;
		},
		[countryListAsync.fulfilled]: (state, action) => {
			state.countryList = action.payload;
		},
		[stateListAsync.fulfilled]: (state, action) => {
			state.stateList = action.payload;
		},
	},
});

export const selectList = (state) => state.list;

export default listSlice.reducer;
