import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaTotalInvoicesService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/sumInvoices?';
  // company_Id=1&dept_Id=1&brand_Id=5&collection_Id=63&agent_Id=2

  constructor(private http: HttpClient) { }

  public buscaTotalInvoices(companyId: string, deptId: string, brandId: string, collectionId: string, agentId: string){
    return this.http.get(`${this.API_URL}company_Id=${companyId}&dept_Id=${deptId}&brand_Id=${brandId}&collection_Id=${collectionId}&agent_Id=${agentId}`);
  }
}
