import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "./Block.css";
import logo from "../../img/photo_5330018964132189237_x.jpg";

const Block = () => {
  return (
    <Box id="block">
      <Box className="container">
        <Box className="block_title">
          <Typography sx={{ fontSize: "35px" }}>Discover</Typography>
        </Box>
        <img className="logo" src={logo} alt="" />
        <Box className="block">
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            How to do <br /> Bacic Jumping <br /> and how to <br /> landing
            safely
          </Typography>
          <Box className="block_avatar">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Typography sx={{ fontWeight: "bold", padding: "25px 0" }}>
              Thomas Hope <br />
              <span style={{ fontWeight: "normal" }}>
                53k views . 2 weeks ago{" "}
              </span>
            </Typography>
          </Box>
        </Box>

        {/* <img className="img" src={img} alt="" />
          <Box className="block_two">
            <Typography>
              Scateboard <br />
              Tips You need <br />
              to know
            </Typography>
            <Box className="avatar_two">
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Typography sx={{ fontWeight: "bold", padding: "25px 0" }}>
                Thomas Hope <br />
                <span style={{ fontWeight: "normal" }}>
                  53k views . 2 weeks ago{" "}
                </span>
              </Typography>
            </Box>
          </Box> */}
      </Box>
    </Box>
  );
};

export default Block;
