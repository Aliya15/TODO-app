import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {QuestionBase} from "../question-base/question-base";
import {QuestionControlService} from "../../services/question-control-sevice/question-control.service";

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
  providers: [ QuestionControlService ]
})
export class FormBlockComponent {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
