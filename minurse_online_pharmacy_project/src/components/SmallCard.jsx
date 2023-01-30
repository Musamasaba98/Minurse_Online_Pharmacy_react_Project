import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const SmallCard = ({ category }) => {
  const { img, title } = category;
  return (
    <Card
      sx={{
        height: "10rem",
        width: "10rem",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          src={require(`../images/img/${img}`)}
          style={{ width: "500px", height: "180px", objectFit: "scale-down" }}
          alt="categoryImage"
        />
      </Box>
      <CardContent sx={{ backgroundColor: "#000c", color: "#fff" }}>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
