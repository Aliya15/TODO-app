import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from "@ngrx/store";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
