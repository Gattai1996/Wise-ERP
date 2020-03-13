import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collections } from '../models/collections.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/collections?';

  constructor(private http: HttpClient) { }

  public listarColecoes(company_Id: string, dept_Id: string, brand_Id: string):
  Observable<Collections> {
    return this.http.get<Collections>(
      `${this.API_URL}company_Id=${company_Id}&dept_Id=${dept_Id}&brand_Id=${brand_Id}`);
  }
}
