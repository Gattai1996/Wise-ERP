import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Invoices } from '../models/invoices.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class BuscaInvoices {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/invoices?';

  constructor(private http: HttpClient) { }

  public listarInvoices(company_Id: string, dept_Id: string, brand_Id: string, collection_Id: string, agent_Id: string, orderBy: string):Observable<Invoices> {
    console.log('Chamando API Invoices com método GET com a URL: ' + this.API_URL + 
    'company_Id=' + company_Id + '&dept_Id=' + dept_Id + '&brand_Id=' + brand_Id + 
    '&collection_Id=' + collection_Id + '&agent_Id=' + agent_Id + '&orderBy=' + orderBy); 
    return this.http.get<Invoices>(
      this.API_URL + 
      'company_Id=' + company_Id + '&dept_Id=' + dept_Id + '&brand_Id=' + brand_Id + 
      '&collection_Id=' + collection_Id + '&agent_Id=' + agent_Id + '&orderBy=' + orderBy)
      .pipe(tap(console.log));
  }
}
