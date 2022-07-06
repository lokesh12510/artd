import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Slices
import authSlice from "./slices/authSlice";
import projectPlanningSlice from "./slices/projectPlanningSlice";
import pageSlice from "./slices/pageSlice";
import staffSlice from "./slices/staffSlice";
// redux-persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
	auth: authSlice,
	projectPlanning: projectPlanningSlice,
	pageInfo: pageSlice,
	staff: staffSlice,
});

// store user details in localStorage
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
	// devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

//    dispatch(baseApi.util.resetApiState());
