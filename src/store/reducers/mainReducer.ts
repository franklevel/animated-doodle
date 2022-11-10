import { QueryActions, queryReducer, QueryStateType } from "./queryReducer";
import { ShowActions, showReducer, ShowStateType } from "./showReducer";

export type InitialStateType = {
  isLoading: boolean;
  shows: ShowStateType;
  search: QueryStateType;
};

export type MainActions = ShowActions | QueryActions;

export const mainReducer = (
  { shows, search }: InitialStateType,
  action: any
) => ({
  shows: showReducer(shows, action),
  search: queryReducer(search, action),
});
