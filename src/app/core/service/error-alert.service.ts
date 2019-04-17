import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {

  error: any;
  hasError: boolean = false;

  constructor() { }

  setErrorObject(object: any) {
    this.hasError = true;
    this.error = object;    
  }

  get errorObject() {
    return this.error;
  }

  toggleError() {
    this.hasError = false;
  }
}
