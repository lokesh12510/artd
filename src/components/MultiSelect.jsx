import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

export default function MultiSelect({ height = "auto" }) {
	return (
		<Autocomplete
			multiple
			id="tags-filled"
			options={top100Films.map((option) => option.title)}
			sx={{ height: "100%" }}
			renderTags={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip variant="outlined" label={option} {...getTagProps({ index })} />
				))
			}
			renderInput={(params) => (
				<StyledTextField {...params} variant="outlined" height={height} />
			)}
		/>
	);
}

const StyledTextField = styled(TextField)(({ theme, height }) => ({
	width: "100%",
	"& .MuiOutlinedInput-root": {
		width: "100%",
		minHeight: height,
		alignItems: "flex-start",
		backgroundColor: theme.palette.common.white,
		paddingBlock: theme.spacing(0.5),
		"& .MuiChip-root": {
			borderRadius: 4,
			backgroundColor: theme.palette.grey[500_12],
			borderColor: theme.palette.grey[500_56],
		},
	},
	"& .MuiOutlinedInput-notchedOutline": {
		border: `1px solid ${theme.palette.inputBorder}`,
	},
}));

const top100Films = [
	{ title: "Demo Name 1", year: 1994 },
	{ title: "Demo Name 2", year: 1972 },
	{ title: "Demo Name 3", year: 1974 },
	{ title: "Demo Name 4", year: 2008 },
	{ title: "Demo Name 5", year: 1957 },
	{ title: "Demo Name 6", year: 1993 },
];
