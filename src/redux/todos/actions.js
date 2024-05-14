import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
  LOADED,
} from "./actionTypes";

export const loaded = (todos) => ({
  type: LOADED,
  payload: todos,
});
export const added = (todoText) => ({
  type: ADDED,
  payload: todoText,
});

export const toggled = (todoId) => ({
  type: TOGGLED,
  payload: todoId,
});

export const colorSelected = (todoId, color) => ({
  type: COLORSELECTED,
  payload: {
    todoId,
    color,
  },
});
export const deleted = (todoId) => ({
  type: DELETED,
  payload: todoId,
});

export const allCompleted = () => ({
  type: ALLCOMPLETED,
});

export const clearCompleted = () => ({
  type: CLEARCOMPLETED,
});
