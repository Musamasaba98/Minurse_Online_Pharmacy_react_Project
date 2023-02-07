import { Box } from "@mui/system";

import { Button, Divider, Typography } from "@mui/material";
import TextRating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import {
  ArrowForwardIos,
  ThumbUpAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { cartActions } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../Store/apiSlice";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  //applying cart actions redux
  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartActions;
  //applying cart actions redux
  const { data: product, isLoading } = useGetProductQuery(productId);

  const [updateProduct, { isLoading: loading }] = useUpdateProductMutation();

  const handleSubmit = (e) => {
    updateProduct({ productId, quantity: Number(e.target.value) });
  };

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <Box
            sx={{
              marginTop: "6.3rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              maxWidth: { md: "90vw", lg: "70vw" },
              margin: "6.3rem auto",
              marginBottom: 0,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <ArrowForwardIos sx={{ fontSize: "1rem" }} />
            <Link
              to="/all-products"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              All Products
            </Link>
            <ArrowForwardIos sx={{ fontSize: "1rem" }} />
            {product.category &&
              product.category.map((category, key) => {
                return (
                  <>
                    <Link
                      key={key}
                      to={`/${category}`}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {category}
                    </Link>
                    <ArrowForwardIos sx={{ fontSize: "1rem" }} />
                  </>
                );
              })}
            <Typography variant="span" component="span">
              {product.name}
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#fff",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "2rem",
              maxWidth: { xs: "90vw", md: "90vw", lg: "70vw" },
              margin: "1rem auto",
              borderRadius: "1rem",
              p: ".5rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              flexDirection: { md: "row", sm: "column", xs: "column" },
            }}
          >
            <Box sx={{ maxWidth: { xs: "30rem", md: "20rem" }, pt: "4rem" }}>
              <img
                src={require(`../images/${product.image}`)}
                style={{ objectFit: "contain", width: "100%" }}
                alt="#"
              />
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "30rem", md: "25rem" },
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Box mt=".5rem" mb=".5rem">
                <Typography variant="h4" fontSize="1.3rem" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography
                  pt=".2rem"
                  pb=".2rem"
                >{`Product # ${product.id}`}</Typography>
              </Box>
              <Divider variant="middle" component="p" />
              <Box display="flex" justifyContent="space-around">
                <TextRating />
                <Box display="flex" justifyContent="space-between">
                  {product.likes ? (
                    <ThumbUpAlt sx={{ color: "#1976d2" }} />
                  ) : (
                    <ThumbUpOffAlt />
                  )}
                  {product.likes}
                </Box>
              </Box>

              <Divider variant="middle" component="p" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                gap="1rem"
                alignItems="flex-start"
                mb=".5rem"
                mt=".5rem"
              >
                <Typography>{`Price: UGX ${product.price.toLocaleString()}`}</Typography>
                {product.quantity ? (
                  <Box display="flex" gap="3rem" alignItems="center">
                    <Box display="flex" gap="1rem" alignItems="center">
                      <Button
                        size="small"
                        variant="contained"
                        value={product.quantity - 1}
                        disabled={loading}
                        onClick={(e) => {
                          dispatch(decreaseQuantity(product.id));
                          handleSubmit(e);
                        }}
                      >
                        -
                      </Button>
                      <Typography>{product.quantity}</Typography>

                      <Button
                        name="quantityIcrement"
                        size="small"
                        value={product.quantity + 1}
                        disabled={loading}
                        variant="contained"
                        onClick={(e) => {
                          dispatch(increaseQuantity(product.id));
                          handleSubmit(e);
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    <Button
                      size="small"
                      variant="contained"
                      defaultValue={0}
                      disabled={loading}
                      onClick={(e) => {
                        dispatch(removeFromCart(product.id));
                        handleSubmit(e);
                      }}
                    >
                      Remove From Cart
                    </Button>
                  </Box>
                ) : (
                  <Button
                    size="small"
                    variant="contained"
                    value={1}
                    disabled={loading}
                    onClick={(e) => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          quantity: 1,
                          image: product.image,
                          name: product.name,
                          price: product.price,
                          cummulativePrice: product.price,
                        })
                      );
                      handleSubmit(e);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </Box>
              <Divider variant="middle" component="p" />
              <Typography mt=".5rem">
                Status:
                {product.isInStock ? (
                  <Typography variant="span" color="blue" fontWeight={500}>
                    In Stock
                  </Typography>
                ) : (
                  <Typography variant="span" color="red" fontWeight={500}>
                    Out Of Stock
                  </Typography>
                )}
              </Typography>
              <Divider variant="middle" component="p" />
              <Box>
                <Typography variant="h5">Description:</Typography>
                <Typography variant="p" sx={{ m: ".8rem" }}>
                  {product.details}
                </Typography>
              </Box>
              <Divider variant="middle" component="p" />
              <Typography mb=".5rem" mt=".5rem">
                Sold by:Minurse
              </Typography>
              <Button size="medium" variant="contained">
                Submit Your Review
              </Button>
            </Box>
          </Box>
        </>
      )}
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
