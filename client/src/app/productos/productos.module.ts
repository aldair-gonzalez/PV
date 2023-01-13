import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CoreModule } from '../core/core.module';
import { IndexComponent } from './components/index/index.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';


@NgModule({
  declarations: [
    IndexComponent,
    InventarioComponent,
    DepartamentosComponent,
  ],
  imports: [
    CommonModule,

    CoreModule,

    ProductosRoutingModule
  ]
})
export class ProductosModule { }
