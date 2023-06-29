import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import "./Navbar.css";

const Navbar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 10,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="container">
      <div>
        <Button
          className="logo-btn"
          startIcon={
            <img
              src="https://driffle.com/logo/driffle-logo-white.svg"
              alt="Driffle"
            />
          }
        ></Button>
      </div>
      <div>
        <IconButton className="icon-btn">
          <LanguageIcon style={{ color: "#FFF" }} />
          <Typography
            variant="body1"
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontFamily: "Roobert",
              fontWeight: 700,
              lineHeight: "14px",
              margin: "0 8px",
            }}
          >
            {` India (English) `}
          </Typography>
          <div className="ellipse"></div>
          <Typography
            variant="body1"
            style={{
              color: "#FFF",
              fontSize: "14px",
              fontFamily: "Roobert",
              fontWeight: 700,
              lineHeight: "14px",
              marginLeft: "8px",
            }}
          >
            {` INR `}
          </Typography>
        </IconButton>
        <IconButton className="icon-btn">
          <FavoriteIcon style={{ color: "#FFF", margin: "0 16px" }} />
        </IconButton>
        <IconButton className="icon-btn">
          <StyledBadge badgeContent={2} color="primary">
            <LocalMallIcon style={{ color: "#FFF", margin: "0 16px" }} />
          </StyledBadge>
        </IconButton>
        <IconButton className="icon-btn">
          <AccountCircleIcon style={{ color: "#FFF", margin: "0 16px" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
