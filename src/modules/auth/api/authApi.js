import api from "../../../utils/api";

export const login = (data) => {
	return api.post("/auth/login", data);
};
