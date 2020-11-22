import React from "react";
import "babel-polyfill";
import { useSelector } from "react-redux";
import { screen } from "@testing-library/react";
import { Preview } from "../index";
import { renderWithRedux } from "../../store/utils";
import { mockItem } from "../../mocks/item";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("components/Preview", () => {
  it("should render the preview component", () => {
    useSelector.mockReturnValue([mockItem]);
    renderWithRedux(<Preview />);

    expect(screen.getByText(/menu preview/i)).toBeInTheDocument();
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
  });
});
