import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaString } from '../models/consulta-string.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaStringService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/customerErp?';
  
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  public consultarString(companyId: string, deptId: string, brandId: string, companyName: string, agentId: string):
  Observable<ConsultaString> {
    return this.http.get<ConsultaString>(
      this.API_URL + 'company_Id=' + companyId + '&dept_Id=' + deptId 
      + '&brand_Id=' + brandId + '&customer_name=' + companyName + '&agent_Id=' + agentId);
  }
}
