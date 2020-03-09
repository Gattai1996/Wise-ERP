import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaTotalInvoicesService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/suminvoices';

  constructor(private http: HttpClient) { }

  public buscaTotalInvoices(listaInvoices: Object){
    return this.http.post(this.API_URL, listaInvoices)
      .pipe(tap(console.log));
  }
}
