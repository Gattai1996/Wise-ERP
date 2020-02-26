import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { tap } from 'rxjs/operators';

const API_URL = 'http://wiseerp-api-demo.azurewebsites.net/api/login';
const PARAMETERS = '?company_Id=1&dept_Id=1&brand_Id=1';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }


  public autenticar(usuario: string, senha: string): Observable<Login> {
    console.log('CHAMANDO API LOGIN COM URL: ' + API_URL + PARAMETERS + '&user=' + usuario + '&password=' + senha);
    return this.http.get<Login>(
        API_URL + PARAMETERS + '&user=' + usuario + '&password=' + senha)
        .pipe(tap(console.log));
  }
}
