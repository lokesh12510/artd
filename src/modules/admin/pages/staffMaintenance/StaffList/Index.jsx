import React, { useCallback, useEffect } from "react";
// Mui
import { CircularProgress, Stack } from "@mui/material";
import styled from "@emotion/styled";
import FilterHeader from "./FilterHeader";
import { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
	selectedStaffId,
	selectStaff,
	StaffFilterType,
} from "../../../../../app/slices/staffSlice";
// Api
import StaffApi from "../../../api/staffApi";
// Components
import StaffListItem from "./StaffListItem";

const StaffList = () => {
	// Selected Filter type from redux
	const filterType = useSelector(StaffFilterType);

	// Staff list state
	const [staffList, setStaffList] = useState({
		isLoading: false,
		list: [],
	});

	// Filter type list state
	const [filterCount, setFilterCount] = useState({});

	useEffect(() => {
		// Staff List Service call
		const getStaffList = () => {
			setStaffList((l) => ({ ...l, isLoading: true }));

			StaffApi.StaffList({ status: filterType })
				.then((response) => {
					// set Staff list
					setStaffList((prev) => ({
						...prev,
						isLoading: false,
						list: response.data.rows,
					}));

					//  set Filter count
					setFilterCount(response.data.count);
				})
				.catch((e) => {
					console.log(e);
				});
		};

		getStaffList();
	}, [filterType]);

	// select staff
	const dispatch = useDispatch();

	const staffId = useSelector(selectedStaffId);

	const handleSelectStaff = useCallback(
		(code) => {
			dispatch(selectStaff({ staffId: code }));
		},
		[dispatch]
	);

	return (
		<StaffListContainer direction={"column"}>
			{/* List Filter Header */}
			<FilterHeader count={filterCount} />
			{/* List Filter Header */}

			{/* Item list */}
			<ListBody direction={"column"} spacing={1}>
				{staffList.isLoading ? (
					<Stack alignItems={"center"} justifyContent="center">
						<CircularProgress color="primary" />
					</Stack>
				) : (
					staffList.list.map((item) => {
						let checked = Boolean(staffId === item.StaffCode);

						return (
							<StaffListItem
								item={item}
								key={item.StaffCode}
								checked={checked}
								handleSelectStaff={handleSelectStaff}
							/>
						);
					})
				)}
			</ListBody>
			{/* Item list */}
		</StaffListContainer>
	);
};

export default StaffList;

// Styles
const StaffListContainer = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: "100%",
	border: `1px solid ${theme.palette.secondary.main}`,
	borderRadius: 7,
	overflow: "hidden",
}));

const ListBody = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.highlight,
	paddingBlock: theme.spacing(2),
	paddingRight: theme.spacing(2),
	height: "100%",
}));
