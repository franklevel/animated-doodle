import { ActionMap } from "../../utils/ActionMapper";

export enum PagedShowsActionTypes {
  FetchStart = "@paged-shows/fetch/start",
  FetchSuccess = "@paged-shows/fetch/success",
  FetchError = "@paged-shows/fetch/error",
}

export type ShowImageType = {
  medium: string;
  original: string;
};
// Show
export type ShowType = {
  id: number;
  name: string;
  summary: string;
  rating: { average: number };
  thumbnail: string;
  genres: string[];
  image: ShowImageType;
};

export type PagedShowsStateType = {
  pagedShows: ShowType[];
  isLoading: boolean;
  error: boolean;
  success: boolean;
  message?: string;
};

type PagedShowsPayload = {
  [PagedShowsActionTypes.FetchStart]: {
    isLoading: boolean;
  };
  [PagedShowsActionTypes.FetchSuccess]: {
    pagedShows: ShowType[];
    success: boolean;
    isLoading: boolean;
  };
  [PagedShowsActionTypes.FetchError]: {
    error: boolean;
    message?: string;
    isLoading: boolean;
  };
};

export type PagedShowsActions =
  ActionMap<PagedShowsPayload>[keyof ActionMap<PagedShowsPayload>];

export const pagedShowsReducer = (
  state: PagedShowsStateType,
  action: PagedShowsActions
) => {
  switch (action.type) {
    case PagedShowsActionTypes.FetchStart:
      return {
        ...state,
        isLoading: true,
      };

    case PagedShowsActionTypes.FetchSuccess:
      return {
        ...state,
        pagedShows: action.payload.pagedShows,
        success: true,
        isLoading: false,
      };

    case PagedShowsActionTypes.FetchError:
      return {
        ...state,
        error: true,
        message: action.payload.message,
        isLoading: false,
      };

    default:
      return state;
  }
};
