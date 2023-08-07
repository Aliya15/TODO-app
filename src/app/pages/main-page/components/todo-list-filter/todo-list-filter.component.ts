import { Component } from '@angular/core'
import { todoFiltersList } from '../../model/constants/todo.constants'
import { TODOFilters } from '../../model/enums/todo.enums'
import {clearCompletedTODOItemsAction, filterTODOListAction} from '../../store/todo-form.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list-filter',
  templateUrl: './todo-list-filter.component.html',
  styleUrls: ['./todo-list-filter.component.scss']
})
export class TodoListFilterComponent {
  todoFiltersList: string[] = todoFiltersList;
  TODOFilters = TODOFilters;

  constructor (private readonly _store: Store) {
  }

  changeTodoFilter (todoFilter: string): void {
    this._store.dispatch(filterTODOListAction({ todoListFilter: todoFilter }));
  }

  clearCompletedItems(): void {
    this._store.dispatch(clearCompletedTODOItemsAction());
  }
}
