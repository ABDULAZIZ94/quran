import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'  // no need to place at providers due to the `providedIn` flag...
})
export class FetchdataService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({        
    comment1: new FormControl(''),
    comment2: new FormControl('')
  });

  createComments(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("comments")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  };

  
  getComments(){
    return this.firestore.collection("comments").snapshotChanges();
  }
}
