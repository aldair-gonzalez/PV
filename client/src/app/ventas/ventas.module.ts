import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { IndexComponent } from './components/index/index.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuTicketsComponent } from './components/menu-tickets/menu-tickets.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { CuadroChequeComponent } from './components/cuadro-cheque/cuadro-cheque.component';
import { DialogCheckProductoComponent } from './components/dialog-check-producto/dialog-check-producto.component';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    MenuTicketsComponent,
    TablaProductosComponent,
    CuadroChequeComponent,
    DialogCheckProductoComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,

    CoreModule,
    SharedModule,
  ]
})
export class VentasModule { }
