import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColunasDinamicasComponent } from './colunas-dinamicas/colunas-dinamicas.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';


const routes: Routes = [
  {
    path: 'colunas-dinamicas',
    component: ColunasDinamicasComponent
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
