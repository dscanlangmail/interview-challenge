import React from "react";
import "babel-polyfill";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../store/utils";
import { Menu } from "../index";
import { get } from "../../api";

jest.mock("../../api", () => ({
  get: jest.fn(),
}));

const mockItem = {
  id: 1001,
  name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
  dietaries: ["ve", "df", "gf", "n!"],
};

describe("components/Menu", () => {
  it("should render the menu component", async () => {
    get.mockReturnValue(
      Promise.resolve({
        items: [mockItem],
      })
    );

    renderWithRedux(<Menu />);

    await waitFor(() => screen.findByText(/kale/i));
    expect(await screen.findByText(/kale/i)).toBeInTheDocument();
    expect(await screen.findByText(/ve/i)).toBeInTheDocument();
    expect(await screen.findByText(/df/i)).toBeInTheDocument();
    expect(await screen.findByText(/gf/i)).toBeInTheDocument();
    expect(await screen.findByText(/n!/i)).toBeInTheDocument();
    expect(await screen.findAllByRole(/row/i)).toHaveLength(1);
  });

  it("should make a request when search text is entered", async () => {
    get.mockReturnValue(
      Promise.resolve({
        items: [mockItem],
      })
    );

    renderWithRedux(<Menu />);

    await waitFor(() => screen.findByText(/kale/i));
    const input = screen.getByPlaceholderText(/name/i);
    userEvent.type(input, "t");

    expect(get).toHaveBeenCalledWith(
      "http://localhost:8080/api/items/?search=t"
    );
    await waitFor(() => screen.findByText(/kale/i));
  });
});
