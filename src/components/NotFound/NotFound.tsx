import { Box, Typography } from "@mui/material";

export default function NOtFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" style={{ color: "gray" }}>
        Not Found - 404
      </Typography>
    </Box>
  );
}
