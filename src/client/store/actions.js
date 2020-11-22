import { ActionType, createAction } from "typesafe-actions";

export const ActionTypes = {
  SELECT_ITEM: "SELECT_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const selectItem = createAction(ActionTypes.SELECT_ITEM)();
export const removeItem = createAction(ActionTypes.REMOVE_ITEM)();
