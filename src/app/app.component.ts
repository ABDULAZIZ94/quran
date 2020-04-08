import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quran';
  durationInSeconds = 5;
  option="";
  constructor() {
    
  }
}

