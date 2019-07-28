import { Component, OnInit } from '@angular/core';
import { BlogRestService } from 'src/app/services/blog-rest.service';
import { Blog } from 'src/app/interfaces/blog';
import { UsuarioRestService } from 'src/app/services/usuario-rest.service';
import { Usuario } from 'src/app/interfaces/user';

@Component({
  selector: 'app-ruta-blog',
  templateUrl: './ruta-blog.component.html',
  styleUrls: ['./ruta-blog.component.scss']
})
export class RutaBlogComponent implements OnInit {

  saveBlog(){
    alert("Blog guardado con exito");
  }

    /*blogs = [
      {
      autor:"rommel",
      descripcion: "son las mejores papas",
      puntuacion: 5
      }, 
      {
      autor:"alex",
      descripcion: "los mejores sanduches",
      puntuacion: 10
      },
      {
      autor:"david",
      descripcion: "nada de malo en el restaurant",
      puntuacion: 4
      },
  ]*/
  blogs = ["pedro","juan","maria"]
  
  
  constructor(
    private readonly _blogRestService: BlogRestService,
    private readonly _usuarioRestService: UsuarioRestService
  ) {


  }

  ngOnInit() {

    const blogs$ = this._blogRestService.findAll();
    
    blogs$
    .subscribe(
      (blogs : Blog[])=>{
        console.log(blogs);
      },
      (error)=>{
        console.log('Error'+error);
      }
    )
    
    const users$ = this._usuarioRestService.findAll();
    users$
    .subscribe(
      (users : Usuario[])=>{
        console.log(users);
      },
        (error)=>{
            console.log('error'+error);   
        }
    )


  }

}
