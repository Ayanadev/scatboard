import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  return (
    <Box id="header">
      <Box className="container">
        <Box className="header">
          <Box className="header_title">
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
            >
              skateboard{" "}
            </Typography>
            <Box className="header_about">
              <Search
                sx={{
                  background: "#9898984d",
                  height: "40px",
                  borderRadius: "13px",
                }}
              >
                <SearchIconWrapper sx={{ color: "gray" }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ width: "800px", color: "gray" }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box className="avatar">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography sx={{ color: "white" }}>Thomas</Typography>
              <NotificationsIcon sx={{ color: "gray" }}></NotificationsIcon>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
