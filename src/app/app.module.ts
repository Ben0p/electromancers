import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { WaveLoaderComponent } from './wave-loader/wave-loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';

import { NavbarService } from './nav/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    WaveLoaderComponent,
    WelcomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
