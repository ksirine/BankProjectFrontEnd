import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {catchError, tap} from "rxjs/operators";
import {TransactionService} from "../Service/transaction.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  public transactionType: string | null;
  public accountId: string | null;
  public transactionAmount: number;
  public msgError: string;

  constructor(private route: ActivatedRoute,
              private transactionService: TransactionService) {
    this.accountId = this.route.snapshot.paramMap.get('accountId');
    this.transactionType = this.route.snapshot.paramMap.get('operationType');
  }

  ngOnInit(): void {
  }
  public saveTransaction(): Observable<any> {
    //TO DO
    return this.transactionService.saveTransaction().pipe(
      tap(() => {
      }),
      catchError((error) => {
        if (!!this.transactionAmount) {
          this.msgError = "Sorry, Cannot Do Transaction";
        } else {
          this.msgError = "Please, Enter an Amount!";
        }
        return error;
      })
    )
  }

}
