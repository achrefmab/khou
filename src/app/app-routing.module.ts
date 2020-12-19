import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", component : FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
