import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import Skeleton from "@mui/material/Skeleton/Skeleton";

export interface ShowCardProps {
  id: number;
  name: string;
  summary?: string;
  thumbnail: string;
  rating: number;
  genres: string[];
}
const styles = {
  media: {
    width: "100%", // 16:
  },
};

export const ShowCard = ({
  id,
  name,
  summary,
  thumbnail,
  genres,
  rating,
}: ShowCardProps) => {
  const loaded = useRef(0);
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    loaded.current += 1;
    if (loaded.current >= 1) {
      setImageLoading(false);
    }
  };
  return (
    <Card sx={{ maxWidth: 280 }} key={id}>
      {imageLoading && (
        <>
          <Skeleton variant="rectangular" width="auto" height={400} />
        </>
      )}
      <CardMedia
        component="img"
        style={styles.media}
        image={thumbnail || `/no-cover.jpg`}
        alt="green iguana"
        onLoad={imageLoaded}
      />
      <CardContent>
        <Rating
          size="medium"
          name="read-only"
          value={rating}
          precision={0.5}
          max={10}
          readOnly
        />
        <Typography gutterBottom variant="h5">
          {name ? name : <Skeleton />}
        </Typography>
        <Typography variant="subtitle2">
          Genres: {genres?.join(",") || "Uncategorized"}
        </Typography>
        {summary && (
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button href={`/show/${id}`}>See More</Button>
      </CardActions>
    </Card>
  );
};
