import { MenuItem } from "@mui/material";
import React from "react";
import InputField from "./InputField";

const SelectField = ({
	list,
	defaultValue,
	name,
	getValueBy,
	getTitleBy,
	value,
	onChange,
	...rest
}) => {
	return (
		<>
			<InputField
				select
				defaultValue={defaultValue}
				name={name}
				value={value}
				onChange={onChange}
				{...rest}
			>
				{list.length > 0 ? (
					list.map((item) => (
						<MenuItem value={item[getValueBy]} key={item[getValueBy]}>
							{item[getTitleBy]}
						</MenuItem>
					))
				) : (
					<MenuItem>No Data</MenuItem>
				)}
			</InputField>
		</>
	);
};

export default SelectField;
