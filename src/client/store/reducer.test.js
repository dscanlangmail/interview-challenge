import { reducer as foodReducer } from "./reducer";
import { ActionTypes } from "./actions";
import { mockItem } from "../mocks/item";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(foodReducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle selecting a new item", () => {
    expect(
      foodReducer([], { type: ActionTypes.SELECT_ITEM, payload: mockItem })
    ).toMatchSnapshot();
  });
  it("should handle removing an item", () => {
    expect(
      foodReducer([mockItem], {
        type: ActionTypes.REMOVE_ITEM,
        payload: mockItem,
      })
    ).toMatchSnapshot();
  });
});
