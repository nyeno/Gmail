import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  composeOpen:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPOSE":
      return {
        ...state,
        composeOpen: action.payload,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
