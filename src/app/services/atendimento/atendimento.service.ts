import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseService } from '../baseservice';
import { catchError, map } from "rxjs/operators";
import { Atendimento } from 'app/models/atendimento';


@Injectable()
export class AtendimentoService extends BaseService {

    path: string = "atendimentos/";

    constructor(private http: HttpClient) { super() }
    
    cadastrar(atendimento: Atendimento): Observable<Atendimento> { 
        return this.http
            .post(this.urlService + this.path, atendimento, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    editar(atendimento: Atendimento): Observable<Atendimento> { 
        return this.http
            .put(this.urlService + this.path + atendimento.id, atendimento, super.obterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    capturarTodos(): Observable<Atendimento[]> {
        return this.http
            .get<Atendimento[]>(this.urlService + this.path , super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarPorId(id: string): Observable<Atendimento> {
        return this.http
            .get<Atendimento>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    excluir(id: string): Observable<any> {
        return this.http
            .delete<any>(this.urlService + this.path + id, super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarQuantidadeAtendimentoMes(): Observable<any> {
        return this.http
            .get<any>(this.urlService + this.path + "quantidade/mes", super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarQuantidadeAtendimentoNegadoMes(): Observable<any> {
        return this.http
            .get<any>(this.urlService + this.path +"quantidade/negados", super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    capturarFaturamentoMensal(): Observable<any> {
        return this.http
            .get<any>(this.urlService + this.path + "faturamento/mes", super.obterHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}