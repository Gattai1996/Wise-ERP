import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brands } from '../models/brands.models';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/brands?';

  constructor(private http: HttpClient) { }

  public listarMarcas(company_Id: string, dept_Id: string): 
  Observable<Brands> {
    return this.http.get<Brands>(
      `${this.API_URL}company_Id=${company_Id}&dept_Id=${dept_Id}`);
  }
}
