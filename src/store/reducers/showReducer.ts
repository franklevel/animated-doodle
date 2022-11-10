import { ActionMap } from "../../utils/ActionMapper";

export enum ShowActionTypes {
  FetchStart = "@show/fetch/start",
  FetchSuccess = "@show/fetch/success",
  FetchError = "@show/fetch/error",
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

export type ShowStateType = {
  shows: ShowType[];
  isLoading: boolean;
  error: boolean;
  success: boolean;
  message?: string;
};

type ShowPayload = {
  [ShowActionTypes.FetchStart]: {
    isLoading: boolean;
  };
  [ShowActionTypes.FetchSuccess]: {
    shows: ShowType[];
    success: boolean;
    message?: string;
    isLoading: boolean;
  };
  [ShowActionTypes.FetchError]: {
    shows: ShowType[];
    error: boolean;
    message?: string;
    isLoading: boolean;
  };
};

export type ShowActions = ActionMap<ShowPayload>[keyof ActionMap<ShowPayload>];

export const showReducer = (state: ShowStateType, action: ShowActions) => {
  switch (action.type) {
    case ShowActionTypes.FetchStart:
      return {
        ...state,
        isLoading: true,
      };

    case ShowActionTypes.FetchSuccess:
      return {
        ...state,
        shows: action.payload.shows,
        success: true,
        isLoading: false,
      };

    case ShowActionTypes.FetchError:
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
