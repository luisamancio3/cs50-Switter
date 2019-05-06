import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxTwitterTimelineModule } from "ngx-twitter-timeline";
import { MaterialModule } from "../core/material/material.module";
import { HomeComponent } from "./home/home.component";
import { PrivateComponent } from "./private.component";

@NgModule({
  declarations: [HomeComponent, PrivateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    NgxTwitterTimelineModule,
    FormsModule
  ],
  exports: [PrivateComponent],
  providers: []
})
export class PrivateModule {}
