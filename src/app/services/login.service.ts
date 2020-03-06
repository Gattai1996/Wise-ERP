import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/login';
  private readonly PARAMETERS = '?company_Id=1&dept_Id=1&brand_Id=5';

  emitirLogin = new EventEmitter();

  constructor(private http: HttpClient) { }

  public autenticar(usuario: string, senha: string): Observable<Login> {
    return this.http.get<Login>(this.API_URL + this.PARAMETERS + '&user=' + usuario + '&password=' + senha);
  }

  public EmitirLogin(login) {
    this.emitirLogin.emit(login);
  }
}
