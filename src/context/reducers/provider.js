import React, { createContext, useReducer } from "react";
import eventInitialState from "../initialState/eventInitialState";
import showEventinitialState from "../initialState/showEventinitialState";
import eventData from "./eventData";
import showEvent from "./showEvent";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [eventState, eventDispatch] = useReducer(eventData, eventInitialState);
  const [showEventState, showEventDispatch] = useReducer(
    showEvent,
    showEventinitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        eventState,
        eventDispatch,
        showEventState,
        showEventDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
