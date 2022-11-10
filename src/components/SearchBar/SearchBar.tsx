import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBar.styled";
import { AppContext } from "../../store/Context";
import Button from "@mui/material/Button/Button";
import { QueryActionTypes } from "../../store/reducers/queryReducer";
import { ShowActionTypes } from "../../store/reducers/showReducer";
import { ShowDataMapper } from "../../utils/DataMapper";
import Container from "@mui/material/Container/Container";
import { API_BASE_URL } from "../../utils/constants";
import ShowClient from "../../services/ShowClient";
import Link from "@mui/material/Link/Link";
import { useParams } from "react-router-dom";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { useCallback } from "react";

export default function SearchBar() {
  const { state, dispatch } = React.useContext(AppContext);
  const { showId } = useParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch({ type: QueryActionTypes.Set, payload: { query: value } });
    dispatch({
      type: QueryActionTypes.SetUrl,
      payload: { url: `${API_BASE_URL}/search/shows?q=${value}` },
    });
  };

  const handleSearch = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      const { data } = await ShowClient.search(state.search.query);
      dispatch({ type: ShowActionTypes.FetchStart });
      if (data) {
        const parsedData = ShowDataMapper(data);
        dispatch({
          type: ShowActionTypes.FetchSuccess,
          payload: {
            shows: parsedData,
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
    },
    [state.search.query]
  );

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <form onSubmit={handleSearch}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <MovieFilterIcon
                  fontSize="large"
                  href="/"
                  sx={{ top: 8, position: "relative" }}
                />{" "}
                <Link href="/" color="inherit" underline="none">
                  Movie Finder
                </Link>
              </Typography>
              {!showId && (
                <>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Type a movie or tv show name and hit enter..."
                      inputProps={{ "aria-label": "search" }}
                      defaultValue={state.search.query}
                      onChange={handleQuery}
                    />
                  </Search>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="inherit"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </>
              )}
              <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
          </form>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
