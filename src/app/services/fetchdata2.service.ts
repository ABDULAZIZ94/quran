import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fetchdata2Service {
  
  public items: Observable<any[]>;
  
  constructor(public db: AngularFireDatabase) {}
  
  getSurah(){
    this.items = this.db.list('DaftarSurah').valueChanges();
    console.log(this.items);
  }

}
