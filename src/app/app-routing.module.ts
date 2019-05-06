import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./public/login/login.component";
import { RegisterComponent } from "./public/register/register.component";
import { PrivateComponent } from "./private/private.component";
import { GuardRoute } from "./core/guards/guard-route.service";
import { HomeComponent } from "./private/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: `private`,
    canActivateChild: [GuardRoute],
    children: [
      { path: ``, redirectTo: `home`, pathMatch: `full` },
      { path: `home`, component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
