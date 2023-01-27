import { Box } from "@mui/system";
import React from "react";
import CategoryMenu from "./components/CategoryMenu";

import Navbar from "./components/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <Box>
        <CategoryMenu />
      </Box>
    </>
  );
}

export default Root;
