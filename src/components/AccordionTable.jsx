import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import palette from "../theme/palette";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionTable({ title, children }) {
	const [expanded, setExpanded] = React.useState(true);

	const handleChange = () => {
		console.log(expanded);
		setExpanded((e) => !e);
	};

	console.log(expanded);
	return (
		<Root expanded={expanded} onChange={handleChange}>
			<AccordionSummary expandIcon={<ArrowDropDownIcon sx={{ color: palette.common.white }} fontSize="large" />}>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Root>
	);
}

const Root = styled(Accordion)(({ theme }) => ({
	borderTopRightRadius: 4,
	borderTopLeftRadius: 4,
	overflow: "hidden",

	"& .MuiAccordionSummary-root": {
		backgroundColor: palette.secondary.main,
	},
	"& .MuiAccordionDetails-root": {
		padding: 0,
		"& .MuiTableCell-head": {
			backgroundColor: palette.hightLight,
			borderBottom: `1px solid ${palette.secondary.main}`,
			color: palette.primary.main,
			textTransform: "uppercase",
		},
		"& .MuiTableHead-root": {
			border: `1px solid ${palette.secondary.main}`,
		},
		"& .MuiTableCell-root": {
			padding: 10,
		},
		"& .MuiTableRow-root": {
			"&:nth-of-type(even)": {
				backgroundColor: palette.grey[100],
			},
			// hide last border
			"&:last-child td, &:last-child th": {
				border: 0,
			},
		},
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
}));
