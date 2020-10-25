import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";


import { Router } from '@angular/router';
import { LocalStorageUtils } from 'app/util/localstorage';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    localStorageUtil = new LocalStorageUtils();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(catchError(error => {
   
            if (error instanceof HttpErrorResponse) {

                if (error.status === 401 || error.status === 403 || error.status === 0) {
                    this.localStorageUtil.limparDadosLocaisUsuario();
                    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url }});
                }
            }

            return throwError(error);
        }));
    }

}