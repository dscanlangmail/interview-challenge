import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { createStore } from "redux";
import { reducer as foodReducer } from "./store/reducer";
import { Menu, Preview, Summary } from "./components";

export default () => (
  <Provider store={createStore(foodReducer)}>
    <div className="wrapper">
      <Summary />
      <div className="container menu-builder">
        <div className="row">
          <Menu />
          <Preview />
        </div>
      </div>
    </div>
  </Provider>
);
