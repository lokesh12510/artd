import { styled } from "@mui/material/styles";
import React from "react";
import {
  Box,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import palette from "../../../../theme/palette";
import AppIcons, { HomeIcon } from "../../../../constants/icons";
import { StyledInput } from "../../../../theme/GlobalStyles";

const Header = () => {
  return (
    <Root>
      {/* Page title */}
      <PageTitle variant="h6" color="primary" fontWeight={"600"}>
        Project Planning
      </PageTitle>
      {/* SearchBar */}
      <SearchBar
        placeholder="search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={AppIcons.Search} alt="search" />
            </InputAdornment>
          ),
        }}
      />

      {/* Breadcrumb */}
      <BreadcrumbWrapper
        direction={"row"}
        alignItems="center"
        justifyContent={"space-evenly"}
      >
        <BreadcrumbItem>
          <HomeIcon bg={palette.grey[400]} />
        </BreadcrumbItem>
        <BreadcrumbDivider orientation="vertical" variant="middle" flexItem />
        <BreadcrumbItem>
          <Typography className="title" variant="body2" fontWeight={"bold"}>
            Add Project
          </Typography>
        </BreadcrumbItem>
        <BreadcrumbDivider orientation="vertical" variant="middle" flexItem />
        <BreadcrumbItem active>
          <Typography
            active
            className="title"
            variant="body2"
            fontWeight={"bold"}
          >
            Project Planning
          </Typography>
        </BreadcrumbItem>
      </BreadcrumbWrapper>
    </Root>
  );
};

export default Header;

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1.2),
}));

const SearchBar = styled(StyledInput)(({ theme }) => ({
  maxWidth: "550px",
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  marginLeft: 40,
  marginRight: 15,
  [theme.breakpoints.down("md")]: {
    marginLeft: 30,
    marginRight: 10,
    fontSize: 16,
  },
}));

const BreadcrumbWrapper = styled(Stack)(({ theme }) => ({}));

const BreadcrumbItem = styled(Typography)(({ theme, active }) => ({
  paddingInline: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    paddingInline: theme.spacing(1.2),
  },
  paddingRight: active ? 0 : theme.spacing(2),
  "&:first-child": {
    paddingInline: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      paddingInline: theme.spacing(2),
    },
  },
  "& .title": {
    color: active ? palette.primary.main : palette.grey[400],
    gap: theme.spacing(1),
  },
}));
const BreadcrumbDivider = styled(Divider)(({ theme, active }) => ({
  height: 15,
  backgroundColor: palette.border,
  borderWidth: 0.5,
  marginBlock: 5,
}));