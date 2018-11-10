import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WaveLoaderComponent } from './wave-loader/wave-loader.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WaveLoaderComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
