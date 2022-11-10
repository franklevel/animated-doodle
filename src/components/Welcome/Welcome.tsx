import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";

const Welcome = () => {
  return (
    <Paper sx={{ p: 2, mb: 5 }} elevation={0}>
      <Typography variant="h4">Welcome to Movie Finder</Typography>
      <Typography variant="subtitle1">
        Use the search bar above to find movie films
      </Typography>
    </Paper>
  );
};

export default Welcome;
