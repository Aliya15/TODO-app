import {createAction, props} from "@ngrx/store";
import {ITODOListItem} from "../../../shared/models/todo-list-item.model";


enum TODOActionsTypes {
  GET_TODO_LIST = '[TODO] Get TODO List',
  ADD_TODO_ITEM = '[TODO] Add TODO Item',
  REMOVE_TODO_ITEM = '[TODO] Remove TODO Item',
  CHANGE_ITEM_STATUS = '[TODO] Change Item Status',
  CLEAR_COMPLETED_TODO_ITEMS = '[TODO] Clear Completed TODO Items',
  CLEAR_TODO_LIST = '[TODO] Clear TODO List',
  FILTER_TODO_LIST = '[TODO] Filter TODO List',
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

export const clearCompletedTODOItemsAction = createAction(TODOActionsTypes.CLEAR_COMPLETED_TODO_ITEMS);

export const clearTODOListAction = createAction(TODOActionsTypes.CLEAR_TODO_LIST);

export const filterTODOListAction = createAction(
  TODOActionsTypes.FILTER_TODO_LIST,
  props<{ todoListFilter: string }>()
);

