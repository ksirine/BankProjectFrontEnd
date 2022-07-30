import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../models/Transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  public saveTransaction(accountId: string, transaction: Transaction): Observable<any> {
    return this.http.put<any>(this.url + '/operation/' + accountId, transaction);
  }
}
