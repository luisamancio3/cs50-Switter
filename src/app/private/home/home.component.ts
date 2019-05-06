import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import NgxTwitterTimelineData from "ngx-twitter-timeline/lib/ngx-twitter-timeline-data.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  queryForm: FormGroup;
  data: NgxTwitterTimelineData = {
    screenName: `CS50`,
    sourceType: `profile`,
    url: ``
  };
  load: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.queryForm = this.fb.group({
      query: "Amo_pacoca"
    });
  };

  updateData = async () => {
    this.data.screenName = this.queryForm.get(`query`).value;
    this.load = false;
    setTimeout(() => {
      this.load = true;
      console.log(this.data);
      
    }, 100);
  };
}
