import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public accountId: string;
  constructor() { }

  ngOnInit(): void {
  }

  public changeAccountId(): boolean {
    if (!!this.accountId) {
      return false;
    }
    return true;
  }
  public searchAccount() {
  }

}
