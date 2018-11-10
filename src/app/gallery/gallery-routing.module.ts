import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { GalleryComponent } from './gallery.component';
import { Parallax01Component } from './parallax01/parallax01.component';
import { Parallax02Component } from './parallax02/parallax02.component';
import { Parallax03Component } from './parallax03/parallax03.component';
import { Parallax04Component } from './parallax04/parallax04.component';
import { Header01Component } from './header01/header01.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: 'parallax01',
    component: Parallax01Component,
  },
  {
    path: 'parallax02',
    component: Parallax02Component,
  },
  {
    path: 'parallax03',
    component: Parallax03Component,
  },
  {
    path: 'parallax04',
    component: Parallax04Component,
  },
  {
    path: 'header01',
    component: Header01Component,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
