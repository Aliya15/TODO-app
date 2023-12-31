import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {QuestionBase} from "../../model/question-base/question-base";
import {TextBoxQuestion} from "../../model/question-base/question-textbox";
import {QuestionDropdown} from "../../model/question-base/question-dropdown";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new QuestionDropdown({
        key: 'priority',
        label: 'Priority',
        options: [
          {key: 'none', value: 'None'},
          {key: 'low', value: 'Low'},
          {key: 'medium', value: 'Medium'},
          {key: 'high', value: 'High'}
        ],
        order: 2
      }),

      new TextBoxQuestion({
        key: 'title',
        label: 'title',
        type: 'text',
        required: true,
        order: 1
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
