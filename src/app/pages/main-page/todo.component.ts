import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {QuestionBase} from "./model/question-base/question-base";
import {QuestionService} from "./services/question-service/question.service";
import {selectTodoList} from "./store/todo-form.selectors";
import {Store} from "@ngrx/store";
import {ITODOListItem} from "../../shared/models/todo-list-item.model";

@Component({
  selector: 'app-form',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy{
  questions$: Observable<QuestionBase<any>[]>;
  todoList$: Observable<ITODOListItem[]> | null = this._store.select(selectTodoList);

  constructor(private _questionService: QuestionService, private _store: Store) {
    this.questions$ = _questionService.getQuestions();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    const scrollTopVal = event.target?.scrollingElement.scrollTop;
    if(scrollTopVal >= 100) {
      // event.target.scrollingElement.setAttribute('className', '.navbar-inverse')
      event.target.scrollingElement.getElementsByClassName('block')?.item(0)?.setAttribute('id', 'navbar-inverse');
    } else if (scrollTopVal < 100) {
      event.target.scrollingElement.getElementsByClassName('block')?.item(0)?.removeAttribute('id');
    }
  }
}
