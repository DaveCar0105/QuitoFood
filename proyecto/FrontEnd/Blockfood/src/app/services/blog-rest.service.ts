import { from, Observable } from 'rxjs';
import {Injectable} from  '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Blog } from '../interfaces/Blog';
import {map} from 'rxjs/operators';


   

@Injectable()
export class BlogRestService {
    
    nombreModelo = '/Blog';

        constructor(private readonly _httpClient:HttpClient){

        }

    findAllBlogs(): Observable <Blog[]> {

        const blogs$ = this._httpClient
        .get(environment.url + this.nombreModelo)
        .pipe(
            map(r => <Blog[]> r));
        return blogs$;
    }

    saveGame(blog: Blog) {
        return this._httpClient.post(environment.url+this.nombreModelo, blog);
      }
    




}

