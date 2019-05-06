import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  };

  signIn = () => {
    let user = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get(`password`).value
    };
    this.authService.login(user.email, user.password);
  };

  signUp = () => this.router.navigateByUrl(`register`);
  
}
