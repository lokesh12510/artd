import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import projectPlanningSlice from "./slices/projectPlanningSlice";
// import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
	projectPlanning: projectPlanningSlice,
});

// store user details in localStorage
// const persistConfig = {
// 	key: "root",
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== "production",
});

// export const persistor = persistStore(store);

setupListeners(store.dispatch);

//    dispatch(baseApi.util.resetApiState());
