import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { SortNamePipe } from './shared/sort-name.pipe';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpComponent } from './help/help.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    SortNamePipe,
    TransformTaskPipe,
    HelpComponent,
    ListComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
