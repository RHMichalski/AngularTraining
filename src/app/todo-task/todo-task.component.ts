import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  private ngUnsubscribe = new Subject();

  constructor(
    private httpService: HttpService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.tasksList = data.tasks.filter((a: Task) => a.isDone === false);
    });
    console.log(this.tasksList);
  }

  ngOnInit(): void {}

  tasksList: Array<Task> = [];

  removeTask(task: Task) {
    this.httpService.deleteTask(task);
  }

  doneTask(task: Task) {
    this.httpService.updateTask(task);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
