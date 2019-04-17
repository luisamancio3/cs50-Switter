import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hidePassword: boolean = true;
  hideCoPassword: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createFb();
  }

  createFb = () =>{
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), this.confirmPassword("rePassword")]],
      rePassword: ['', [Validators.required, Validators.minLength(4), this.confirmPassword("password")]]
    });
  }

  signUp = () => {
    if (this.registerForm.valid) {
      let user = { email: this.registerForm.get(`email`).value, password: this.registerForm.get(`password`).value};
      this.authService.register(user.email, user.password);
    }
  }


  confirmPassword = (field: string) => {
    return (control: AbstractControl) => {
      let error = { diferentPasswords: true, message: 'Senhas diferentes' };
      let parent = control.parent;
      if (parent) {
        let password = parent.get(field).value;
        if (password !== control.value) {
          parent.get(field).setErrors(error);
          return error;
        } else{
          parent.get(field).setErrors(null);
        }
      }
      return null;
    };
  }

}
