import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './services/fetchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor( public fetchdataService : FetchdataService ) {
    
  }

  onSubmit(){
    let data = this.fetchdataService.form.value;
    console.log(data);
    this.fetchdataService.createComments(data).then( (res) => {});
  }
  ngOnInit(){this.displayComments()};

  comments;

  displayComments = () => this.fetchdataService.getComments().subscribe( res => {this.comments = res; console.log(this.comments)} );
  
}





