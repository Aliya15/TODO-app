import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {QuestionBase} from "../../model/question-base/question-base";
import {QuestionControlService} from "../../services/question-control-sevice/question-control.service";
import {Store} from "@ngrx/store";
import {addTODOItemAction} from "../../store/todo-form.actions";

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
  providers: [QuestionControlService]
})
export class FormBlockComponent {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;

  constructor(private _qcs: QuestionControlService, private _store: Store) {
  }

  ngOnInit() {
    this.form = this._qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this._store.dispatch(addTODOItemAction({listItem: this.form.getRawValue()}));
    this.form.setValue({title: '', priority: ''});
  }
}
