import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import NgxTwitterTimelineData from 'ngx-twitter-timeline/lib/ngx-twitter-timeline-data.interface';
import { NgxTwitterTimelineComponent } from 'ngx-twitter-timeline';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  queryForm: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.queryForm = this.fb.group({
      query: "Amo_pacoca"
    });
  }


  mountData = () => {
    let data: NgxTwitterTimelineData = { screenName: this.data, sourceType: `profile`, url: `` };
    return data
  }

  get data() {
    setTimeout(() => {
    }, 1000 ) 
    return this.queryForm.get(`query`).value;
  }

  updateData(){
    
  }
}
