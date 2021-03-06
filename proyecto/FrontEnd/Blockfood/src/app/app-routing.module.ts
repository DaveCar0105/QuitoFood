import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./rutas/home/home.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaBlogComponent } from './rutas/ruta-blog/ruta-blog.component';
import { MostrarBlogsComponent} from "./rutas/mostrar-blogs/mostrar-blogs.component";
import { CrearBlogComponent } from './rutas/crear-blog/crear-blog.component';


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
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'crearUser',
    component: RutaCrearUsuarioComponent,

  },
  {
    path: 'blog',
    component: RutaBlogComponent,
  },
  {
    path: 'mostrarBlog',
    component: MostrarBlogsComponent,
  },
  {
    path: 'addBlog',
    component: CrearBlogComponent,
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
