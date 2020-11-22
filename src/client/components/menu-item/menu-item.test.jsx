import React from "react";
import "babel-polyfill";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MenuItem } from "../index";
import { selectItem, removeItem } from "../../store/actions";
import { renderWithRedux } from "../../store/utils";
import { mockItem } from "../../mocks/item";

jest.mock("../../store/actions", () => ({
  ...jest.requireActual("../../store/actions"),
  selectItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));

describe("components/MenuItem", () => {
  it("should render the menu item and select item when clicked", async () => {
    renderWithRedux(<MenuItem item={mockItem} removeable={false} />);

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.queryByText(/x/i)).not.toBeInTheDocument();
    const row = await screen.getByRole(/row/i);

    userEvent.click(row);
    expect(selectItem).toHaveBeenCalledTimes(1);
    expect(selectItem).toHaveBeenCalledWith(mockItem);
  });

  it("should render a button and action removeItem when clicked", async () => {
    renderWithRedux(<MenuItem item={mockItem} removeable={true} />);

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.queryByText(/x/i)).toBeInTheDocument();
    const button = await screen.getByRole(/button/i);

    userEvent.click(button);
    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(removeItem).toHaveBeenCalledWith(mockItem);
  });
});
