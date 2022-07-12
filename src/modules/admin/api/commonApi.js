import api from "../../../utils/api";

export const orgTypeList = (data) => {
	return api.post("/common/orgTypeList", data);
};

export const govTypeList = (data) => {
	return api.post("/common/govTypeList", data);
};

export const countryList = (data) => {
	return api.post("/common/countryList", data);
};

export const stateList = (data) => {
	return api.post("/common/stateList", data);
};

export const staffTypeList = (data) => {
	return api.post("/common/staffTypeList", data);
};

export const userTypeList = (data) => {
	return api.post("/common/userTypeList", data);
};

export const weekList = (data) => {
	return api.post("/common/weekList", data);
};

export const roleStaffList = (data) => {
	return api.post("/common/roleStaffList", data);
};

export const portfolioList = (data) => {
	return api.post("/common/portfolioList", data);
};

export const commonApi = {
	orgTypeList,
	govTypeList,
	countryList,
	stateList,
	staffTypeList,
	userTypeList,
	weekList,
	roleStaffList,
	portfolioList,
};
