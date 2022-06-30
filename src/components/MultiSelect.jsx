import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function MultiSelect() {
	return (
		<div>
			<Autocomplete
				multiple
				id="tags-filled"
				options={top100Films.map((option) => option?.title)}
				freeSolo
				renderTags={(value, getTagProps) =>
					value.map((option, index) => (
						<Chip variant="outlined" label={option} {...getTagProps({ index })} />
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="outlined"
						label="freeSolo"
						placeholder="Favorites"
					/>
				)}
			/>
		</div>
	);
}

const top100Films = [];
