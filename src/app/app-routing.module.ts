import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaisesComponent } from './list-paises/list-paises.component';
import { PaisesVisitadosComponent } from './paises-visitados/paises-visitados.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paises',
    pathMatch: 'full'
  },
  {
    path: 'paises',
    component: ListPaisesComponent,
  },
  {
    path: 'visitados',
    component: PaisesVisitadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
