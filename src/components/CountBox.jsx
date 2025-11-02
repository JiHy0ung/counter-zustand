import React from "react";
import counterStore from "../stores/counterStore";
import { Box, Typography } from "@mui/material";

const CountBox = () => {
  const { count } = counterStore();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontFamily: "paperozi", fontWeight: "700" }}
      >
        count: {count}
      </Typography>
    </Box>
  );
};

export default CountBox;
