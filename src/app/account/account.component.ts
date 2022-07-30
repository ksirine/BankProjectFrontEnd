import { Component, OnInit } from '@angular/core';
import {Account} from "../models/Account";
import {Transaction} from "../models/Transaction";
import {ActivatedRoute} from "@angular/router";
const ELEMENT_DATA: Transaction[] = [
  {operationType: 'Deposit', operationDate: '11/11/2020', amount:500},
  {operationType: 'Deposit', operationDate: '11/11/2020', amount:500},
  {operationType: 'Deposit', operationDate: '11/11/2020', amount:500}
];
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
  public displayedColumns: string[] = ['Transaction Type', 'Date', 'Amount'];
  public dataSource = ELEMENT_DATA;
  public accountId: string | null;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    if (!!this.accountId) {
      //TO DO
      //getAccountDetails + getTransactionAccount
    }
  }
}
