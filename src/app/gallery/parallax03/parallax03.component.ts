import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax03',
  templateUrl: './parallax03.component.html',
  styleUrls: ['./parallax03.component.scss']
})
export class Parallax03Component implements OnInit {

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/parallax03.js'
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
