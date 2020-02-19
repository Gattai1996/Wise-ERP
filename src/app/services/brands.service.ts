import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brands } from '../models/brands.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/brands?'
  private readonly PARAMETERS = 'company_Id=1&'

  dept_Id = '1'

  constructor(private http: HttpClient) { }

  public listarMarcas(dept_Id: string):Observable<Brands> {
    console.log(this.API_URL + this.PARAMETERS + dept_Id);
    return this.http.get<Brands>(
      this.API_URL + this.PARAMETERS + 'dept_Id=' + dept_Id)
      .pipe(tap(console.log));
  }
}
