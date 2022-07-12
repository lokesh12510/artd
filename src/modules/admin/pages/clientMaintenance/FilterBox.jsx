import React, { useState } from "react";
// Mui
import styled from "@emotion/styled";
import { Grid, InputAdornment } from "@mui/material";
// Components
import RadioField from "../../../../components/RadioField";
import SelectField from "../../../../components/SelectField";
// Custom Icon
import { AppIcon } from "../../../../constants/icons";
// Custom Styles
import {
	CustomBox,
	StyledBtn,
	StyledInput,
} from "../../../../theme/GlobalStyles";
import palette from "../../../../theme/palette";
// Redux
import { useSelector } from "react-redux";
import { selectList } from "../../../../app/slices/listSlice";
import { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import {
	countryListAsync,
	govTypeListAsync,
	orgTypeListAsync,
	stateListAsync,
} from "../../../../app/slices/listSlice";

const FilterBox = ({ handleModal, filter, handleFilterChange }) => {
	const dispatch = useDispatch();
	// List State from redux
	const { govTypeList, orgTypeList, stateList, countryList } =
		useSelector(selectList);

	const [search, setSearch] = useState("");

	const handleSearchText = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		// Lists dispatch with redux
		dispatch(orgTypeListAsync());
		dispatch(govTypeListAsync());
		dispatch(countryListAsync());
		dispatch(stateListAsync());
	}, [dispatch]);

	return (
		<CustomBox my={2}>
			<Grid container spacing={2} justifyContent="space-between">
				<Grid item xs={12} md={7} lg={8}>
					<StyledInput
						placeholder="Search"
						variant="outlined"
						value={search}
						onChange={handleSearchText}
						name="searchText"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AppIcon icon="Search" sx={{ fontSize: "16px", color: palette.grey[400] }} />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={2.5} lg={2}>
					<StyledBtn
						size="small"
						variant="contained"
						color="primary"
						fullWidth
						onClick={() =>
							handleFilterChange({ target: { name: "searchText", value: search } })
						}
					>
						Search
					</StyledBtn>
				</Grid>
				<Grid item xs={12} sm={6} md={2.5} lg={2}>
					<StyledBtn
						variant="contained"
						color="primary"
						size="small"
						fullWidth
						startIcon={<AppIcon icon="Add" />}
						onClick={handleModal}
					>
						Add Client
					</StyledBtn>
				</Grid>
				<Grid item xs={2.2}>
					<SelectField
						list={[{ code: "All", title: "All" }, ...orgTypeList]}
						value={filter.orgType}
						onChange={handleFilterChange}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="Organization type"
						name="orgType"
					/>
				</Grid>
				<Grid item xs={2.2}>
					<SelectField
						list={[{ code: "All", title: "All" }, ...govTypeList]}
						value={filter.govType}
						onChange={handleFilterChange}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="government type"
						name="govType"
					/>
				</Grid>
				<Grid item xs={2.2}>
					<SelectField
						list={[{ code: "All", title: "All" }, ...stateList]}
						value={filter.state}
						onChange={handleFilterChange}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="state"
						name="state"
					/>
				</Grid>
				<Grid item xs={2.2}>
					<SelectField
						list={[{ code: "All", title: "All" }, ...countryList]}
						value={filter.country}
						onChange={handleFilterChange}
						getValueBy={"code"}
						getTitleBy={"title"}
						label="country"
						name="country"
					/>
				</Grid>
				<Grid item xs={3}>
					<StyledRadioField
						label={"Status"}
						dir="row"
						radioList={[
							{ label: "Active", value: 1 },
							{ label: "Inactive", value: 0 },
						]}
						value={filter.status}
						onChange={handleFilterChange}
						name="status"
					/>
				</Grid>
			</Grid>
		</CustomBox>
	);
};

export default FilterBox;

const StyledRadioField = styled(RadioField)(({ theme }) => ({
	"& .MuiFormControlLabel-root": {
		marginRight: 20,
	},
	"& .MuiFormControlLabel-label": {
		fontWeight: 500,
	},
}));
