import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agents } from '../models/agents.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/agents?'
  private readonly PARAMETERS = 'company_Id=1&dept_Id=1&'

  brand_Id = '1'

  constructor(private http: HttpClient) { }

  public listarRepres(brand_Id: string):Observable<Agents> {
    console.log('CHAMANDO API REPRESENTANTES COM URL: ' + this.API_URL + this.PARAMETERS + 'brand_Id=' + brand_Id + ' RETORNOU > ');
    return this.http.get<Agents>(
      this.API_URL + this.PARAMETERS + 'brand_Id=' + brand_Id)
      .pipe(tap(console.log));
  }
}
