import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './../model/Task';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const PATH_PREFIX = '/api';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>('http://localhost:3000/posts').pipe(retry(3), catchError(this.handleError));
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`http://localhost:3000/posts`, task).pipe(retry(1), catchError(this.handleError));
  }

  deleteTask(task: Task) : Observable<Task> {
   return this.http.delete<Task>('http://localhost:3000/posts/' + task.id).pipe(retry(1), catchError(this.handleError));
  }


  updateTask(task: Task): Observable<Task> {
    task.end = new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString();
    task.isDone = true;
    console.log(task);

    return this.http.put<Task>('http://localhost:3000/posts/' + task.id + '/', task).pipe(retry(1), catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
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

  json-server db.json --routes routes.json

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
