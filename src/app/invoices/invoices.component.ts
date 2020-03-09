import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { BuscaInvoices } from '../services/busca-invoices.service';
import { Invoices } from '../models/invoices.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model';
// import { AgentsService } from '../services/agents.service';
import { BuscaTotalInvoicesService } from '../services/busca-total-invoices.service';
import { Login } from '../models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {  

  sidenavAberta = false;
  invoices: Invoices;
  filtro: string = '';
  marcas: Brands;
  colecoes: Collections;
  repres: Agents;
  total: Object; // Guarda o resultado de total de faturamentos
  consultado = false; // Controla se já pesquisou faturamento
  erroCnpj: any;
  erroMarcas: any;
  erroRepres: any;
  erroColecoes: any;
  erroInvoices: any;
  clienteValido: boolean = false;
  company_Id = '1';
  dept_Id = '1';
  brand_Id:string;
  collection_Id:string;
  login: Login = new Login();
  orderBy:string;
  diferença:any;

  constructor(
    private router: Router,
    private buscaInvoices: BuscaInvoices,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    // private serviceRepres: AgentsService,
    private buscaTotalInvoicesService: BuscaTotalInvoicesService,
    ) {};

  ngOnInit() {
    // Pega o login emitido da tela de login
    LoginService.emitirLogin.subscribe(
        (login: Login)  => {console.log(login);
          this.login = login;
        console.log('TESTE 1 = ' + this.login.agent_Id);

      });
    console.log('TESTE 2 = ' + this.login.agent_Id);
    // Lista as marcas
    this.listaDeMarcas();
  }

  public listaDeMarcas() { 
    this.serviceMarcas.listarMarcas(this.company_Id, this.dept_Id).subscribe(dados =>
      {this.marcas = dados;},
      (error:any) => {this.erroMarcas = error;
      console.log('ERRO: ' + this.erroMarcas)}
    )
  }

  public mudarMarca(event) {
    // this.resetar();
    console.log("Selecionou brand_Id: " + event);
    this.brand_Id = event;
    console.log(this.brand_Id);
    this.listaDeColecoes();
  }

  public listaDeColecoes() { 
  this.serviceColecao.listarColecoes(this.company_Id, this.dept_Id, this.brand_Id).subscribe(dados =>
    {this.colecoes = dados;},
    (error:any) => {this.erroColecoes = error;
    console.log('ERRO: ' + this.erroColecoes)}
    )
  }

  public mudarColecao(event) {
    console.log("Selecionou collection_Id: " + event)
    this.collection_Id = event;
    // this.listaDeRepres();
  }

  // public listaDeRepres() { 
  // this.serviceRepres.listarRepres(this.company_Id, this.dept_Id, this.brand_Id).subscribe(dados =>
  //   {this.repres = dados; console.log("Retorno de Repres: " + this.repres);},
  //   (error:any) => {this.erroColecoes = error;
  //   console.log('ERRO: ' + this.erroColecoes)}
  //   )
  // }

  // public mudarRepres(event) {
  //   console.log("Selecionou agent_Id: " + event);
  //   this.agent_Id = event;
  // }

  public mudarOrdem(event) {
    console.log("Selecionou orderBy: " + event);
    this.orderBy = event;
  }

  public resetar() {
    this.brand_Id= '';
    this.collection_Id = '';
    // this.agent_Id='';
    this.listaDeMarcas();
    this.listaDeColecoes();
    // this.listaDeRepres();
  }

  public buscarInvoices() {      
    this.buscaInvoices.listarInvoices(this.company_Id, this.dept_Id, this.brand_Id, this.collection_Id, this.login.agent_Id, this.orderBy)
      .subscribe(dados =>
      {
        this.consultado = true;
        this.invoices = dados;
        console.log("Retorno de invoice: " + this.invoices);
        this.buscarTotalInvoices();
      },
      (error:any) => {this.erroInvoices = error;
      console.log('ERRO INVOICES: ' + this.erroInvoices)}
      );
  }

  public buscarTotalInvoices() {
    this.buscaTotalInvoicesService.buscaTotalInvoices(this.invoices).subscribe(res => {
      console.log("Total Invoices: " + res);
      this.total = res;
      return this.total;
    })
  }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
}
