import api from "../../../utils/api";

const StaffList = (data) => {
	return api.post("/staffs", data);
};

const Store = (data) => {
	return api.post(`/staffs/store`, data, {
		//'content-type': 'multipart/form-data'
	});
};

const Edit = (data) => {
	return api.post(`/staffs/edit`, data);
};

const Delete = (data) => {
	return api.post(`/staffs/delete`, data);
};

const StaffApi = {
	StaffList,
	Store,
	Edit,
	Delete,
};

export default StaffApi;
