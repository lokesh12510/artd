import api from "../../../utils/api";

export const Clients = (data) => {
	return api.post("/clients", data);
};

export const Store = (data) => {
	return api.post(`/clients/store`, data, {
		"content-type": "multipart/form-data",
	});
};

export const Edit = (data) => {
	return api.post(`/clients/edit`, data);
};

export const Delete = (data) => {
	return api.post(`/clients/delete`, data);
};

export const clientApi = {
	Clients,
	Store,
	Edit,
	Delete,
};
