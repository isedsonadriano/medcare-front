import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { Observable } from 'rxjs';
import { BaseService } from '../baseservice';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class PacienteService extends BaseService {

    path: string = "pacientes/";

    constructor(private http: HttpClient) { super() }
    
    cadastrar(paciente: Paciente): Observable<Paciente> { 
        return this.http
            .post(this.urlService + this.path, paciente, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    editar(paciente: Paciente): Observable<Paciente> { 
        return this.http
            .put(this.urlService + this.path + paciente.id, paciente, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    capturarTodos(): Observable<Paciente[]> {
        return this.http
            .get<Paciente[]>(this.urlService + this.path, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarPorId(id: string): Observable<Paciente> {
        return this.http
            .get<Paciente>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarPorCodigo(codigo: string): Observable<Paciente> {
        return this.http
            .get<Paciente>(this.urlService + this.path + "codigo/" + codigo, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    excluir(id: string): Observable<any> {
        return this.http
            .delete<any>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarQuantidadeNovosPacientesMes(): Observable<any> {
        return this.http
        .get<any>(this.urlService + this.path + "quantidade/mes", super.obterHeaderJson())
        .pipe(catchError(super.serviceError));
    }
    
}