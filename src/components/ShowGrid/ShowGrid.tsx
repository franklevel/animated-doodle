import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography/Typography";
import { ShowCard } from "../ShowCard/ShowCard";
interface ShowGridProps {
  data: any[];
  xs: number;
  header: {
    title: string;
    visible?: boolean;
  };
}
export const ShowGrid = ({ data, xs, header }: ShowGridProps) => {
  return (
    <Container>
      {header && header.visible && (
        <Paper sx={{ my: 2 }} elevation={0}>
          <Typography variant="h5">{header.title}</Typography>
        </Paper>
      )}
      <Grid container spacing={2}>
        {data &&
          data?.map((item: any) => {
            const { id, name, rating, genres, image } = item;

            return (
              <Grid item xs={xs} key={id}>
                <ShowCard
                  id={id}
                  name={name}
                  rating={rating}
                  genres={genres}
                  thumbnail={image?.medium}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
