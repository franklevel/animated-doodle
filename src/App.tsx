import React, { useContext, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "@mui/material/Container";
import PreConsole from "./components/PreConsole/PreConsole";
import { ShowGrid } from "./components/ShowGrid/ShowGrid";
import { AppContext } from "./store/Context";
import Loader from "./components/Loader/Loader";
import NoData from "./components/NoData/NoData";
import Welcome from "./components/Welcome/Welcome";
import { fakeData } from "./utils/constants";

function App() {
  const { state } = useContext(AppContext);
  const { shows, isLoading } = state;
  return (
    <React.Fragment>
      <CssBaseline />
      <SearchBar />
      <PreConsole show={false} />
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
        <ShowGrid
          data={fakeData.slice(0, 4)}
          xs={3}
          header={{ title: "Some random shows", visible: true }}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
