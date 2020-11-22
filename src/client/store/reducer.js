import { getType } from "typesafe-actions";
import { ActionTypes } from "./actions";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_ITEM: {
      return [...state, action.payload];
    }
    case ActionTypes.REMOVE_ITEM: {
      const newState = [...state];
      const index = newState.findIndex((item) => {
        return item.id === action.payload.id;
      });

      newState.splice(index, 1);

      return newState;
    }
    default:
      [];
  }
};
