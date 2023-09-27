import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            if (sessionStorage.getItem('tkn')) {
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + sessionStorage.getItem('token_fks'))
                });
                return next.handle(clonedreq).pipe(
                    tap((ev: HttpEvent<any>) => {
                        if (ev instanceof HttpResponse) {
                            if(ev.body!=null){
                                if(ev.body.datos){
                                    if(ev.body.datos[0] != undefined){
                                        if(ev.body.datos[0].codigo == 141){
                                            sessionStorage.clear();
                                            this.router.navigateByUrl('/login');
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    catchError( (error) => {
                        alert("Error inesperado, consulte con su proveedor.")
                        if (error.status === 401)
                            this.router.navigateByUrl('/login');
                        return throwError(error);
                    }));
            }
            else {
                this.router.navigateByUrl('/login');
            }
      return next.handle(req);
    }
        
}