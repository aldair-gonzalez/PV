import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  departamentos: any[] = [
    {
      title: 'Departamento 1',
      active: true,
    },
    {
      title: 'Departamento 2',
      active: false,
    },
    {
      title: 'Departamento 3',
      active: false,
    },
    {
      title: 'Departamento 4',
      active: false,
    },
    {
      title: 'Departamento 5',
      active: false,
    },
    {
      title: 'Departamento 6',
      active: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleActive(data: any) {
    this.departamentos.forEach((e) => {
      e.active = false;
      data.active = true;
    })
  }

}
