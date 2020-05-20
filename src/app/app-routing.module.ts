import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WufoundationService } from './wufoundation.service';
import { WufoundtionComponent } from './wufoundtion/wufoundtion.component';


const routes: Routes = [
  {path:"wufoundation",component:WufoundtionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
