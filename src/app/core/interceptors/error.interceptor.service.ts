import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorAlertService } from '../service/error-alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private errorAlertService: ErrorAlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => { }, (res: any) => {
      if (res instanceof HttpErrorResponse) {
        let data = {
          message: (res && res.message) ? res.message : '',
          status: res.status
        }

        this.errorAlertService.setErrorObject(data);
      }
    }));
  }
}
