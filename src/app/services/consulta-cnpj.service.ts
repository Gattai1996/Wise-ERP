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
  PARAMETERS = 'company_Id=1&dept_Id=1&brand_Id=1&collection_Id=63&agent_Id=300243&orderBy=7&';

  constructor(private http: HttpClient) { }


  public listarInvoices(company_doc):Observable<ConsultaCnpj[]> {
    console.log('Chamando API Invoices com método GET com a URL: ' + this.API_URL + this.PARAMETERS + company_doc); 
    return this.http.get<ConsultaCnpj[]>(
      this.API_URL + this.PARAMETERS + 'company_doc=' + company_doc)
        .pipe(tap(console.log));
  }
}
