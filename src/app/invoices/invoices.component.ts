import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { BuscaInvoices } from '../services/busca-invoices.service';
import { Invoices } from '../models/invoices.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model';
import { AgentsService } from '../services/agents.service';
import { BuscaTotalInvoicesService } from '../services/busca-total-invoices.service';
import { Login } from '../models/login.model';
import { TotalInvoices } from '../models/total-invoices.model';
import { ConsultaStringService } from '../services/consulta-string.service';
import { ConsultaString } from '../models/consulta-string.model';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  sidenavAberta = false;
  invoices: Invoices;
  filtro: string;
  marcas: Brands;
  colecoes: Collections;
  repres: Agents;
  total: TotalInvoices; // Guarda o resultado de total de faturamentos
  consultado = false; // Controla se já pesquisou faturamento
  clientes: ConsultaString;
  cnpjDigitado: string;
  erroCnpj: any;
  erroMarcas: any;
  erroRepres: any;
  erroColecoes: any;
  erroInvoices: any;
  erroClientes: any;
  clienteValido = false;
  companyId = '1';
  deptId = '1';
  agentId: string;
  brandId: string;
  collectionId: string;
  companyName = '';
  companyDoc = '';
  customerFabId = '';
  login: Login = new Login();
  orderBy: string;
  diferença: any;

  constructor(
    private router: Router,
    private buscaInvoices: BuscaInvoices,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,
    private buscaTotalInvoicesService: BuscaTotalInvoicesService,
    private consultaStringService: ConsultaStringService
    ) {}

  ngOnInit() {
    // Descomentar isso quando for pegar agent_Id direto da tela de login
    // LoginService.emitirLogin.subscribe(
    //     (login: Login) => {this.login = login;
    //                       console.log('TESTE 1 = ' + this.login.agent_Id);
    //                       });
    // console.log('TESTE 2 = ' + this.login.agent_Id);

    // Lista as marcas
    this.listaDeMarcas();
  }

  public listaDeMarcas() {
    this.serviceMarcas.listarMarcas(this.companyId, this.deptId)
    .subscribe(dados => {this.marcas = dados;} ,
      (error: any) => {this.erroMarcas = error;
                       console.log('ERRO: ' + this.erroMarcas.message); });
  }

  public mudarMarca(event: string) {
    // this.resetar();
    console.log('Selecionou brand_Id: ' + event);
    this.brandId = event;
    console.log(this.brandId);
    this.listaDeColecoes();
  }

  public listaDeColecoes() {
  this.serviceColecao.listarColecoes(this.companyId, this.deptId, this.brandId)
  .subscribe(dados => {this.colecoes = dados;},
    (error: any) => { this.erroColecoes = error;
                      console.log('ERRO: ' + this.erroColecoes.message); }
    );
  }

  public mudarColecao(event: string) {
    console.log('Selecionou collection_Id: ' + event);
    this.collectionId = event;
    this.listaDeRepres();
  }

  public listaDeRepres() {
  this.serviceRepres.listarRepres(this.companyId, this.deptId, this.brandId)
  .subscribe(dados => {this.repres = dados;},
    (error: any) => { this.erroColecoes = error;
                      console.log('ERRO: ' + this.erroColecoes.message); }
    );
  }

  public mudarRepres(event: string) {
    console.log('Selecionou agent_Id: ' + event);
    this.agentId = event;
  }

  public mudarOrdem(event: string) {
    console.log('Selecionou orderBy: ' + event);
    this.orderBy = event;
  }

  public resetar() {
    this.brandId = '';
    this.collectionId = '';
    this.agentId = '';
    this.listaDeMarcas();
    this.listaDeColecoes();
    this.listaDeRepres();
  }







  public buscarClientes() {
    this.consultaStringService.consultarString(
      this.companyId, this.deptId, this.brandId, this.companyName)
      .subscribe(dados => {
        console.log(dados);
        this.clientes = dados;
      },
      (error: any) => {this.erroClientes = error;
                       console.log('ERRO INVOICES: ' + this.erroClientes.message); }
      );
  }

  mudarCompanyDoc(compapany_doc: string) {
    this.companyDoc = compapany_doc;
    console.log('Selecionou companyDoc= ' + this.companyDoc);
  }

  mudarCustomerFabId(customerFabId: string) {
    this.customerFabId = customerFabId;
    console.log('Selecionou custumerFabId= ' + this.customerFabId);
  }

  // Funções DisplayFn são utilizadas para mostrar os dados corretamente depois
  // de selecionar clicando na lista de autocomplete
  displayFn(cliente: ConsultaString): string {
    if(cliente != undefined) {
      return cliente.customer_name;
    }
  }










  public buscarInvoices() {
    this.buscaInvoices.listarInvoices(
      this.companyId, this.deptId, this.brandId, this.collectionId, this.agentId, 
      this.orderBy, this.companyDoc, this.customerFabId
      )
      .subscribe(dados => {
        this.consultado = true;
        this.invoices = dados;
        this.buscarTotalInvoices();
      },
      (error: any) => {this.erroInvoices = error;
                       console.log('ERRO INVOICES: ' + this.erroInvoices.message); }
      );
  }

  public buscarTotalInvoices() {
    this.buscaTotalInvoicesService.buscaTotalInvoices(this.invoices).subscribe((res: TotalInvoices) => {
      this.total = res;
      return this.total;
    });
  }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
}
