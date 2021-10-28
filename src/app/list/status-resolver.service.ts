import { HttpService } from '../services/http.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StatusResolverService implements Resolve<string> {
  constructor(private http: HttpService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<string> | Promise<string> | string {
    return this.http.getStatus().pipe(take(2));
  }
}
