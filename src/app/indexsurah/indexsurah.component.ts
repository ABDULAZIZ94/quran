import { Component, OnInit } from '@angular/core';
import { Fetchdata2Service } from '../services/fetchdata2.service';

@Component({
  selector: 'app-indexsurah',
  templateUrl: './indexsurah.component.html',
  styleUrls: ['./indexsurah.component.scss']
})
export class IndexsurahComponent implements OnInit {

  constructor(public db: Fetchdata2Service) { }

  ngOnInit(): void {
    this.getSurah();
  }
  getSurah(){
    this.db.getSurah();
  }

}
