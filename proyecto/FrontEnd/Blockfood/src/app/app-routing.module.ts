import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./rutas/home/home.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";

const routes: Routes = [


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
