import { Box, Typography } from "@mui/material";
import React from "react";

const CategoryMenu = ({ categories }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        backgroundColor: "#fff",
        width: "18vw",
        mt: "5rem",
        mb: "1rem",
        borderRadius: "5px",
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
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              color: "#1c2126",
              transition: "all 300ms ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography
              p="0.3rem 1rem"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 200ms ease-in-out",
                "&:hover": {
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#1976d2",
                },
              }}
            >
              {category}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CategoryMenu;
