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
	// Active field State
	const [field, setField] = useState({
		value: "",
		node: null,
	});

	const handleField = (value, node) => {
		setField({ value, node });
	};

	// Func to find the active and near to active nodes
	function findNode(node) {
		if (field.node && node === field.node + 1) return "bottomNode";
		else if (field.node && node === field.node - 1) return "topNode";
		else if (field.node && node === field.node) return "merge";
		else return "normal";
	}

	return (
		<Root>
			<Stack direction={"column"} justifyContent="flex-start">
				{/* Section 1 */}
				<StyledBox
					className={`field ${findNode(0)}`}
					sx={{ borderRadius: 0, borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
				>
					<StyledPageTitle mb={2}>Parameters</StyledPageTitle>
					<InputField name="As of Week" value={0} select>
						<MenuItem value={0}>Select</MenuItem>
						<MenuItem value={1}>News</MenuItem>
					</InputField>
					<Stack mt={1}>
						<DateIndicator>07 Apr 2022</DateIndicator>
					</Stack>
				</StyledBox>
				{/* Section 1 */}

				{/* Section 2  */}

				{/* Role */}
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

				{/* Rate */}
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

				{/* Portfolio */}
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

				{/* Chargeable Ratio */}
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

				{/* Productivity Rate */}
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

				{/* Agreement Days */}
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

				{/* Salary */}
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

				{/* Windows Logon */}
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

				{/* Section 2  */}
			</Stack>
		</Root>
	);
};

export default Parameters;

// Styles
const Root = styled("div")(() => ({
	"& .topNode": {
		borderBottom: `1px solid ${palette.border}`,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingBottom: 15,
	},
	"& .bottomNode": {
		borderTop: `1px solid ${palette.border}`,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingTop: 15,
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
	paddingInline: 15,
	paddingBlock: 7,
	borderLeft: `1px solid ${palette.border}`,
	borderRight: `1px solid ${palette.border}`,
	borderBottom: `1px solid ${palette.common.white}`,
	borderTop: `1px solid ${palette.common.white}`,
	"&:last-of-type": {
		borderBottom: `1px solid ${palette.border}`,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		paddingBottom: 15,
	},
	transition: "all .2s ease-in",

	"&.merge": {
		paddingBlock: 15,
		marginBlock: "21px",
		border: `1px solid ${palette.border}`,
		zIndex: 3,
		background: "#fff",
		borderRadius: "10px",
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		mozBorderRadiusTopLeft: 10,
		mozBorderRadiusTopRight: 10,
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
	width: "98.4px",
	height: "22px",
	position: "absolute",
	top: 37,
	right: -57,
	border: `1px solid ${palette.border}`,
	borderColor: `transparent ${palette.border}`,
	background: "#fff",
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
	mozBorderRadiusTopLeft: 0,
	mozBorderRadiusTopRight: 0,
	transform: "rotate(-90deg)",

	"&::after": {
		content: '""',
		position: "absolute",

		height: "10px",
		width: "20px",

		bottom: 0,
		right: "-20px",
		border: `1px solid ${palette.border}`,
		borderColor: `transparent transparent ${palette.border} transparent`,
		borderRadius: "0 0 0 10px",
		mozBorderRadius: "0 0 0 10px",
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
		border: `1px solid ${palette.border}`,
		borderColor: `transparent ${palette.border} transparent transparent`,
		borderRadius: "0 0 10px 0",
		mozBorderRadius: "0 0 10px 0",
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
