import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'Bruno' && usuario.senha === '1234') {

      this.usuarioAutenticado = true;
    
      this.router.navigate(['/dashboard']);

    } else {
    
      this.usuarioAutenticado = false;
    
    }

  }

}
