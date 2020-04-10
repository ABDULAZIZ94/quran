import { Component, OnInit } from '@angular/core';
import { Fetchdata3Service } from '../services/fetchdata3.service';
@Component({
  selector: 'app-bacasurah',
  templateUrl: './bacasurah.component.html',
  styleUrls: ['./bacasurah.component.scss']
})
export class BacasurahComponent implements OnInit {

  constructor(public db:Fetchdata3Service) { }

  ngOnInit(): void {
    this.db.getSurah();
  }

}
