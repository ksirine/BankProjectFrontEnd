import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {AppComponent} from "./app.component";
import {TransactionComponent} from "./Transaction/transaction.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'accountId/:accountId',
        component: AccountComponent },
      { path: 'accountId/:accountId/:operationType',
        component: TransactionComponent
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
