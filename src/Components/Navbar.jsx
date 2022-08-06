import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../store/auth/action";
export const Navbar = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <Box
      variant="div"
      sx={{
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        justifyContent: "end",
        height: "40px",
      }}
    >
      <Box variant="div" sx={{ margin: "5px", marginRight: "30px" }}>
        {token ? (
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              height: "100%",
              "&:hover": {
                backgroundColor: "aliceblue",
              },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                height: "100%",
                "&:hover": {
                  backgroundColor: "aliceblue",
                },
              }}
            >
              Login
            </Button>
          </Link>
        )}

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "white",
            height: "100%",
            "&:hover": {
              backgroundColor: "aliceblue",
            },
          }}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "white",
            height: "100%",
            "&:hover": {
              backgroundColor: "aliceblue",
            },
          }}
        >
          Cart
        </Button>
      </Box>
    </Box>
  );
};
