import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../nav/nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    public nav: NavbarService
  ) { }

  ngOnInit() {
    this.nav.show();
    this.router.navigate(['/home', { outlets: { main: ['home'] } }]);
  }

}
