import { Component, OnInit } from '@angular/core';
import { Fetchdata2Service } from '../services/fetchdata2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexsurah',
  templateUrl: './indexsurah.component.html',
  styleUrls: ['./indexsurah.component.scss']
})
export class IndexsurahComponent implements OnInit {

  constructor(public db: Fetchdata2Service, public router: Router) { }

  ngOnInit(): void {
    this.getSurah();
  }
  getSurah(){
    this.db.getSurah();
  }

  goBaca(id: string){
    this.router.navigate(['/quran/'+id]);
  }

}
