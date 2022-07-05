import React from "react";
// Mui
import { IconButton, MenuItem, Stack } from "@mui/material";
import styled from "@emotion/styled";
// Custom Components
import InputField from "../../../../../components/InputField";
// Custom styles
import { StyledBox, StyledPageTitle } from "../../../../../theme/GlobalStyles";
import palette from "../../../../../theme/palette";
// Custom Icons
import { EditIcon } from "../../../../../constants/icons";
import { useState } from "react";

const Parameters = () => {
	const [field, setField] = useState({
		value: "",
		node: null,
	});

	const handleField = (value, node) => {
		setField({ value, node });
	};

	function findNode(node) {
		if (field.node && node === field.node + 1) return "bottomNode";
		else if (field.node && node === field.node - 1) return "topNode";
		else if (field.node && node === field.node) return "merge";
		else return "normal";
	}

	return (
		<Root>
			<Stack direction={"column"} justifyContent="flex-start">
				<StyledBox className={`field ${findNode(0)}`} sx={{ borderRadius: 0 }}>
					<StyledPageTitle>Parameters</StyledPageTitle>
					<InputField name="As of Week" value={0} select>
						<MenuItem value={0}>Select</MenuItem>
						<MenuItem value={1}>News</MenuItem>
					</InputField>
					<Stack mt={1}>
						<DateIndicator>07 Apr 2022</DateIndicator>
					</Stack>
				</StyledBox>

				{/* Select Fields  */}

				<MergeStack className={`field ${findNode(1)}`}>
					<InputField name="Role" value={""} select>
						<MenuItem value={"Analyst"}>Analyst</MenuItem>
						<MenuItem value={"FrontEnd"}>Developer</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("role", 1)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 1 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(2)}`}>
					<InputField name="Rate" value={""} select>
						<MenuItem value={"$940"}>$940</MenuItem>
						<MenuItem value={"$840"}>$840</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("rate", 2)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 2 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(3)}`}>
					<InputField name="Portfolio" value={0} select>
						<MenuItem value={0}>KoE</MenuItem>
						<MenuItem value={1}>KoE</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("portfolio", 3)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 3 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(4)}`}>
					<InputField name="Chargeable Ratio" value={0} select>
						<MenuItem value={0}>8000</MenuItem>
						<MenuItem value={1}>2000</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("chargeable", 4)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 4 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(5)}`}>
					<InputField name="Productivity Rate" value={0} select>
						<MenuItem value={0}>6500</MenuItem>
						<MenuItem value={1}>2000</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("productivity", 5)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 5 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(6)}`}>
					<InputField name="Agreement Days" value={0} select>
						<MenuItem value={0}>5.0</MenuItem>
						<MenuItem value={1}>2.0</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("days", 6)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 6 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(7)}`}>
					<InputField name="Salary" value={0} select>
						<MenuItem value={0}>$62,000</MenuItem>
						<MenuItem value={1}>$34,000</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("salary", 7)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 7 && <MergeEle />}
				</MergeStack>
				<MergeStack className={`field ${findNode(8)}`}>
					<InputField name="Windows Logon" value={0} select>
						<MenuItem value={0}>david.watling</MenuItem>
						<MenuItem value={1}>david.watling</MenuItem>
					</InputField>

					<IconButton
						style={{ marginBottom: "10px" }}
						onClick={() => handleField("windows", 8)}
					>
						<EditIcon bg={palette.primary.main} />
					</IconButton>
					{field.node === 8 && <MergeEle />}
				</MergeStack>
			</Stack>
		</Root>
	);
};

export default Parameters;

const Root = styled("div")(() => ({
	"& .topNode": {
		borderBottom: `1px solid ${palette.grey[300]}`,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	"& .bottomNode": {
		borderTop: `1px solid ${palette.grey[300]}`,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
}));

const MergeStack = styled((props) => (
	<Stack
		direction={"row"}
		alignItems="flex-end"
		justifyContent={"space-between"}
		spacing={1}
		{...props}
	/>
))(({ theme }) => ({
	position: "relative",
	padding: 15,
	borderLeft: `1px solid ${palette.grey[300]}`,
	borderRight: `1px solid ${palette.grey[300]}`,
	borderBottom: `1px solid ${palette.common.white}`,
	borderTop: `1px solid ${palette.common.white}`,
	"&:last-of-type": {
		borderBottom: `1px solid ${palette.grey[300]}`,
	},
	transition: "all .2s ease-in",

	"&.merge": {
		marginBlock: "21px",
		border: `1px solid ${palette.grey[300]}`,
		zIndex: 3,
		background: "#fff",
		borderRadius: "10px",
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		// "&::after": {
		// 	content: '""',
		// 	zIndex: -1,
		// 	position: "absolute",
		// 	top: -21,
		// 	right: -33,
		// 	width: 46,
		// 	height: 20,
		// 	borderRadius: "0 0 10px 0 ",
		// 	boxShadow: "1px 1px 0px 0 #DFE3E8",
		// },
		// "&::before": {
		// 	content: '""',
		// 	zIndex: -1,
		// 	position: "absolute",
		// 	bottom: -21,
		// 	right: -33,
		// 	width: 46,
		// 	height: 20,
		// 	borderRadius: "0 10px 0 0 ",
		// 	boxShadow: "1px 1px 0px 0 #DFE3E8",
		// },
		"& .MuiOutlinedInput-input": {
			border: `1px solid ${palette.secondary.main}`,
		},
	},
}));

const MergeEle = styled("div")(() => ({
	width: "99px",
	height: "22px",
	position: "absolute",
	top: 37,
	right: -58,
	border: "1px solid  #DFE3E8",
	borderColor: "transparent  #DFE3E8",
	background: "#fff",
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
	transform: "rotate(-90deg)",

	"&::after": {
		content: '""',
		position: "absolute",

		height: "10px",
		width: "20px",

		bottom: 0,
		right: "-20px",
		border: "1px solid  #DFE3E8",
		borderColor: "transparent transparent  #DFE3E8 transparent",
		borderRadius: "0 0 0 10px",
		boxShadow: " -9px 0 0 0 #fff",
		borderRight: "none",
	},

	"&::before": {
		content: '""',
		position: "absolute",

		height: "10px",
		width: "20px",

		bottom: 0,
		left: "-20px",
		border: "1px solid  #DFE3E8",
		borderColor: "transparent  #DFE3E8 transparent transparent",
		borderRadius: "0 0 10px 0",
		boxShadow: " 11px 0 0 0 #fff",
		borderLeft: "none",
	},
}));

const DateIndicator = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: theme.spacing(0.8),
	paddingInline: theme.spacing(2),
	backgroundColor: palette.grey[200],
	border: `1px solid ${palette.grey[300]}`,
	width: "fit-content",
	margin: "auto",
	borderRadius: 3,
	color: palette.grey[600],
}));
