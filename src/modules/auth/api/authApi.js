import api from "../../../utils/api";

export const login = (data) => {
	return api.post("/auth/login", data);
};

export const azureLogin = (data) => {
	return api.post("/auth/azureLogin", data);
};

export const logout = (data) => {
	return api.post("/auth/logout", data);
};

export const refresh = (data) => {
	return api.post("/auth/refresh", data);
};

export const user = (data) => {
	return api.post("/auth/user", data);
};

export const forgotPassword = (data) => {
	return api.post("/auth/forgotPassword", data);
};

export const verifyPasswordToken = (data) => {
	return api.post("/auth/verifyPasswordToken", data);
};

export const resetPassword = (data) => {
	return api.post("/auth/resetPassword", data);
};

export const authApi = {
	login,
	azureLogin,
	logout,
	refresh,
	user,
	forgotPassword,
	verifyPasswordToken,
	resetPassword,
};
