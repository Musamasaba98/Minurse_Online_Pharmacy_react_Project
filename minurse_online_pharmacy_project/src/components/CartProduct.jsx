import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartProduct = ({ item }) => {
  const { id, quantity, price, image, name } = item;
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt=".5rem"
      >
        <>
          <Box
            sx={{ pb: ".3rem", textDecoration: "none" }}
            display="flex"
            justifyContent="center"
            gap="1rem"
          >
            <img
              src={require(`../images/${image}`)}
              style={{
                height: "70px",
                objectFit: "scale-down",
              }}
              alt="categoryImage"
            />
            <Typography variant={"p"} component="p" gutterTop>
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={"h6"}
              component="h6"
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >{`UGX ${price.toLocaleString()}`}</Typography>
            <Typography
              variant={"p"}
              component="p"
              sx={{ textDecoration: "line-through", fontSize: ".9rem" }}
            >{`UGX ${1000}`}</Typography>
          </Box>
        </>
      </Box>
      <Box
        display="flex"
        gap="3rem"
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        mb=".5rem"
      >
        <Box display="flex" gap="1rem" alignItems="center">
          <Button
            size="small"
            variant="contained"
            value={"product.quantity - 1"}
            disabled={false}
          >
            -
          </Button>
          <Typography>{quantity}</Typography>

          <Button
            name="quantityIcrement"
            size="small"
            value={"product.quantity + 1"}
            disabled={false}
            variant="contained"
          >
            +
          </Button>
        </Box>
        <Button
          size="small"
          variant="contained"
          defaultValue={0}
          disabled={false}
        >
          Remove From Cart
        </Button>
      </Box>
      <Divider pt=".5rem" />
    </>
  );
};

export default CartProduct;
