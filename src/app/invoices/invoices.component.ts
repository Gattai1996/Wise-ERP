import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) {};

  public voltarAoLogin() {

    this.router.navigate(['/']);

  }

}
