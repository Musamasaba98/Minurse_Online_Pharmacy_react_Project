import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "6.3rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: { md: "80vw", lg: "77vw" },
          margin: "6.3rem auto",
          marginBottom: 0,
        }}
      >
        Hello
      </Box>
    </>
  );
};
export const loader = async ({ params }) => {
  const id = params.productId;
  const response = await fetch(`http://localhost:5000/products/${id}`);
  const product = await response.json();
  return product;
};
export default Product;
