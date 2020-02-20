import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Collections } from '../models/collections.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/collections?'
  private readonly PARAMETERS = 'company_Id=1&dept_Id=1&'

  brand_Id = '1'

  constructor(private http: HttpClient) { }

  public listarColecoes(brand_Id: string):Observable<Collections> {
    console.log(this.API_URL + this.PARAMETERS + 'brand_Id=' + brand_Id);
    return this.http.get<Collections>(
      this.API_URL + this.PARAMETERS + 'brand_Id=' + brand_Id)
      .pipe(tap(console.log));
  }
}
