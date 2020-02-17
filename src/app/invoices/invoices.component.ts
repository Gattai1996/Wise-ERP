import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaCnpjService } from '../services/consulta-cnpj.service';
import { ConsultaCnpj } from '../models/consulta-cnpj.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  clientes: ConsultaCnpj;
  filtro: string = '';

  company_doc: string = '';

  constructor(
    private router: Router,
    private service: ConsultaCnpjService
    ) {};

  ngOnInit() {
    
  }

  public buscarCnpj () {
    this.service.listar(this.company_doc).subscribe(dados => this.clientes = dados);
  }

  public voltarAoLogin() {

    this.router.navigate(['/']);

  }
  
}
