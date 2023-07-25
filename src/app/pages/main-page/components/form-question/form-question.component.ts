import {Component, Input} from '@angular/core';
import {QuestionBase} from "../../model/question-base/question-base";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
}
