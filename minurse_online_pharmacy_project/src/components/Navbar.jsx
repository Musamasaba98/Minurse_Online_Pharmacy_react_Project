import React, { useState } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from "@mui/material";
import {
  AccountCircle,
  ArrowDropDownOutlined,
  Menu,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Form } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
  const menuId = 1;
  const [user, setUser] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([
    "musa",
    "masaba",
    "wakulya",
    "mukunde",
    "shamirah",
  ]);
  const handleSearchItems = () => setShowPassword((show) => !show);
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#1976d2",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100vw",
            display: "flex",
            minWidth: "70vw",
            maxWidth: { md: "90vw", lg: "70vw" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 1 }}
            >
              <Menu />
            </IconButton>
            <Box
              component="img"
              sx={{ height: 40, mt: 1 }}
              alt="Logo"
              src={logo}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Form style={{ maxWidth: "50%", flexGrow: 1 }}>
              <FormControl
                sx={{ width: "100%", mb: 1, mt: 1 }}
                variant="filled"
              >
                <InputLabel htmlFor="filter-items">Search</InputLabel>
                <FilledInput
                  id="filter-items"
                  type="text"
                  name="filter-items"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Search for items"
                        onClick={handleSearchItems}
                        edge="end"
                      >
                        <SearchOutlined />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Form>

            <Box sx={{ display: { md: "flex" }, gap: "1.5rem" }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                display="flex"
                justifyContent="space-between"
                width="2rem"
                sx={{
                  color: "#1c2126",
                  transition: "all 300ms ease-in-out",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#1976d2",
                  },
                }}
              >
                <AccountCircle />
                <Box ml=".6rem" display="flex" alignItems="flex-end">
                  <Typography fontWeight="900">Account</Typography>
                  <ArrowDropDownOutlined />
                </Box>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show shopping cart items"
                sx={{
                  color: "#1c2126",
                  transition: "all 300ms ease-in-out",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#1976d2",
                  },
                }}
              >
                {cartItems.length ? (
                  <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartOutlined />
                  </Badge>
                ) : (
                  <ShoppingCartOutlined />
                )}
                <Box ml=".6rem">
                  <Typography fontWeight="900">Cart</Typography>
                </Box>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#1976d2",
          display: { xs: "block", md: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Box
            component="img"
            sx={{ height: 40, mt: 1 }}
            alt="Logo"
            src={logo}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show shopping cart items"
              color="inherit"
            >
              {cartItems ? (
                <Badge badgeContent={cartItems.legth} color="error">
                  <ShoppingCartOutlined />
                </Badge>
              ) : (
                <ShoppingCartOutlined />
              )}
            </IconButton>
          </Box>
        </Toolbar>
        <Form style={{ width: "94%", margin: "0 auto" }}>
          <FormControl
            sx={{ width: "100%", mb: 1, mt: 1 }}
            variant="filled"
            //width: "25ch",
          >
            <InputLabel htmlFor="filter-items">Search</InputLabel>
            <FilledInput
              id="filter-items"
              type="text"
              name="filter-items"
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Search for items"
                    onClick={handleSearchItems}
                    edge="end"
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Form>
      </AppBar>
    </Box>
  );
};

export default Navbar;
