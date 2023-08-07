import { Pipe, PipeTransform } from '@angular/core';
import {ITODOListItem} from "../../../../shared/models/todo-list-item.model";
import {TODOFilters} from "../../model/enums/todo.enums";

@Pipe({
  name: 'todoListFilter'
})
export class TodoListFilterPipe implements PipeTransform {

  transform(list: ITODOListItem[], filter: string): ITODOListItem[] {
    if(filter === TODOFilters.active) {
      return list.filter((listItem: ITODOListItem) => !listItem.completed);
    } else if(filter === TODOFilters.completed) {
      return list.filter((listItem: ITODOListItem) => listItem.completed);
    }
    return list;
  }

}
