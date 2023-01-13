import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '',    loadChildren: () => import('./ventas/ventas.module')            .then((m) => m.VentasModule) },
  { path: 'productos',   loadChildren: () => import('./productos/productos.module')      .then((m) => m.ProductosModule) },
  { path: 'movimientos',  loadChildren: () => import('./movimientos/movimientos.module')  .then((m) => m.MovimientosModule) },
  { path: 'reportes',     loadChildren: () => import('./reportes/reportes.module')        .then((m) => m.ReportesModule) },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
