import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EMPTY, catchError, map } from 'rxjs';
import { AlertService } from '../utils/alerts/alert.service';
import { Group } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService{
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });
  
  constructor(
    private httpClient:HttpClient,
    private alertService: AlertService
  ) { 
  }
  
  getAll() {
    const url: string = `${environment.urlServices}/merchants/${environment.merchantId}/groups`;
    return this.httpClient.get<Group>(url ,{ 
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
    const url: string = `${environment.urlServices}/merchants/${environment.merchantId}/groups/${id}`;
    return this.httpClient.get<Group>(url ,{ 
      headers: this.headers
    }).pipe(
      map((resp: any) => {
        return resp.result?.find((n:Group)=>(n));
       }),
      catchError((err) => {
        this.alertService.error(err?.error?.errors?.find((a:any)=>(a))?.title)
        return EMPTY;
      })
    )
  }
}
