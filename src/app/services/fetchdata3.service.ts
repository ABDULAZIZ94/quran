import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fetchdata3Service implements OnInit{
  
  items: Observable<any[]>;

  SuraID : any = 1;

  constructor(public db: AngularFireDatabase) {
    
  }
  ngOnInit(){
    this.getSurah();
  }

  setSurah(SuraID){
    this.SuraID = SuraID;
  }
  getSurah(){
    this.items = this.db.list('MushafQuranArab', ref => ref.orderByChild("SuraID").equalTo('1')).valueChanges();
    console.log(this.items);
  }
  getSurahNo(no: string) {
    this.items = this.db.list('MushafQuranArab', ref => ref.orderByChild("SuraID").equalTo(no)).valueChanges();
    console.log(this.items);
  }
}
