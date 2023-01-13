import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { IndexComponent } from './components/index/index.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,

    CoreModule,

    MovimientosRoutingModule
  ]
})
export class MovimientosModule { }
