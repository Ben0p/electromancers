import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../nav/nav.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  loadScripts() {
    const dynamicScripts = [
      '../assets/externalJS/particle.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor(
    private router: Router,
    public nav: NavbarService
  ) {
    this.loadScripts();
  }

  ngOnInit() {
    this.nav.hide();
    // document.body.classList.add('bg-img');
  }
  ngAfterViewInit() {
  }
  cardClick() {
    this.router.navigate(['/home']);
  }


}

