import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  user: any={}
  getValues(val: any){
    console.warn(val);
    this.user= val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
