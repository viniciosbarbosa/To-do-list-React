import { TodoActions, TodoStateReducer } from "../../types/TodoReducer";

export const initialState: TodoStateReducer = [];

export const TodoReducer = (
  state: TodoStateReducer,
  action: TodoActions
): TodoStateReducer => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      const { payload } = action;
      return Array.isArray(payload) ? payload : [...state, payload];
    case "CHANGE_TODO":
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((_item, index) => index !== action.payload.index);
    default:
      return state;
  }
};
