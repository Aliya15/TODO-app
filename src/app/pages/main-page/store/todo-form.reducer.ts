import {HttpErrorResponse} from "@angular/common/http";
import {createFeature, createReducer, on} from "@ngrx/store";
import {
  addTODOItemAction,
  changeItemStatusAction,
  clearTODOListAction,
  getTODOListAction,
  removeTODOItemAction
} from "./todo-form.actions";
import {ITODOListItem} from "../../../shared/models/todo-list-item.model";


export interface TODOState {
  todoList: ITODOListItem[] | [],
  todoItemId: number,
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const TODO_LIST_KEY = 'todoList';

const initialState: TODOState = {
  todoList: [],
  todoItemId: 1,
  isLoading: false,
  error: null,
};
export const todoFeature = createFeature({
  name: "todo",
  reducer: createReducer(
  initialState,
  on(
    getTODOListAction,
    (state: TODOState): TODOState => ({
      ...state,
      isLoading: false,
      error: null,
    })
  ),
  on(
    addTODOItemAction,
    (state: TODOState, action): TODOState => ({
      ...state,
      todoList: [{...action.listItem, id: state.todoItemId, completed: false}, ...state.todoList],
      todoItemId: state.todoItemId + 1,
      isLoading: false,
      error: null,
    })
  ),
    on(
      removeTODOItemAction,
      (state: TODOState, action): TODOState => ({
        ...state,
        todoList: state.todoList.filter((item) => item.id !== +action.listItemId),
        todoItemId: state.todoItemId - 1,
        isLoading: false,
        error: null,
      })
    ),
    on(
      changeItemStatusAction,
      (state: TODOState, action): TODOState => ({
        ...state,
        todoList: state.todoList.map((item) => item.id === +action.listItemId ? {...item, completed: !item.completed} : item),
        isLoading: false,
        error: null,
      })
    ),
    on(
      clearTODOListAction,
      (): TODOState => ({
        ...initialState
      })
    ),
)})

export const { name, reducer, selectTodoList } = todoFeature;
