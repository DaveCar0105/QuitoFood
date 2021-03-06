import { Component, OnInit, HostBinding } from '@angular/core';
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

@HostBinding ('class') classes = 'row';

  blogs:any = [];
  
  constructor(
    private readonly _blogRestService: BlogRestService,
    private readonly _usuarioRestService: UsuarioRestService
  ) {


  }

  ngOnInit() {

    this.getBlogs(); 

    
    const users$ = this._usuarioRestService.findAllUsers();
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
  getBlogs(){

    
    const blogs$ = this._blogRestService.findAllBlogs();
    
    blogs$
    .subscribe(
      (blogs : Blog[])=>{
        console.log(blogs);
        this.blogs = blogs;
      },
      (error)=>{
        console.log('Error'+error);

      }
    )


  }
  deleteBlog(id : number){
    console.log(id+'y ver si funciona');

    this._blogRestService.deleteBlog(id)
    .subscribe(
      (req)=>{
      console.log(req);
      this.getBlogs();
    },
      (error)=>{
          console.log('error'+error);   
      }
   )       
  }
}
