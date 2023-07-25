import {Component, Input} from '@angular/core';
import {ITODOListItem} from "../../../../shared/models/todo-list-item.model";
import {Store} from "@ngrx/store";
import {changeItemStatusAction} from "../../store/todo-form.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoItem?: ITODOListItem;

  constructor(private _store: Store) {
  }

  changeTodoItemStatus() {
    if(!this.todoItem?.id) return;
    this._store.dispatch(changeItemStatusAction({listItemId: this.todoItem.id}))
  }
}
