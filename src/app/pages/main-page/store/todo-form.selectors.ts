import {TODO_LIST_KEY, TODOState} from "./todo-form.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectFeature = createFeatureSelector<TODOState>(TODO_LIST_KEY);

export const selectTodoList = createSelector(
  selectFeature,
  (state: TODOState) => state.todoList
);

export const selectTodoListFilter = createSelector(
  selectFeature,
  (state: TODOState) => state.todoListFilter
);
