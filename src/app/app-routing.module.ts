import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) }, { path: 'formvalidation', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) }, { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }, { path: 'emi_calc', loadChildren: () => import('./emi-calc/emi-calc.module').then(m => m.EmiCalcModule) }, { path: 'bank_app', loadChildren: () => import('./bank-app/bank-app.module').then(m => m.BankAppModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
