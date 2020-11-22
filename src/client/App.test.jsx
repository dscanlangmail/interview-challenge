import React from "react";
import "babel-polyfill";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRedux } from "./store/utils";
import App from "./App";

jest.mock("./api", () => ({
  get: jest.fn().mockReturnValue(
    Promise.resolve({
      items: [
        {
          id: 1001,
          name:
            "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
          dietaries: ["v", "ve", "df", "gf", "n!"],
        },
        {
          id: 1002,
          name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
          dietaries: ["gf", "df", "rsf"],
        },
      ],
    })
  ),
}));

// Example test
describe("App tests", () => {
  it("renders a message", async () => {
    renderWithRedux(<App />);
    await waitFor(() => screen.findByText(/kale/i));
    expect(screen.getByText("0 items")).toBeInTheDocument();
    expect(await screen.findByText(/kale/i)).toBeInTheDocument();
    expect(await screen.findByText(/hake/i)).toBeInTheDocument();
  });
});
