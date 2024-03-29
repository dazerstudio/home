import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Error() {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          color: "#e2e2e2",
          textShadow: "0px 10px 8px black",
        }}
      >
        <Typography variant="h3" sx={{ color: "#e2e2e2" }}>
          <Link to="/">Dazerstudios</Link> 404
        </Typography>
      </Box>
    </>
  );
}
