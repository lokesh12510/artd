import { Stack } from "@mui/material";
import React from "react";
import ActionList from "./ActionList/Index";
import ProjectList from "./ProjectList/Index";
import ProposalList from "./ProposalList/Index";
import TaskList from "./TaskList/Index";

const Home = () => {
	return (
		<Stack spacing={2}>
			<TaskList />
			<ProjectList />
			<ProposalList />
			<ActionList />
		</Stack>
	);
};

export default Home;
