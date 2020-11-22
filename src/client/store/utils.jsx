import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer as foodReducer } from "./reducer";

export * from "@testing-library/react";

export const renderWithRedux = (
  ui,
  {
    initialState = [],
    store = createStore(foodReducer, initialState),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
