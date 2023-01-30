import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductCard = ({ products }) => {
  const { name, price, image } = products;
  const amount = price.toLocaleString();
  return (
    <Card
      sx={{
        height: "15rem",
        width: { xs: "10rem", md: "12rem" },
        mt: 1,
        mb: 1,
        transition: "all 300ms ease-in-out",
        "&:hover": { transform: "scale(1.05) " },
        cursor: "pointer",
      }}
    >
      <Box
        sx={{ height: "7rem" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={require(`../images/${image}`)}
          style={{
            width: "500px",
            height: "190px",
            objectFit: "scale-down",
          }}
          alt="categoryImage"
        />
      </Box>
      <CardContent sx={{ marginBottom: ".5rem", marginTop: "1.8rem" }}>
        <Typography variant={"p"} component="p" gutterTop>
          {name}
        </Typography>
        <Typography
          variant={"h6"}
          component="h6"
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >{`UGX ${amount}`}</Typography>
        <Typography
          variant={"p"}
          component="p"
          sx={{ textDecoration: "line-through", fontSize: ".9rem" }}
        >{`UGX ${amount}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
