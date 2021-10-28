import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Lista zadań';

  constructor(){}

  bMenuHide : boolean = true;

  hideMenu(){
    this.bMenuHide = !this.bMenuHide;
  }

}
