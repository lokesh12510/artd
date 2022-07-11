import React, { useState } from "react";
// Mui
import styled from "@emotion/styled";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
// Redux
import { useDispatch } from "react-redux";
import { authLogin } from "../../../app/slices/authSlice";
// Custom Components
import InputField from "../../../components/InputField";
// Custom Styles
import { StyledBtn } from "../../../theme/GlobalStyles";
// Router
import { useNavigate } from "react-router-dom";
import { urls } from "../../admin/urls";
// Api
import * as authApi from "../api/authApi";

const initialState = {
	email: "",
	password: "",
};

const Login = () => {
	// State
	const [values, setValues] = useState(initialState);
	const handleValueChange = (e) => {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		// Submit logic
		authApi
			.login(values)
			.then((response) => {
				const token = response.data.token;
				const user = response.data.user;

				dispatch(authLogin({ token, user }));

				navigate(urls.Home); // On Success navigate to home route
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<StyledContainer>
			<Box p={3} component="form" onSubmit={handleLogin}>
				<Stack spacing={3}>
					<InputField name="email" value={values.email} onChange={handleValueChange} />
					<InputField
						name="password"
						value={values.password}
						onChange={handleValueChange}
					/>

					<StyledBtn variant="contained" color="primary" type="submit">
						Login
					</StyledBtn>
				</Stack>
			</Box>
		</StyledContainer>
	);
};

export default Login;

const StyledContainer = styled(Container)(() => ({
	minHeight: "100vh",
	display: "grid",
	placeItems: "center",
	"& .MuiBox-root": {
		minWidth: 400,
	},
}));
