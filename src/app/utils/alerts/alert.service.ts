import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from './alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // En caso de respuesta de servicio
    responseService(resp:any) {
        let options = {
            autoClose: true,
            keepAfterRouteChange: true
        };
        let message:string = "Error inseperado. Consulte con su proveedor.";
        let type:AlertType = AlertType.Error;
        if(resp){
            if(resp.datos){
                if(!(resp.datos[0].codigo == 100 || resp.datos[0].status=="100")){
                    if(resp.datos[0].status == "ERROR"){
                        message = resp.datos[0].mensaje;
                    }
                }
            }
        }
        this.alert(new Alert({ ...options, type: type, message }));
    }

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    // main alert method    
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }
}