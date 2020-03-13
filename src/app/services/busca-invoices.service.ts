import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Invoices } from '../models/invoices.model';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class BuscaInvoices {
 
  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/invoices?';

  constructor(private http: HttpClient) { }

  public listarInvoices(
    company_Id: string, dept_Id: string, brand_Id: string, collection_Id: string, 
    agent_Id: string, orderBy: string, companyDoc: string, customerFabId: string): 
    Observable<Invoices> {
      console.log(`${this.API_URL}company_Id=${company_Id}&dept_Id=${dept_Id}&brand_Id=${brand_Id}&collection_Id=${collection_Id}&agent_Id=${agent_Id}&orderBy=${orderBy}&company_doc=${companyDoc}&customerFab_Id=${customerFabId}`);
      return this.http.get<Invoices>(
        `${this.API_URL}company_Id=${company_Id}&dept_Id=${dept_Id}&brand_Id=${brand_Id}&collection_Id=${collection_Id}&agent_Id=${agent_Id}&orderBy=${orderBy}&company_doc=${companyDoc}&customerFab_Id=${customerFabId}`);
  }
}
