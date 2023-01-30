import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return currentSlide ? (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  ) : (
    false
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return onClick ? (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  ) : (
    false
  );
};
const ProductBoard = () => {
  const { products } = useLoaderData();
  const topProducts = products.sort((a, b) => b.likes - a.likes).slice(0, 8);
  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        flexGrow: 1,
        mb: "1rem",
        p: ".5rem",
        borderRadius: "1rem",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h4"
          sx={{ pl: ".5rem", fontSize: "1.5rem", fontWeight: 500 }}
        >
          Top Products
        </Typography>
      </Box>
      <Slider {...settings}>
        {topProducts.map((product) => {
          return <ProductCard key={product.id} products={product} />;
        })}
      </Slider>
    </Box>
  );
};

export default ProductBoard;
