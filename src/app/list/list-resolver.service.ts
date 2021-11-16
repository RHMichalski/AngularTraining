import { HttpService } from '../services/http.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListResolverService implements Resolve<Array<Task>> {
  constructor(private http: HttpService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Task>> {
    return this.http.getTasks().pipe(take(1));
  }
}
