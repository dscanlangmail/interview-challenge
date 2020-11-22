import React from "react";
import "babel-polyfill";
import { screen, render } from "@testing-library/react";
import { Search } from "../index";
import userEvent from "@testing-library/user-event";

const testText = "someTest";
const setSearch = jest.fn();

describe("componenets/Saerch", () => {
  it("should render the Search componenet and call setSearch when text is entered", () => {
    render(<Search value={testText} setSearch={setSearch} />);

    const input = screen.getByPlaceholderText(/name/i);

    expect(input).toHaveValue(testText);
    userEvent.type(input, "_");
    expect(setSearch).toHaveBeenCalledTimes(1);
    expect(setSearch).toHaveBeenCalledWith(`${testText}_`);
  });
});
