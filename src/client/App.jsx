import React from "react";
import "./App.css";
import { Menu, Preview, Summary } from "./components";

export default () => (
  <div className="wrapper">
    <Summary />
    <div className="container menu-builder">
      <div className="row">
        <Menu />
        <Preview />
      </div>
    </div>
  </div>
);
