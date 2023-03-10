import React, { useEffect, useState } from "react";
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
  TextField,
} from "@mui/material";
import {
  AccountCircle,
  ArrowDropDownOutlined,
  LocationOnOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { Form, Link, useSubmit } from "react-router-dom";
import logo from "../images/logo.png";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const menuId = 1;
  const q = "";
  const submit = useSubmit();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState({
    name: "Masaba",
    location: "Uganda",
  });
  //cartACTIONS
  const { itemList, totalQuantity } = useSelector((state) => state.cart);

  //CARTACTIONS

  const open = Boolean(anchorEl);

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchItems = (e) => {
    e.preventDefault();
    submit(e.currentTarget.form);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      submit(e.currentTarget.form);
    }
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          bottom: "auto",
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
            height: "5.5rem",
            display: "flex",
            minWidth: "70vw",
            maxWidth: { md: "90vw", lg: "80vw" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box display="flex" gap="2rem" mr="2rem">
            <Box
              component="img"
              sx={{ height: 60, mt: 0.1 }}
              alt="Logo"
              src={logo}
            />
            <Box
              display="flex"
              alignItems="flex-end"
              sx={{
                p: 0.5,
                cursor: "pointer",
                "&:hover": { border: "2px solid #1976d2" },
              }}
            >
              <LocationOnOutlined
                size="small"
                style={{ marginBottom: ".3rem" }}
              />
              <Box display="flex" flexDirection="column">
                <Typography component="span" color="#1c2126">
                  Deliver to
                </Typography>
                <Typography component="span" fontWeight="bold">
                  {user.location}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Form
              action={`/catalog?${q}`}
              id="search-form"
              role="search"
              style={{ maxWidth: { md: "60%", lg: "70%" }, flexGrow: 1 }}
            >
              <FormControl
                sx={{ width: "100%", mb: 1, mt: 1 }}
                variant="filled"
              >
                <TextField
                  id="q"
                  name="q"
                  size="small"
                  variant="filled"
                  defaultValue={q}
                  label="Search Products,brands and categories"
                  placeholder="Search"
                  onKeyPress={handleSearch}
                  onChange={(event) => {
                    const isFirstSearch = q == null;
                    submit(event.currentTarget.form, {
                      replace: !isFirstSearch,
                    });
                    if (event.key === "Enter") {
                    }
                  }}
                />
              </FormControl>
            </Form>
            <Box display="flex">
              <Box>
                <Box sx={{ mt: 1 }} onClick={handleClick}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    color="inherit"
                    display="flex"
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
                      <Typography fontWeight="500">
                        {user ? `Hi,${user.name}` : "Account"}
                      </Typography>
                      <ArrowDropDownOutlined />
                    </Box>
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 0.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 8,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>

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
                <Link
                  to={`/cart`}
                  style={{
                    display: "flex",
                    color: "#1c2126",
                    transition: "all 300ms ease-in-out",
                  }}
                  className="cart_link"
                >
                  {itemList.length ? (
                    <Badge
                      badgeContent={itemList.length && totalQuantity}
                      color="error"
                    >
                      <ShoppingCartOutlined />
                    </Badge>
                  ) : (
                    <ShoppingCartOutlined />
                  )}
                  <Box ml=".6rem">
                    <Typography fontWeight="500">Cart</Typography>
                  </Box>
                </Link>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          bottom: "auto",
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
            <MenuOutlined />
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
              {itemList.length ? (
                <Badge badgeContent={itemList.legth} color="error">
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
