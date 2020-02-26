import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brands } from '../models/brands.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/brands?';
  private readonly PARAMETERS = 'company_Id=1&';

  // tslint:disable-next-line: variable-name
  dept_Id = '1';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  public listarMarcas(dept_Id: string): Observable<Brands> {
    console.log('CHAMANDO API MARCAS COM URL: ' + this.API_URL + this.PARAMETERS + dept_Id + ' RETORNOU > ');
    return this.http.get<Brands>(
      this.API_URL + this.PARAMETERS + 'dept_Id=' + dept_Id)
      .pipe(tap(console.log));
  }
}
