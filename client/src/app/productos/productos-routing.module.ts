import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: InventarioComponent},
    {path: 'departamentos', component: DepartamentosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
