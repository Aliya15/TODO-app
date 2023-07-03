import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from "./form.component";
import {FormBlockComponent} from "./components/form-block/form-block/form-block.component";


@NgModule({
  declarations: [FormComponent, FormBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [FormComponent, FormBlockComponent],
})
export class FormModule {
}
