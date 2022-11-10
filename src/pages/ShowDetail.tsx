import { CssBaseline, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ShowClient from "../services/ShowClient";
import { ShowType } from "../store/reducers/showReducer";
import SearchBar from "../components/SearchBar/SearchBar";
import { ShowSummary } from "../components/ShowSummary/ShowSummary";
import NotFound from "../components/NotFound/NotFound";

const ShowDetail = () => {
  const { showId } = useParams();
  const loaded = useRef(0);
  const [show, setShow] = useState<Partial<ShowType>>();
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    loaded.current += 1;
    console.log(loaded.current);
    if (loaded.current > 0) {
      setImageLoading(false);
    }
  };

  useEffect(() => {
    const getDetails = async (showId: number): Promise<any> => {
      const response = await ShowClient.show(showId);
      if (response.data) {
        setShow(response.data);
      }
    };
    if (showId) {
      getDetails(parseInt(showId));
    }
    return () => {};
  }, [showId]);

  return (
    <React.Fragment>
      <CssBaseline />
      <SearchBar />
      <Container sx={{ mt: 5 }}>
        {show ? (
          <Grid container spacing={0}>
            <Grid item xs={6}>
              {imageLoading && (
                <Skeleton variant="rectangular" width={500} height={700} />
              )}
              <img
                style={{ display: imageLoading ? "none" : "block" }}
                src={show.image?.original}
                alt={show.name}
                width={500}
                onLoad={imageLoaded}
              />
            </Grid>
            <Grid item xs={6}>
              <ShowSummary
                name={show?.name}
                rating={show?.rating?.average}
                summary={show?.summary}
                genres={show?.genres}
              />
            </Grid>
          </Grid>
        ) : (
          <NotFound />
        )}
      </Container>
    </React.Fragment>
  );
};

export default ShowDetail;
