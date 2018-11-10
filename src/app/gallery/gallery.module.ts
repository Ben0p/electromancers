import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';

import { GalleryComponent } from './gallery.component';
import { Parallax01Component } from './parallax01/parallax01.component';
import { Header01Component } from './header01/header01.component';
import { Parallax02Component } from './parallax02/parallax02.component';
import { Parallax03Component } from './parallax03/parallax03.component';
import { Parallax04Component } from './parallax04/parallax04.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    Parallax01Component,
    Header01Component,
    Parallax02Component,
    Parallax03Component,
    Parallax04Component]
})
export class GalleryModule { }
