import {createAction, props} from "@ngrx/store";
import {ITODOListItem} from "../../../shared/models/todo-list-item.model";


enum TODOActionsTypes {
  GET_TODO_LIST = '[TODO] Get TODO List',
  GET_TODO_LIST_SUCCESS = '[TODO] Get TODO List Success',
  GET_TODO_LIST_FAIL = '[TODO] Get TODO List Fail',
  ADD_TODO_ITEM = '[TODO] Add TODO Item',
  ADD_TODO_ITEM_SUCCESS = '[TODO] Add TODO Item Success',
  ADD_TODO_ITEM_FAIL = '[TODO] Add TODO Item Fail',
  REMOVE_TODO_ITEM = '[TODO] Remove TODO Item',
  REMOVE_TODO_ITEM_SUCCESS = '[TODO] Remove TODO Item Success',
  REMOVE_TODO_ITEM_FAIL = '[TODO] Add Remove Item Fail',
  CHANGE_ITEM_STATUS = '[TODO] Change Item Status',
  CLEAR_TODO_LIST = '[TODO] Clear TODO List',
}

export const addTODOItemAction = createAction(
  TODOActionsTypes.ADD_TODO_ITEM,
  props<{ listItem: ITODOListItem }>()
);

export const removeTODOItemAction = createAction(
  TODOActionsTypes.REMOVE_TODO_ITEM,
  props<{ listItemId: number }>()
);

export const changeItemStatusAction = createAction(
  TODOActionsTypes.CHANGE_ITEM_STATUS,
  props<{ listItemId: number }>()
);

export const getTODOListAction = createAction(TODOActionsTypes.GET_TODO_LIST);

export const clearTODOListAction = createAction(TODOActionsTypes.CLEAR_TODO_LIST);

