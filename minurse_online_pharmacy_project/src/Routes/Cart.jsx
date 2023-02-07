import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { itemList, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );
  console.log(itemList);

  return (
    <>
      <Box
        sx={{
          marginTop: "6.3rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",

          maxWidth: { md: "90vw", lg: "70vw" },
          margin: "6.3rem auto",
          marginBottom: 0,
        }}
      >
        <Box
          maxWidth="60vw"
          flexGrow={1}
          sx={{ backgroundColor: "#fff", p: ".5rem" }}
        >
          <Typography
            pb=".5rem"
            sx={{ fontSize: "1.25rem", fontWeight: 500 }}
          >{`Cart(${totalQuantity})`}</Typography>
          <Divider />
          {itemList.map((item) => {
            return <CartProduct key={item.id} item={item} />;
          })}
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            p: ".5rem",
            maxHeight: "16vh",
          }}
        >
          <Typography pt=".5rem" pb=".5rem" fontSize=".875rem" fontWeight={500}>
            CART SUMMARY
          </Typography>
          <Divider variant="middle" component="p" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: ".5rem",
              width: "14vw",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>{`UGX ${totalPrice.toLocaleString()}`}</Typography>
          </Box>
          <Divider variant="middle" component="p" />
          <Button
            size="medium"
            variant="contained"
            sx={{ mt: ".5rem", mb: ".5rem", width: "100%" }}
          >
            {`CHECKOUT(UGX ${totalPrice.toLocaleString()})`}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
