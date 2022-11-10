import { Typography, Rating } from "@mui/material";
import { Interweave } from "interweave";

interface ShowSummaryProps {
  name: string;
  rating: number;
  genres: string[];
  summary: string;
}

export const ShowSummary = ({
  name,
  rating,
  genres,
  summary,
}: Partial<ShowSummaryProps>) => {
  return (
    <>
      <Typography variant="h4">{name}</Typography>
      {rating && rating > 0 && (
        <>
          <Rating
            name="read-only"
            defaultValue={2}
            value={rating}
            precision={0.5}
            max={10}
            readOnly
          />
          <Typography component="legend">{rating} stars</Typography>
        </>
      )}
      <Typography variant="subtitle1">
        <b>Genres:</b> {genres?.join(",") || "Uncategorized"}
      </Typography>
      <Typography variant="body1" component="div">
        <Interweave content={summary} />
      </Typography>
    </>
  );
};
