import { Injectable } from '@angular/core';

import { ConsultaString } from '../models/consulta-string.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaStringService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/customerErp?';
  
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: variable-name
  public consultarString(companyId: string, deptId: string, brandId: string, companyName: string):
  Observable<ConsultaString> {
    console.log('CHAMANDO API MARCAS COM URL: ' + this.API_URL + 'company_Id=' + companyId + 
    '&dept_Id=' + deptId + '&brand_Id=' + brandId + '&company_name=' + companyName + ' RETORNOU > ');
    return this.http.get<ConsultaString>(
      this.API_URL + 'company_Id=' + companyId + '&dept_Id=' + deptId 
      + '&brand_Id=' + brandId + '&company_name=' + companyName)
      .pipe(tap(console.log));
  }
}
