import { Box } from "@mui/system";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu";
import ProductBoard from "../components/ProductBoard";
import ShowCategory from "../components/ShowCategory";

const Index = () => {
  const loader = useLoaderData();
  const { products } = loader;
  let categories = [];
  products.map((p) => (categories = [...categories, ...p.category]));
  const finalCategories = [...new Set(categories)];
  return (
    <Box
      spacing={2}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        minWidth: "70vw",
        maxWidth: { md: "80vw", lg: "70vw" },
        justifyContent: "center",
        alignItems: "flex-start",
        m: "0 auto",
        mb: 0,
        gap: "1rem",
        overflowX: { xs: "hidden", md: "visible" },
      }}
    >
      <Box mt="6.5rem">
        <CategoryMenu categories={finalCategories} />
      </Box>
      <Box
        sx={{
          width: { md: "100%", xs: "96%" },
          mt: "6.5rem",
        }}
      >
        <ShowCategory />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
        <ProductBoard />
      </Box>
    </Box>
  );
};
export const loader = async () => {
  const response1 = await fetch(`http://localhost:5000/products`);
  const response2 = await fetch("http://localhost:5000/categories");
  const products = await response1.json();
  const categories = await response2.json();
  return { products, categories };
};

export default Index;
