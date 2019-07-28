import { from } from 'rxjs';
import {Injectable} from  '@angular/core';
import { HttpClient} from '@angular/common/http';
   

@Injectable()
export class BlogRestService {
    
    nombreModelo = '/blog';

        constructor(private readonly _httpClient:HttpClient){

        }

    findAll(){

        
    }


}