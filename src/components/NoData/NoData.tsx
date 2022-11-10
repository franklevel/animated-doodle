import Alert from "@mui/material/Alert/Alert";
import Box from "@mui/material/Box/Box";
import React from "react";

const NoData = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Alert severity="warning">There no data to show!</Alert>
    </Box>
  );
};

export default NoData;
