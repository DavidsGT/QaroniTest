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
      console.log("auth 2")
            if (sessionStorage.getItem('tkn')) {
              console.log("auth 1")
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + sessionStorage.getItem('tkn'))
                });
                return next.handle(clonedreq).pipe(
                    tap((ev: HttpEvent<any>) => {
                        if (ev instanceof HttpResponse) {
                            if(ev.body){
                                console.info(`Leyendo desde el interceptor, este es el count: ${JSON.stringify(ev?.body?.count)}`);
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