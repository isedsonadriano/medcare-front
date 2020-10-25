import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../baseservice';
import { catchError, map } from "rxjs/operators";
import { Procedimento } from 'app/models/procedimento';

@Injectable()
export class ProcedimentoService extends BaseService {

    path: string = "procedimentos/";

    constructor(private http: HttpClient) { super() }
    
    cadastrar(paciente: Procedimento): Observable<Procedimento> { 
        return this.http
            .post(this.urlService + this.path, paciente, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    editar(paciente: Procedimento): Observable<Procedimento> { 
        return this.http
            .put(this.urlService + this.path + paciente.id, paciente, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    capturarTodos(): Observable<Procedimento[]> {
        return this.http
            .get<Procedimento[]>(this.urlService + this.path , super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarPorId(id: string): Observable<Procedimento> {
        return this.http
            .get<Procedimento>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    excluir(id: string): Observable<any> {
        return this.http
            .delete<any>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}