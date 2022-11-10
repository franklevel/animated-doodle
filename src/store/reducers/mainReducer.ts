import {
  PagedShowsActions,
  pagedShowsReducer,
  PagedShowsStateType,
} from "./pagedShowsReducer";
import { QueryActions, queryReducer, QueryStateType } from "./queryReducer";
import { ShowActions, showReducer, ShowStateType } from "./showReducer";

export type InitialStateType = {
  isLoading: boolean;
  pagedShows: PagedShowsStateType;
  shows: ShowStateType;
  search: QueryStateType;
};

export type MainActions = ShowActions | PagedShowsActions | QueryActions;

export const mainReducer = (
  { shows, pagedShows, search }: InitialStateType,
  action: any
) => ({
  pagedShows: pagedShowsReducer(pagedShows, action),
  shows: showReducer(shows, action),
  search: queryReducer(search, action),
});
