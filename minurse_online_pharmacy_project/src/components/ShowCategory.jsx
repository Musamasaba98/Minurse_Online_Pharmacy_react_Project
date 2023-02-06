import { Box } from "@mui/material";
import React from "react";
import SmallCard from "./SmallCard";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useLoaderData } from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos
        style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700 }}
      />
    </div>
  );
};

const ShowCategory = () => {
  const { categories } = useLoaderData();

  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 6,
    initialSlide: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1630,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        borderRadius: ".6rem",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <Slider {...settings}>
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              to={`/${category.title.toLowerCase()}`}
              style={{ textDecoration: "none!important" }}
            >
              <SmallCard category={category} />
            </Link>
          );
        })}
      </Slider>
    </Box>
  );
};

export default ShowCategory;
