import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { RouterModule } from '@angular/router';
import { InputSelectComponent } from './components/inputs/input-select/input-select.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    WrapperComponent,
    SearchBarComponent,
    TableComponent,
    DialogComponent,
    SubNavbarComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WrapperComponent,
    SearchBarComponent,
    TableComponent,
    DialogComponent,
    SubNavbarComponent,
    InputSelectComponent,
    InputNumberComponent,
    InputTextComponent
  ]
})
export class CoreModule { }
