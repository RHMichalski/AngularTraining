import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  tasksList: Array<Task> = [];

  constructor(
    private httpService: HttpService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.actRoute.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.tasksList = data.tasks.filter((a: Task) => a.isDone === false);
    });
  }

  ngOnInit(): void {}

  removeTask(task: Task) {
    this.httpService.deleteTask(task).subscribe(() => { this.router.navigate(['/Lista']); });
  }

  doneTask(task: Task) {
    this.httpService.updateTask(task).subscribe(() => { this.router.navigate(['/Lista']); });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
