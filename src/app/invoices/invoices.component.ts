import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ConsultaCnpjService } from '../services/consulta-cnpj.service';
import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model';
import { AgentsService } from '../services/agents.service';
import { MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  displayedColumns1: string[] = ['orderFactory_Id',
    'invoice', 'total_quantity', 
    'total_price'];
  displayedColumns2: string[] = ['packed_quantity', 'packed_price', 'total_quantity_invoiced',
    'total_price_invoiced', 'percentual_invoiced'];
  // displayedColumns: string[] = ['customerFab_Id', 'company_doc', 'orderFactory_Id', 'order_Id',
  // 'invoice', 'dt_invoice', 'dt_invoice_relat', 'brand_name', 'total_quantity', 
  // 'total_price', 'packed_quantity', 'packed_price', 'total_quantity_invoiced',
  // 'total_price_invoiced', 'percentual_invoiced'];

  

  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  sidenavAberta = false;
  invoices: ConsultaCnpj;
  filtro: string = '';
  marcas: Brands;
  colecoes: Collections;
  repres: Agents;
  erroCnpj: any;
  erroMarcas: any;
  erroRepres: any;
  erroColecoes: any;
  erroInvoices: any;
  clienteValido: boolean = false;
  company_Id = '1';
  dept_Id = '1';
  brand_Id = '';
  collection_Id = '';
  agent_Id = '';
  orderBy = '';
  // dataSource: Marca;

  constructor(
    private router: Router,
    private consultaCnpjService: ConsultaCnpjService,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,
    ) {};

  ngOnInit() { 
    this.listaDeMarcas()
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
    this.listaDeRepres();
  }

  public listaDeRepres() { 

  this.serviceRepres.listarRepres(this.company_Id, this.dept_Id, this.brand_Id).subscribe(dados =>
    {this.repres = dados; console.log("Retorno de Repres: " + this.repres);},
    (error:any) => {this.erroColecoes = error;
    console.log('ERRO: ' + this.erroColecoes)}
    )
  }

  public mudarRepres(event) {
    console.log("Selecionou agent_Id: " + event);
    this.agent_Id = event;
  }

  public mudarOrdem(event) {
    console.log("Selecionou orderBy: " + event);
    this.orderBy = event;
  }

  public resetar() {
    this.brand_Id= '';
    this.collection_Id = '';
    this.agent_Id='';
    this.listaDeMarcas();
    this.listaDeColecoes();
    this.listaDeRepres();
  }

  public buscarInvoices() {
    this.consultaCnpjService.listarInvoices(this.company_Id, this.dept_Id, this.brand_Id, this.collection_Id, this.agent_Id, this.orderBy).subscribe(dados =>
      {this.invoices = dados; console.log("Retorno de invoice: " + this.invoices);},
      (error:any) => {this.erroInvoices = error;
      console.log('ERRO INVOICES: ' + this.erroInvoices)}
      )
  }
    
  // public buscarInvoices() {
  //   this.dataSource = new InvoicesDataSource(this.consultaCnpjService, this.company_Id, 
  //     this.dept_Id, this.brand_Id, this.collection_Id, this.agent_Id, this.orderBy);
  // }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
}

// export class InvoicesDataSource extends DataSource<any> {
//   dept_Id: any;
//   company_Id: any;
//   brand_Id: any;
//   collection_Id: any;
//   agent_Id: any;
//   orderBy: any;
  
//   constructor(private consultaCnpjService: ConsultaCnpjService, company_Id, 
//     dept_Id, brand_Id, collection_Id, agent_Id, orderBy) {
//       super();
//       this.dept_Id = dept_Id;
//       this.company_Id = company_Id;
//       this.brand_Id = brand_Id;
//       this.collection_Id = collection_Id;
//       this.agent_Id = agent_Id;
//       this.orderBy = orderBy;
//   }

  // connect(): Observable<ConsultaCnpj[]> {
  //   return this.consultaCnpjService.listarInvoices(this.company_Id, 
  //     this.dept_Id, this.brand_Id, this.collection_Id, this.agent_Id, this.orderBy);
  // }

  // connect(): Observable<ConsultaCnpj[]> {
  //   return this.consultaCnpjService.listarInvoices(this.company_Id, 
  //     this.dept_Id, this.brand_Id, this.collection_Id, this.agent_Id, this.orderBy);
  // }
 
//   disconnect() {}

// }

// export class Marca {
  
// }
