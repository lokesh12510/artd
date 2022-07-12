import React from "react";
// Mui
import styled from "@emotion/styled";
import { FormGroup, Grid, Stack, Typography } from "@mui/material";
// Components
import AccordionWrapper from "../../../../components/AccordionWrapper";
import CheckboxField from "../../../../components/CheckboxField";
import DateField from "../../../../components/DateField";
import InputField from "../../../../components/InputField";
import RadioField from "../../../../components/RadioField";
// Custom Icons
import { AddIcon } from "../../../../constants/icons";
// Custom Styles
import { CustomBox, FormBtn, StyledBox } from "../../../../theme/GlobalStyles";

const ProposalForm = () => {
	return (
		<AccordionWrapper title={"Proposal/Project"}>
			<StyledBox>
				<Grid container spacing={2}>
					{/* Budget section */}
					<Grid item xs={12} sm={6}>
						<Stack style={{ height: "100%" }}>
							<TitleContainer
								direction={"row"}
								justifyContent="space-between"
								mb={1}
								alignItems="center"
							>
								<Typography variant="body1" color={"primary"} fontWeight={"600"}>
									Budget
								</Typography>
							</TitleContainer>
							<CustomBox>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<RadioField
											label={"Type"}
											dir="row"
											radioList={[
												{ label: "Estimated", value: "Estimated" },
												{ label: "Contracted", value: "Contracted" },
											]}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField label="Budget" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField label="Variation" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<div>
											<InputField label="Budget Total" />

											<CheckboxField
												label={"GST not applicable?"}
												color="info"
												style={{ paddingBlock: 1 }}
											/>
										</div>
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField label="Excluding GST" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField label="Less Expenses" />
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField label="Consultancy time budget" />
									</Grid>
								</Grid>
							</CustomBox>
						</Stack>
					</Grid>
					{/* Budget section */}
					{/* Project planning section */}
					<Grid item xs={12} sm={6}>
						<Stack style={{ height: "100%" }}>
							<TitleContainer
								direction={"row"}
								justifyContent="space-between"
								mb={1}
								alignItems="center"
							>
								<Typography variant="subtitle1" color={"primary"} fontWeight={"600"}>
									Project Planning
								</Typography>
								<FormBtn
									variant="outlined"
									color="primary"
									startIcon={<AddIcon color="primary" />}
								>
									Add project plan
								</FormBtn>
							</TitleContainer>
							<CustomBox>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<CheckboxField label={"Ethics required"} />
									</Grid>
									<Grid item xs={12} sm={6}>
										<DateField label={"Ethics destroy date"} />
									</Grid>
									<Grid item xs={12} sm={6}>
										<DateField label={"Contract signed date"} />
									</Grid>
									<Grid item xs={12} sm={6}>
										<DateField label={"Contract filed date"} />
									</Grid>
									<Grid item xs={12}>
										<FormGroup row sx={{ justifyContent: "space-between" }}>
											<CheckboxField label={"QA completed"} />
											<CheckboxField label={"QA not required"} />
											<CheckboxField label={"All task completed"} />
										</FormGroup>
									</Grid>
									<Grid item xs={12} sm={6}>
										<DateField label={"Completion Year"} />
									</Grid>
								</Grid>
							</CustomBox>
						</Stack>
					</Grid>
					{/* Project planning section */}
				</Grid>
			</StyledBox>
		</AccordionWrapper>
	);
};

export default ProposalForm;

const TitleContainer = styled(Stack)({
	minHeight: 42,
});
