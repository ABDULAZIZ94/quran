import { Component, OnInit } from '@angular/core';
import { Fetchdata3Service } from '../services/fetchdata3.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bacasurah',
  templateUrl: './bacasurah.component.html',
  styleUrls: ['./bacasurah.component.scss']
})
export class BacasurahComponent implements OnInit {

  selectedId: string;

  constructor(public db:Fetchdata3Service, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.paramMap.get('nosura');
        
    this.db.getSurahNo(this.selectedId);
  }

}
