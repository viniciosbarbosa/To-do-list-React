import { Todo } from "./Todo";

export type TodoStateReducer = Array<Todo>;

type TodoWithOptionalProps = {
  [key in keyof Todo]?: Todo[key];
};

type AddNewTodo = {
  type: "ADD_NEW_TODO";
  payload: Todo | Array<Todo>;
};

type ChangeTodo = {
  type: "CHANGE_TODO";
  payload: TodoWithOptionalProps & { index: number };
};

type DeleteTodo = {
  type: "DELETE_TODO";
  payload: { index: number };
};

export type TodoActions = AddNewTodo | DeleteTodo | ChangeTodo;
