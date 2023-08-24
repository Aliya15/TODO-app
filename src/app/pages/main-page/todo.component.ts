import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {QuestionBase} from "./model/question-base/question-base";
import {QuestionService} from "./services/question-service/question.service";
import {selectTodoList, selectTodoListFilter} from "./store/todo-form.selectors";
import {Store} from "@ngrx/store";
import {ITODOListItem} from "../../shared/models/todo-list-item.model";

@Component({
  selector: 'app-form',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  questions$: Observable<QuestionBase<any>[]>;
  todoList$: Observable<ITODOListItem[]> | null = this._store.select(selectTodoList);
  filters$: Observable<string> = this._store.select(selectTodoListFilter);

  constructor(private _questionService: QuestionService, private _store: Store) {
    this.questions$ = _questionService.getQuestions();
  }
}
