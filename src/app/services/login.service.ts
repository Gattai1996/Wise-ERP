import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/login';
  private readonly PARAMETERS = '?company_Id=1&dept_Id=1&brand_Id=5';

  // Isso será usado quando for emitir o agent_Id da tela de login para invoices
  private loginSource = new Subject<Login>();
  login$ = this.loginSource.asObservable();

  constructor(private http: HttpClient) { }

  public autenticar(usuario: string, senha: string): Observable<Login> {
    return this.http.get<Login>(this.API_URL + this.PARAMETERS + '&user=' + usuario + '&password=' + senha);
  }

  public EmitirLogin(login: Login) {
    this.loginSource.next(login);
  }
}
