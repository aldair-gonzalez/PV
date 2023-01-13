import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  columnas: string[] = [
    'select',
    'codigo',
    'producto',
    'departamento',
    'categoria',
    'proveedor',
    'inv. min',
    'existencia',
    'p. costo',
    'p. venta',
  ];

  filas: any[] = [
    {
      codigo: '9834567',
      producto: 'Producto 1',
      departamento: 'tecnologia',
      categoria: 'celulares',
      proveedor: 'apple',
      invMinimo: '15',
      existencia: '37',
      pCosto: '17000',
      pVenta: '20000',
    },
    {
      codigo: '9834567',
      producto: 'Producto 1',
      departamento: 'tecnologia',
      categoria: 'celulares',
      proveedor: 'apple',
      invMinimo: '15',
      existencia: '37',
      pCosto: '17000',
      pVenta: '20000',
    },
    {
      codigo: '9834567',
      producto: 'Producto 1',
      departamento: 'tecnologia',
      categoria: 'celulares',
      proveedor: 'apple',
      invMinimo: '15',
      existencia: '37',
      pCosto: '17000',
      pVenta: '20000',
    },
    {
      codigo: '9834567',
      producto: 'Producto 1',
      departamento: 'tecnologia',
      categoria: 'celulares',
      proveedor: 'apple',
      invMinimo: '15',
      existencia: '37',
      pCosto: '17000',
      pVenta: '20000',
    },
    {
      codigo: '9834567',
      producto: 'Producto 1',
      departamento: 'tecnologia',
      categoria: 'celulares',
      proveedor: 'apple',
      invMinimo: '15',
      existencia: '37',
      pCosto: '17000',
      pVenta: '20000',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
