import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Enlaces } from '../../../models/enlaces.model';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent implements OnInit {
  @Input() enlaces!: Enlaces[];

  iconos: any[] = [];

  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {

    for (let i = 0; i < this.enlaces.length; i++) {
      let icon = this.enlaces[i].svg;
      this.iconos.push(this.sanitizer.bypassSecurityTrustHtml(icon));
    }

  }

  handleFunction(func?: Function): void {
    func ? func() : null;
  }

}
