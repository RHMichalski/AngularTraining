import { Task } from './../model/Task';
import { HttpService } from './../services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  tasksDone!: Array<Task>;

  constructor(
    private httpservice: HttpService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => (this.HttpStatus = data.status));
  }

  HttpStatus: string = '';
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
