import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import { Task } from './../model/Task';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {
    this.getTasks();
  }

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  tasks$ = this.taskListObs.asObservable();

  private status = new BehaviorSubject<string>('');
  status$ = this.status.asObservable();

  getTasks() {
    this.http.get<Array<Task>>('http://localhost:3000/posts').subscribe(
      (tasks) => {
        this.taskListObs.next(tasks);
      },
      (error) => {
        this.status.next(error.name);
        //console.log('getTasks ' + error.name);
      },
      () => {
        this.status.next('');
      }
    );
  }

  addTask(task: Task) {
    //console.log('AddTask ' + task.name);
    this.http.post<Task>('http://localhost:3000/posts', task).subscribe(
      () => {},
      (error) => {
        this.status.next(error.name);
        //console.log('getTasks ' + error.name);
      },
      () => {
        this.getTasks();
      }
    );
  }

  deleteTask(task: Task) {
    this.http.delete('http://localhost:3000/posts/' + task.id).subscribe(
      () => {},
      (error) => {
        this.status.next(error.name);
        //console.log('getTasks ' + error.name);
      },
      () => {
        this.getTasks();
      }
    );
  }

  updateTask(task: Task) {
    task.end =
      new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString();
    task.isDone = true;

    this.http
      .put<Task>('http://localhost:3000/posts/' + task.id, task)
      .subscribe(
        () => {},
        (error) => {
          this.status.next(error.name);
          //console.log('getTasks ' + error.name);
        },
        () => {
          this.getTasks();
        }
      );
  }

  getStatus(): Observable<string> {
    return this.status$;
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.tasks$;
  }


  /*

      const tasksList = [
      {_id: {$oid:'1'},name: 'Mycie naczyń',created: new Date().toLocaleString(),isDone: false},
      {_id: {$oid:'2'},name: 'Sprzątanie garażu',created:new Date().toLocaleString(),isDone: false},
      {_id: {$oid:'3'},name: 'Mycie okien',created:new Date().toLocaleString(),isDone: false},
      {_id: {$oid:'4'},name: 'Gotowanie obiadu',created:new Date().toLocaleString(),isDone: false},
      {_id: {$oid:'5'},name: 'Pranie',created:'24.07.2021',end:'28.07.2021',isDone: true}
    ]

  Start JSON Server

  cd ..
  cd FakeRestApi

  cd D:\Angular_Projects\FakeRestApi

  json-server --watch db.json

  Now if you go to http://localhost:3000/posts/1, you'll get

  { "id": 1, "title": "json-server", "author": "typicode" }

  GET    /posts
  GET    /posts/1
  POST   /posts
  PUT    /posts/1
  PATCH  /posts/1
  DELETE /posts/1
  */
}
