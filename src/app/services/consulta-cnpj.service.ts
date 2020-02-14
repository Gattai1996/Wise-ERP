import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCnpjService {

  private readonly API_URL='http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ConsultaCnpj>(this.API_URL)
    .pipe(tap(console.log));
  }

}
