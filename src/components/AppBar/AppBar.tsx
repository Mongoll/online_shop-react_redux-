import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { AppState } from "../../types";
import Search from "../Search/Search";
import { setLogOutUser } from "../../redux/actions";

const pages = ["all-products", "Categories"];

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cartReducer.cart);
  const user = useSelector((state: AppState) => state.userReducer.currentUser);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const badgeCount = cart
    .filter((userCard) => userCard.user_id === user?.id)
    .reduce((a, v) => (a = a + v.quantity), 0);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page}>
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Search />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to={"/cart"}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                {user && (
                  <Badge badgeContent={badgeCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                )}
              </IconButton>
            </Link>
            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.avatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key="profile" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  {user.role === "admin" && (
                    <MenuItem key="dashboard">
                      <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                  )}
                  <MenuItem
                    key="logaut"
                    onClick={() => dispatch(setLogOutUser(user as any))}
                  >
                    <Typography textAlign="center">LogOut</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {!user && (
              <Link to={"/login"}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
