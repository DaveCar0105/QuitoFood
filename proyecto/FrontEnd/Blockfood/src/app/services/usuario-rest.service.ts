import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
    
    export class UsuarioRestService{

        nombreModelo = '/Usuario';

        constructor(private readonly _httpClient: HttpClient){
        }
    
        findAllUsers(): Observable <Usuario[]>{

        const users$ = this._httpClient
        .get(environment.url + this.nombreModelo)
        .pipe(
            map(r => <Usuario[]> r));
        return users$; 
    }
    }

