import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './rutas/home/home.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutaMenuComponent,
    RutaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
