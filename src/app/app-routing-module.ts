import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Departement } from './Pages/departement/departement';

const routes: Routes = [
  {
    path: 'departements',
    component:Departement
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
