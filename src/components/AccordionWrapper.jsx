import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import palette from "../theme/palette";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionWrapper({ title, children }) {
	const [expanded, setExpanded] = React.useState(true);

	const handleChange = () => {
		setExpanded((i) => !i);
	};

	return (
		<Root expanded={expanded} onChange={handleChange}>
			<AccordionSummary
				expandIcon={
					<ArrowDropDownIcon sx={{ color: palette.common.white }} fontSize="large" />
				}
			>
				<Typography variant="subtitle1" textTransform={"uppercase"}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Root>
	);
}

const Root = styled(Accordion)(({ theme }) => ({
	boxShadow: "none",
	borderRadius: 10,
	overflow: "hidden",
	"&:last-of-type": {
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	"&:first-of-type": {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},

	"& .MuiAccordionSummary-root": {
		backgroundColor: palette.secondary.main,
	},
	"& .MuiAccordionDetails-root": {
		padding: 0,
		"& .MuiTableCell-head": {
			backgroundColor: palette.highlight,
			borderBottom: `1px solid ${palette.secondary.main}`,
			color: palette.primary.main,
			textTransform: "uppercase",
		},
		"& .MuiTableHead-root": {
			border: `1px solid ${palette.primary.borderLight}`,
		},
		"& .MuiTableCell-root": {
			padding: 10,
		},
		// hide last border
		"&:last-child td, &:last-child th": {
			border: 0,
		},
	},
	"& .stripped": {
		"& .MuiTableRow-root": {
			"&:nth-of-type(even)": {
				backgroundColor: palette.grey[100],
			},
		},
	},
	"&.Mui-expanded": {
		marginBottom: 0,
	},
	"& .MuiAccordionSummary-content": {
		"& .MuiTypography-root": {
			color: palette.common.white,
		},
	},
	"& .MuiAccordionSummary-root.Mui-expanded": {
		minHeight: 45,
		margin: 0,
	},
	"& .MuiAccordionSummary-content.Mui-expanded": {
		margin: 0,
	},

	// Data Grid
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: palette.secondary.light,
		border: `1px solid ${palette.secondary.borderLight}`,
		"& .MuiDataGrid-columnHeaderTitle": {
			color: palette.primary.main,
			textTransform: "uppercase",
		},
	},
	"& .MuiDataGrid-row": {
		"&:nth-of-type(even)": {
			backgroundColor: palette.grey[50],
		},
	},
	"& .MuiDataGrid-cell": {
		color: palette.dark.dark,
	},
}));
