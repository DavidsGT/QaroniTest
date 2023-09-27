import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';
import { AlertService } from '../utils/alerts/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  reqHeader:HttpHeaders = new HttpHeaders(
    {
      "Content-Type": "application/json; charset=utf-8"
    }
  );
  
  constructor(
    private httpWithBackend:HttpClient,handler: HttpBackend, private router : Router,
    private alertService: AlertService
  ) { 
    this.httpWithBackend = new HttpClient(handler);
  }
  
  login(user: User) {
    const url: string = `${environment.urlServices}/merchants/${environment.merchantId}/users/logins`;
    return this.httpWithBackend.post(url ,JSON.stringify(user),{ 
      headers: this.reqHeader
    }).pipe(
      map((resp: any) => {
        return resp.result?.find((a:any)=>(a));
       }),
      catchError((err) => {
        this.alertService.error(err?.error?.errors?.find((a:any)=>(a))?.title);
        this.router.navigate(['/home']);
        return EMPTY;
      })
    )
    .subscribe(
      (resp:any)=>{
        sessionStorage.setItem("tkn",resp.access_token);
        this.router.navigate(['/home']);
      }
    );;
  }
}
