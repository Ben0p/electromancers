import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.remove('bg-img');
  }

}
