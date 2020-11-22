import React from "react";
import "babel-polyfill";
import { useSelector } from "react-redux";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../../store/utils";
import { Summary } from "../index";
import { mockItem } from "../../mocks/item";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("components/Summary", () => {
  it("should render the summary component", () => {
    useSelector.mockReturnValue([mockItem]);

    renderWithRedux(<Summary />);

    expect(screen.getByText(/1 items/i)).toBeInTheDocument();
    expect(screen.getByText(/1x/i)).toBeInTheDocument();
    expect(screen.getByText(/0x/i)).toBeInTheDocument();
    expect(screen.getByText(/1x/i)).toBeInTheDocument();
  });
});
