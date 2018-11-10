import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material';

// components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServicesComponent } from './services/services.component';
import { MainComponent } from './main.component';



@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ToolbarComponent,
    ServicesComponent,
    MainComponent,
  ]
})
export class MainModule { }
