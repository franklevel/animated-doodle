import React, { createContext, useReducer } from "react";
import { InitialStateType, mainReducer } from "./reducers/mainReducer";

const initialState = {
  isLoading: false,
  shows: {
    shows: [],
    error: false,
    success: false,
    isLoading: false,
  },
  search: { query: "", url: "" },
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type AppProviderProps = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: AppProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
