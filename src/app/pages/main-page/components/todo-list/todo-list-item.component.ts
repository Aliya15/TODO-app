import { Component, Input } from '@angular/core';
import { type ITODOListItem } from '../../../../shared/models/todo-list-item.model';
import { Store } from '@ngrx/store';
import { changeItemStatusAction, removeTODOItemAction } from '../../store/todo-form.actions';
import { PriorityIcons } from '../../model/enums/todo.enums';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todoItem?: ITODOListItem;

  priorityIcons: Record<string, string> = PriorityIcons;

  constructor (private readonly _store: Store) {
  }

  changeTodoItemStatus () {
    if (!this.todoItem?.id) return;
    this._store.dispatch(changeItemStatusAction({ listItemId: this.todoItem.id }));
  }

  deleteItem () {
    if (!this.todoItem?.id) return;
    this._store.dispatch(removeTODOItemAction({ listItemId: this.todoItem.id }));
  }
}
