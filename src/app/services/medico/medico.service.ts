import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../baseservice';
import { catchError, map } from "rxjs/operators";
import { Medico } from 'app/models/medico';

@Injectable()
export class MedicoService extends BaseService {

    path: string = "medicos/";

    constructor(private http: HttpClient) { super() }
    
    cadastrar(medico: Medico): Observable<Medico> { 
        return this.http
            .post(this.urlService + this.path, medico, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    editar(medico: Medico): Observable<Medico> { 
        return this.http
            .put(this.urlService + this.path + medico.id, medico, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    capturarTodos(): Observable<Medico[]> {
        return this.http
            .get<Medico[]>(this.urlService + this.path, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarPorId(id: string): Observable<Medico> {
        return this.http
            .get<Medico>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    excluir(id: string): Observable<any> {
        return this.http
            .delete<any>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}