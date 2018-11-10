import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parallax01',
  templateUrl: './parallax01.component.html',
  styleUrls: ['./parallax01.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Parallax01Component implements OnInit {

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/parallax01.js'
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

  constructor() {
    this.loadScripts();
  }

  ngOnInit() {
  }

}
