import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: User;

  constructor(private afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl(`/private/home`);
    } catch (e) {
      alert("Error!" + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem("user");
    this.router.navigateByUrl(`login`);
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    return this.afAuth.authState !== null;
  }

  async register(email: string, password: string){
    try{
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      this.router.navigateByUrl(``);
    } catch(e){
      alert("Error!" + e.message);
    }
  }
}
