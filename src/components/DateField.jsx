import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import InputField from "./InputField";
// Mui Date field wrapper
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { CalenderIcon } from "../constants/icons";

// DateField is wrapper with localization provider with moment adapter
// @params
// `helperText` for error message
// `error` for error status
// `name` for label
// With Custom styles

const DateField = ({ helperText, error, name, label, ...props }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	const onChange = (val) => {
		setValue(val);
	};

	// Close when clicking outside date modal
	const handleClickAway = () => {
		setOpen(false);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<DatePicker
				name={name}
				label={label}
				value={value}
				onChange={(newValue) => {
					console.log(newValue);
					if (newValue?._d === "Invalid Date") {
						onChange("");
					} else {
						onChange(newValue?._d);
					}
				}}
				placeholder="DD MMM YYYY"
				open={open}
				closeOnSelect
				onClose={handleClickAway}
				inputFormat="DD MMM YYYY"
				components={{
					OpenPickerIcon: () => {
						return <CalenderIcon fontSize="small" />;
					},
				}}
				{...props}
				renderInput={(params) => (
					<InputField
						fullWidth
						label={name}
						{...params}
						error={error}
						helperText={helperText}
						autoComplete={"off"}
						onClick={() => setOpen(true)}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};

export default DateField;
