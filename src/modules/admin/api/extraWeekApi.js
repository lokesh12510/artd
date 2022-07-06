import api from "../../../utils/api";

const GetLastRow = (data) => {
	return api.post(`/weeks/getLastRow`, data);
};

const Store = (data) => {
	return api.post(`/weeks/store`, data, {
		"content-type": "multipart/form-data",
	});
};

const ExtraWeeksApi = {
	GetLastRow,
	Store,
};

export default ExtraWeeksApi;
