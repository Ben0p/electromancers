import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }
  ngAfterViewInit() {
  }
  cardClick() {
    this.router.navigate(['/home']);
  }


}

