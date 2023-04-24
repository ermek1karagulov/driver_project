import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AvatarDrivers from "../avatar/Avatar";
import { Link } from "react-router-dom";
import API from "../../api/API";

export default function AppBarr() {
  const [avatar, setAvatar] = useState();
  const [isAuth, setAuth] = useState(false);

  async function getDriverProfile() {
    try {
      const res = await API.get("/drivers/profile");
      setAvatar(res.data.avatar);
      setAuth(true);
    } catch {
      setAuth(false);
      console.log("error");
    }
  }

  useEffect(() => {
    getDriverProfile();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1rem" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {isAuth ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.1 }}
            >
              <Link to="/profile">
                <AvatarDrivers avatar={avatar} />
              </Link>
            </IconButton>
          ) : (
            <Link to="/registration">
              <button
                style={{
                  color: "white",
                  width: "50px",
                  fontSize: "8px",
                  fontWeight: 300,
                  height: "25px",
                  borderColor: "white",
                  borderRadius: "10px",
                  background: "blue",
                }}
              >
                Войти как водитель
              </button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
