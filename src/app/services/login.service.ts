import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  SEARCH_URL: string = `https://wiseapi-compuwise.azurewebsites.net/service.asmx/login`;
  PARAMETERS: string = `?brand_Id=58&collection_Id=4&company_Id=1&dept_Id=1&`;

  constructor(private http: HttpClient) { }

  public getLogin(usuario: string, senha: string):Observable<any> {
    return this.http.get(
      this.SEARCH_URL + this.PARAMETERS + `password=` + senha + `&user=` + usuario
      );
  }
}
