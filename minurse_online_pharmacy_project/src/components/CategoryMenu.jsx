import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categories }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        backgroundColor: "#fff",
        mb: "1rem",
        borderRadius: "5px",
        //mt: { xs: "9rem", md: "6.5rem" },
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{
          p: ".5rem",
          borderBottom: "2px solid #1976d2",
          fontWeight: 500,
          mb: 1,
        }}
      >
        Categories
      </Typography>
      {categories.map((category, index) => {
        return (
          <Link
            to={`/${category}`}
            key={index}
            style={{
              cursor: "pointer",
              color: "#1c2126",
              transition: "all 300ms ease-in-out",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography
              p="0.3rem .8rem 0.3rem 1rem"
              mr="1rem"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 200ms ease-in-out",
                textDecoration: "none",
                "&:hover": {
                  fontSize: "1.00009rem",
                  fontWeight: 700,
                  color: "#1976d2",
                },
              }}
            >
              {category}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

export default CategoryMenu;
