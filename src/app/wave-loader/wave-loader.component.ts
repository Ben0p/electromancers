import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../nav/nav.service';


@Component({
  selector: 'app-wave-loader',
  templateUrl: './wave-loader.component.html',
  styleUrls: ['./wave-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WaveLoaderComponent implements OnInit, AfterViewInit {

  loadScripts() {
    const dynamicScripts = [
      'https://api.tiles.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js'
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
    document.body.classList.add('body');
    document.body.classList.remove('bg-img');
    setTimeout(() => {
      document.body.classList.remove('body');
      this.router.navigate(['/welcome']);
    }, 4000);
  }
  ngAfterViewInit() {
  }

}
