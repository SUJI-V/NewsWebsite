import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessnewsComponent } from './bussinessnews/bussinessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BussinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
