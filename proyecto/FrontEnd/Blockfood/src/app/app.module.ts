import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './rutas/home/home.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaBlogComponent } from './rutas/ruta-blog/ruta-blog.component';
import { MostrarBlogsComponent } from './rutas/mostrar-blogs/mostrar-blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutaMenuComponent,
    RutaLoginComponent,
    RutaCrearUsuarioComponent,
    RutaBlogComponent,

    MostrarBlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    //MatFormFieldModule,

 
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
