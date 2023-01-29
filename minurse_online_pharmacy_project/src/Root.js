import { Box } from "@mui/system";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryMenu from "./components/CategoryMenu";
import Navbar from "./components/Navbar";
import ShowCategory from "./components/ShowCategory";
import "./index.css";

function Root() {
  const products = useLoaderData();
  let categories = [];
  products.map((p) => (categories = [...categories, ...p.category]));
  const finalCategories = [...new Set(categories)];
  return (
    <>
      <Navbar />
      <Box
        spacing={2}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          minWidth: "70vw",
          maxWidth: { md: "90vw", lg: "70vw" },
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "0 auto",
        }}
      >
        <CategoryMenu categories={finalCategories} />
        <Box
          sx={{
            width: { md: "100%", xs: "100%" },
            mt: { xs: "9rem", md: "5rem" },
          }}
        >
          <ShowCategory />
          <ShowCategory />
          <ShowCategory />
          <ShowCategory />
          <ShowCategory />
          <ShowCategory />
          <ShowCategory />
        </Box>
      </Box>
    </>
  );
}
export const loader = async () => {
  const response = await fetch("http://localhost:5000/products");
  const products = await response.json();
  return products;
};
export default Root;
