import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';
import { AlertService } from '../utils/alerts/alert.service';
import { New } from '../interfaces/new';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });
  
  constructor(
    private httpWithBackend:HttpClient,handler: HttpBackend,
    private alertService: AlertService
  ) { 
    this.httpWithBackend = new HttpClient(handler);
  }
  
  getAll() {
    const url: string = `${environment.urlServices}/merchants/${environment.merchantId}/news`;
    return this.httpWithBackend.get<New>(url ,{ 
      headers: this.headers
    }).pipe(
      map((resp: any) => {
        return resp.result;
       }),
      catchError((err) => {
        this.alertService.error(err?.error?.errors?.find((a:any)=>(a))?.title)
        return EMPTY;
      })
    )
  }
  getById(id:number) {
    const url: string = `${environment.urlServices}/merchants/${environment.merchantId}/news/${id}`;
    return this.httpWithBackend.get<New>(url ,{ 
      headers: this.headers
    }).pipe(
      map((resp: any) => {
        return resp.result?.find((n:New)=>(n));
       }),
      catchError((err) => {
        this.alertService.error(err?.error?.errors?.find((a:any)=>(a))?.title)
        return EMPTY;
      })
    )
  }
}
