import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  user:any = '';
  result:string = '';
  compute(){
   
    if(parseInt(this.user) < 20000){
      this.result = 'Not eligible for card!'
    }
    else if(parseInt(this.user) >= 20000 && parseInt(this.user) <= 30000){
      this.result = 'Eligible for silver card!'
    }
    else if(parseInt(this.user) > 30000 && parseInt(this.user) <= 40000){
      this.result = 'Eligible for Gold card!'
    }
    else{
      this.result = 'Eligible for Platinum card!'
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
