import { Component, OnInit } from '@angular/core';

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
  
  
  constructor() {

  }

  ngOnInit() {
    


  }

}
