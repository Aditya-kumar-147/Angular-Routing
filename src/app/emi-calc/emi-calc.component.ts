import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {
  amount:any= '';
  roi:any = '';
  tenure:any = '';
  months:any = '';
  interest:any = '';
  loanamount:string = '';
  totalinterest:string = '';
  totalpayment:string = '';
  totalemi:any = '';

  CalculateOverall(){

    this.months = parseInt(this.tenure) * 12;

    this.interest = (this.amount * (this.roi * 0.01)) / this.months;//interest per month

    this.totalinterest = (this.interest * this.months).toFixed(2);

    this.totalpayment = (parseInt(this.totalinterest) + parseInt(this.amount)).toFixed(2);

    this.totalemi = ((this.amount / this.months) + this.interest).toFixed(2);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
