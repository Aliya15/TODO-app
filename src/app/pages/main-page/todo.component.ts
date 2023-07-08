import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {QuestionBase} from "./components/question-base/question-base";
import {QuestionService} from "./services/question-service/question.service";

@Component({
  selector: 'app-form',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
