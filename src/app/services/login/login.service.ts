import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../baseservice';
import { map, catchError } from 'rxjs/operators';
import { LocalStorageUtils } from 'app/util/localstorage';
import { Observable } from 'rxjs';
import { Usuario } from 'app/models/usuario';


@Injectable()
export class LoginService extends BaseService {

    localStorageUtils: LocalStorageUtils

    constructor(private http: HttpClient) { super() }
    

    login(usuario:Usuario): Observable<any> {
        let response = this.http
        .post(this.urlService + 'auth', usuario, this.obterHeaderJson())
        .pipe(
            map(this.extractData),
            catchError(this.serviceError));

        return response;
    }

   
    
}