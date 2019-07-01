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
  constructor() {

  }

  ngOnInit() {



  }

}
