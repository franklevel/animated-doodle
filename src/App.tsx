import React, { useContext, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "@mui/material/Container";
import { ShowGrid } from "./components/ShowGrid/ShowGrid";
import { AppContext } from "./store/Context";
import Loader from "./components/Loader/Loader";
import NoData from "./components/NoData/NoData";
import Welcome from "./components/Welcome/Welcome";
import ShowClient from "./services/ShowClient";
import { ShowActionTypes } from "./store/reducers/showReducer";
import { ShowDataMapper } from "./utils/DataMapper";
import { PagedShowsActionTypes } from "./store/reducers/pagedShowsReducer";
import { getRandomSlice } from "./utils/ValueObjects";

function App() {
  const { state, dispatch } = useContext(AppContext);
  const { shows, isLoading, pagedShows } = state;

  useEffect(() => {
    const getPagedShows = async (page: number): Promise<any> => {
      const { data } = await ShowClient.shows(page);
      dispatch({
        type: PagedShowsActionTypes.FetchStart,
      });
      if (data) {
        const parsedData = ShowDataMapper(data);
        dispatch({
          type: PagedShowsActionTypes.FetchSuccess,
          payload: {
            pagedShows: getRandomSlice(parsedData, 4),
          },
        });
      } else {
        dispatch({
          type: ShowActionTypes.FetchError,
          payload: {
            message: "Without data",
          },
        });
      }
    };

    getPagedShows(1);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <SearchBar />
      <Container sx={{ paddingTop: 5 }}>
        {shows.shows.length < 1 && isLoading ? <Loader /> : <Welcome />}
        {shows.shows && (
          <ShowGrid
            data={shows.shows}
            xs={3}
            header={{
              title: `Showing search results for ${state.search.query}`,
              visible:
                state.search.query && state.shows.shows.length > 0
                  ? true
                  : false,
            }}
          />
        )}
        {shows.shows.length < 1 && shows.success ? <NoData /> : null}
        {pagedShows.pagedShows && pagedShows.pagedShows.length > 1 && (
          <ShowGrid
            data={pagedShows.pagedShows}
            xs={3}
            header={{ title: "Some random shows", visible: true }}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
