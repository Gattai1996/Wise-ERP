import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ConsultaCnpjService } from '../services/consulta-cnpj.service';
import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
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

  constructor(private router: Router) {};
  clientes: ConsultaCnpj;
  marcas: Brands;
  filtro: string = '';
  erroCnpj: any;
  erroMarcas: any;
  public buscarCnpj () {
    this.service.listar(this.company_doc).subscribe(dados => this.clientes = dados);
  }

  company_doc: string = '';
  clienteValido: boolean = false;
  brand_Id = '1';

  constructor(

    private router: Router,
    private serviceCnpj: ConsultaCnpjService,
    private serviceMarcas: BrandsService

    ) {};

  ngOnInit() { this.listaDeMarcas() }

  public buscarCnpj () {

    this.serviceCnpj.listarClientes(this.company_doc).subscribe(dados => 
      {this.clientes = dados;
      if(this.clientes.customer_name != undefined && this.clientes.customerFab_Id != undefined) 
        this.clienteValido = true;
      else 
        this.clienteValido = false;
      },
      (error: any) => {this.erroCnpj = error;
      this.clienteValido = false;
      console.log('ERRO: ' + this.erroCnpj)}
      )
  }

  public listaDeMarcas() { 

    this.serviceMarcas.listarMarcas(this.brand_Id).subscribe(dados =>
      {this.marcas = dados;},
      (error:any) => {this.erroMarcas = error;
      console.log('ERRO: ' + this.erroMarcas)}
      )
   }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
  
}
