import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAppComponent } from './bank-app.component';

const routes: Routes = [{ path: '', component: BankAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAppRoutingModule { }
