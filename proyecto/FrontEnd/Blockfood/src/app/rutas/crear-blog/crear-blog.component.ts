import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogRestService } from 'src/app/services/blog-rest.service';

@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrls: ['./crear-blog.component.scss']
})
export class CrearBlogComponent implements OnInit {

  blog: Blog = {
    id:0,
    titulo:'',
    contenido:'',
    puntuacion: 2,
    imagen:''

  }


  constructor(private readonly _blogRestService:BlogRestService) { }

  ngOnInit() {
  
  }   

  saveNewBlog(){
    
    delete this.blog.id;

    this._blogRestService.saveGame(this.blog)
    .subscribe(
      res => {
        console.log(res);
        
      },
      err => console.error(err)
    )  
  }
}
