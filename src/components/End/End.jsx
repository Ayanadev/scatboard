import React from "react";
import "./End.css";
import { Avatar, Box, Typography } from "@mui/material";
import img from "../../img/photo_5330018964132189238_x.jpg";

const End = () => {
  return (
    <Box id="end">
      <Box className="container">
        <Box className="end_title">
          <Typography sx={{ fontSize: "35px", padding: "10px" }}>
            Most Watched
          </Typography>
        </Box>
        <Box className="end_general">
          <Box className="end">
            <img className="img_one" src={img} alt="" />
            <Box className="andy">
              <Typography sx={{ color: "gray", padding: "10px 0" }}>
                Andy William
              </Typography>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            </Box>
            <Typography variant="h6">
              Bacic how to ride your <br />
              scateboard comfortly <br />
              <span style={{ fontSize: "15px", color: "gray" }}>
                54K views . week ago
              </span>
            </Typography>
          </Box>
          <Box className="end">
            <img className="img_one" src={img} alt="" />
            <Box className="andy">
              <Typography sx={{ color: "gray", padding: "10px 0" }}>
                Andy William
              </Typography>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            </Box>
            <Typography variant="h6">
              Bacic how to ride your <br />
              scateboard comfortly <br />
              <span style={{ fontSize: "15px", color: "gray" }}>
                54K views . week ago
              </span>
            </Typography>
          </Box>
          <Box className="end">
            <img className="img_one" src={img} alt="" />
            <Box className="andy">
              <Typography sx={{ color: "gray", padding: "10px 0" }}>
                Andy William
              </Typography>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            </Box>
            <Typography variant="h6">
              Bacic how to ride your <br />
              scateboard comfortly <br />
              <span style={{ fontSize: "15px", color: "gray" }}>
                54K views . week ago
              </span>
            </Typography>
          </Box>
          <Box className="end">
            <img className="img_one" src={img} alt="" />
            <Box className="andy">
              <Typography sx={{ color: "gray", padding: "10px 0" }}>
                Andy William
              </Typography>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            </Box>
            <Typography variant="h6">
              Bacic how to ride your <br />
              scateboard comfortly <br />
              <span style={{ fontSize: "15px", color: "gray" }}>
                54K views . week ago
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default End;
