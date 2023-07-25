import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from "./todo.component";
import {FormBlockComponent} from "./components/form-block/form-block.component";
import {TodoRoutingModule} from "./todo-routing.module";
import { FormQuestionComponent } from './components/form-question/form-question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {StoreModule} from "@ngrx/store";
import {TODO_LIST_KEY, todoFeature} from "./store/todo-form.reducer";
import {CoreModule} from "../../core/core.module";
import {ComponentsModule} from "../../shared/components/components.module";

@NgModule({
  declarations: [TodoComponent, FormBlockComponent, FormQuestionComponent, TodoListComponent],
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(TODO_LIST_KEY, todoFeature.reducer),
        CoreModule,
        ComponentsModule
    ],
  exports: [TodoComponent, FormBlockComponent],
})
export class TodoModule {
}
