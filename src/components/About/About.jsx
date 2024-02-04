import { Box, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import NoteIcon from "@mui/icons-material/Note";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import PixIcon from "@mui/icons-material/Pix";
import "./About.css";
const About = () => {
  return (
    <Box id="about">
      <Box className="container">
        <Box className="about">
          <Typography className="menu" sx={{ fontSize: "15px", color: "gray" }}>
            MENU
          </Typography>
          <Box className="about_together">
            <Box className="together">
              <HomeIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "orange",
                  borderRadius: "5px",
                  color: "white",
                }}
              ></HomeIcon>
              <Typography sx={{ color: "white" }}>Discover</Typography>
            </Box>
            <Box className="together">
              <ArrowForwardIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></ArrowForwardIcon>
              <Typography sx={{ color: "gray" }}>Trending</Typography>
            </Box>
            <Box className="together">
              <SmartDisplayIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></SmartDisplayIcon>
              <Typography sx={{ color: "gray" }}>Steaming</Typography>
            </Box>
            <Box className="together">
              <PlaylistAddCheckIcon
                sx={{
                  fontSize: "25pxpx",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></PlaylistAddCheckIcon>
              <Typography sx={{ color: "gray" }}>Playlist</Typography>
            </Box>
            <Box className="together">
              <NoteIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></NoteIcon>
              <Typography sx={{ color: "gray" }}>Bookmark</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid #9898984d   ",
              width: "100px",
              padding: "25px ",
            }}
          ></Box>
          <Box sx={{ padding: "20px 0" }} className="about_together">
            <Typography
              className="category"
              sx={{ fontSize: "15px", color: "gray" }}
            >
              CATEGORY
            </Typography>
            <Box className="together">
              <LiveTvIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></LiveTvIcon>
              <Typography sx={{ color: "gray" }}> Live Stream</Typography>
            </Box>
            <Box className="together">
              <AssessmentIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></AssessmentIcon>
              <Typography sx={{ color: "gray" }}>Tutorial</Typography>
            </Box>
            <Box className="together">
              <PixIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></PixIcon>
              <Typography sx={{ color: "gray" }}>Competition</Typography>
            </Box>
            <Box className="together">
              <GroupsIcon
                sx={{
                  fontSize: "25px",
                  backgroundColor: "#9898984d",
                  borderRadius: "5px",
                  color: "gray",
                }}
              ></GroupsIcon>
              <Typography sx={{ color: "gray" }}>Community</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
