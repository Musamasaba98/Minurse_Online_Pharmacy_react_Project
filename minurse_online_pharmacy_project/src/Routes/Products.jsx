import { ArrowForwardIos } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useLoaderData();

  let categories = [];
  products.map((p) => (categories = [...categories, ...p.category]));
  const finalCategories = [...new Set(categories)];
  return (
    <>
      <Box
        sx={{
          marginTop: "6.3rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: { md: "80vw", lg: "80vw" },
          margin: "6.3rem auto",
          marginBottom: 0,
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}
        >
          Home
        </Link>
        <ArrowForwardIos sx={{ fontSize: "1rem" }} />
        <Typography variant="span" component="span">
          All Products
        </Typography>
      </Box>
      <Box
        container
        spacing={2}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          minWidth: "70vw",
          maxWidth: { md: "80vw", lg: "80vw" },
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "0 auto",
          gap: "1rem",
          overflowX: { xs: "hidden", md: "visible" },
        }}
      >
        <CategoryMenu categories={finalCategories} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            width: { md: "100%", xs: "96%" },
            //mt: { xs: "9rem", md: "6.5rem" },
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard products={product} />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
export const loader = async () => {
  const response = await fetch("http://localhost:5000/products");
  const products = await response.json();
  return products;
};
export default Products;
