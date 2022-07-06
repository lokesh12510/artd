import axios from "axios";
import { BASE_URL } from "../constants/config";

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: BASE_URL,
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + '';

instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token && token !== null) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && error.response.status) {
			const resStatus = error.response.status;
			if (resStatus === UNAUTHORIZED || resStatus === FORBIDDEN) {
				localStorage.removeItem("token");
				window.location.reload();
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
