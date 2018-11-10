import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
  path: 'about',
  component: AboutComponent,
  outlet: 'main'
  },
  {
  path: 'services',
  component: ServicesComponent,
  outlet: 'main'
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'main'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
