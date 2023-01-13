import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() filtros: boolean = false;

  opDeptos:  string[] = [
    'Departamento 1',
    'Departamento 2',
    'Departamento 3',
    'Departamento 4',
  ];
  opCat:     string[] = [
    'Categoria 1',
    'Categoria 2',
    'Categoria 3',
    'Categoria 4',
  ];
  opProv:    string[] = [
    'Proveedor 1',
    'Proveedor 2',
    'Proveedor 3',
    'Proveedor 4',
  ];
  opOrdenar: string[] = [
    'Más vendido',
    'Mayor precio',
    'Menor precio',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
