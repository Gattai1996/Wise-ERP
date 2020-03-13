import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agents } from '../models/agents.model';

@Injectable({
  providedIn: 'root' 
})
export class AgentsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/agents?';

  constructor(private http: HttpClient) { }

  public listarRepres(company_Id: string, dept_Id: string, brand_Id: string):
  Observable<Agents> {
    return this.http.get<Agents>(
      this.API_URL + 'company_Id=' + company_Id + 
      '&dept_Id=' + dept_Id + '&brand_Id=' + brand_Id);
  }
}
