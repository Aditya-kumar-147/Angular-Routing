import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-app',
  templateUrl: './bank-app.component.html',
  styleUrls: ['./bank-app.component.css']
})
export class BankAppComponent implements OnInit {

  result:any = '';
  createamount:any = '';
  withamt:any =  '';
  depositamt:any = '';

  createaccount(){
    if(this.createamount < 10000)
    {
      alert('Minimum Rs. 10000 is required!');
    }
    else{

    this.result = this.createamount;
    }
  }

  withdrawamount(){
    if(this.result > this.withamt){

    this.result = this.result - this.withamt;
    }
    else{
      alert('Not sufficient balance');
    }

  }

  depositamount(){

    this.result = this.result + this.depositamt;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
