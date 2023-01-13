import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: DashboardComponent, children: [

      {path: 'ticket', redirectTo: 'ticket/1', pathMatch: 'full'},

      {path: 'ticket', children: [
        {path: ':id', component: TablaProductosComponent},
      ]},

      {path: '', redirectTo: 'ticket/1', pathMatch: 'full'},

    ]},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
