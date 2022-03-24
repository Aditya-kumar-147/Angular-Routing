import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BankAppRoutingModule } from './bank-app-routing.module';
import { BankAppComponent } from './bank-app.component';


@NgModule({
  declarations: [
    BankAppComponent
  ],
  imports: [
    CommonModule,
    BankAppRoutingModule,
    FormsModule
  ]
})
export class BankAppModule { }
