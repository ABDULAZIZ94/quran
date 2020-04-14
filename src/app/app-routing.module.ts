import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BacasurahComponent } from './bacasurah/bacasurah.component';
import { IndexsurahComponent } from './indexsurah/indexsurah.component';


const routes: Routes = [
  { path: 'quran/:nosura', component: BacasurahComponent },
  { path: '', component: IndexsurahComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
