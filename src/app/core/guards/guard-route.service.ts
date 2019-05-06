import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardRoute implements CanActivateChild {

  constructor(private authSrv: AuthService, 
    private route: Router) { }

  canActivateChild(){
    if(!this.authSrv.isLoggedIn()){
      this.route.navigateByUrl('login');
      return false;
    }

    return true;
  }
}
