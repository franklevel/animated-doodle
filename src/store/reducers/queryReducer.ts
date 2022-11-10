import { ActionMap } from "../../utils/ActionMapper";

export enum QueryActionTypes {
  Set = "@query/set",
  SetUrl = "@query/set/url",
}

// Show
export type QueryStateType = {
  query: string;
  url: string;
};

type QueryPayload = {
  [QueryActionTypes.Set]: {
    query: string;
  };
  [QueryActionTypes.SetUrl]: {
    url: string;
  };
};

export type QueryActions =
  ActionMap<QueryPayload>[keyof ActionMap<QueryPayload>];

export const queryReducer = (state: QueryStateType, action: QueryActions) => {
  switch (action.type) {
    case QueryActionTypes.Set:
      return {
        ...state,
        query: action.payload.query,
      };
    case QueryActionTypes.SetUrl:
      return {
        ...state,
        url: action.payload.url,
      };

    default:
      return state;
  }
};
