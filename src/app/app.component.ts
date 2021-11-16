import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpService } from './services/http.service';
import { Component, OnDestroy, Pipe } from '@angular/core';
import { Router, RouterEvent, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Lista zadań';

  constructor(){ }

  bMenuHide : boolean = true;

  HttpStatus: string = '';

  hideMenu(){
    this.bMenuHide = !this.bMenuHide;
  }


}
