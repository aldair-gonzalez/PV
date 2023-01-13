import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {
  columnas: string[] = [
    'Codigo',
    'Producto',
    'Cant',
    'Precio venta',
    'Desc',
    'Importe',
  ]

  filas = [
    {
      codigo: '378456',
      descripcion: 'Apple MacBook Pro',
      cantidad: '1',
      precio: '$3500',
      descuento: '10',
      importe: '$3150',
    },
    {
      codigo: '378456',
      descripcion: 'Apple MacBook Pro',
      cantidad: '1',
      precio: '$3500',
      descuento: '10',
      importe: '$3150',
    }
  ]

  constructor() { }

  ngOnInit(): void {}

}
