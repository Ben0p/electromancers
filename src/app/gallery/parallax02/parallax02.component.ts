import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parallax02',
  templateUrl: './parallax02.component.html',
  styleUrls: ['./parallax02.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Parallax02Component implements OnInit {

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/parallax02.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }

  constructor() {
    this.loadScripts();
  }

  ngOnInit() {
  }

}
