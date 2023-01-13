import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tickets',
  templateUrl: './menu-tickets.component.html',
  styleUrls: ['./menu-tickets.component.scss']
})
export class MenuTicketsComponent implements OnInit {
  tickets = [
    {
      path: 'ticket/1',
      title: 'Ticket 1',
      active: false,
    },
    {
      path: 'ticket/2',
      title: 'Ticket 2',
      active: false,
    },
    {
      path: 'ticket/3',
      title: 'Ticket 3',
      active: false,
    },
    {
      path: 'ticket/4',
      title: 'Ticket 4',
      active: false,
    },
  ]

  enlace: string = '';

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.changePath();
    this.router.events.subscribe((val) => {
      this.changePath();
    });
  }

  async changePath() {
    this.enlace = this.location.path();
    const ticket = this.tickets.map((t) => ('/' + t.path).includes(this.enlace));

    for (let i = 0; i < this.tickets.length; i++) {
      this.tickets[i].active = ticket[i];
    }
  }

  handleActive(data: any) {
    this.tickets.forEach((e) => {
      e.active = false;
      data.active = true;
    })
  }

  createTicket() {
    const newTicket = {
      path: `ticket/${this.tickets.length + 1}`,
      title: `Ticket ${this.tickets.length + 1}`,
      active: false,
    }
    this.tickets.push(newTicket);
  }

}
