import { HttpService } from './../services/http.service';
import { Task } from './../model/Task';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css'],
})
export class DoneTaskComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  tasksDone: Array<Task> = [];

  constructor(
    private httpService: HttpService,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.tasksDone = data.tasks.filter((a: Task) => a.isDone === true);
    });
  }

  removeTask(task: Task) {
    this.httpService.deleteTask(task);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
