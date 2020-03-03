import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class ConsultaCnpjService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/invoices?';
  // PARAMETERS = 'company_Id=1&dept_Id=1&brand_Id=1&collection_Id=63&agent_Id=300243&orderBy=7&';

  constructor(private http: HttpClient) { }

  public listarInvoices(company_Id: string, dept_Id: string, brand_Id: string, collection_Id: string, agent_Id: string, orderBy: string):Observable<ConsultaCnpj> {
    console.log('Chamando API Invoices com método GET com a URL: ' + this.API_URL + 
    'company_Id=' + company_Id + '&dept_Id=' + dept_Id + '&brand_Id=' + brand_Id + 
    '&collection_Id=' + collection_Id + '&agent_Id=' + agent_Id + '&orderBy=' + orderBy); 
    return this.http.get<ConsultaCnpj>(
      this.API_URL + 
      'company_Id=' + company_Id + '&dept_Id=' + dept_Id + '&brand_Id=' + brand_Id + 
      '&collection_Id=' + collection_Id + '&agent_Id=' + agent_Id + '&orderBy=' + orderBy)
      .pipe(tap(console.log));
  }
}
