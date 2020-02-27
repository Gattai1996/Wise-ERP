import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ConsultaCnpjService } from '../services/consulta-cnpj.service';
import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model'
import { AgentsService } from '../services/agents.service';
import { MatSort, MatPaginator } from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  displayedColumns: string[] = ['customerFab_Id', 'company_doc', 'orderFactory_Id', 'order_Id',
    'invoice', 'dt_invoice', 'dt_invoice_relat', 'brand_name', 'total_quantity', 
    'total_price', 'packed_quantity', 'packed_price', 'total_quantity_invoiced',
    'total_price_invoiced', 'percentual_invoiced'];

  dataSource = new InvoicesDataSource(this.consultaCnpjService);

  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  sidenavAberta = false; // Variável que controla a Sidenavbar
  invoice: ConsultaCnpj;
  filtro: string = '';
  marcas: Brands;
  colecoes: Collections;
  repres: Agents;
  erroCnpj: any;
  erroMarcas: any;
  erroRepres: any;
  erroColecoes: any;
  clienteValido: boolean = false;
  brand_Id = '1';
  
  constructor(
    private router: Router,
    private consultaCnpjService: ConsultaCnpjService,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,
    ) {};

  ngOnInit() { 
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.paginator._intl.itemsPerPageLabel = "Número de linhas por página:";
    // this.paginator._intl.nextPageLabel = "Próxima página";
    // this.paginator._intl.previousPageLabel = "Página anterior";
    // this.paginator._intl.lastPageLabel = "Última página";
    // this.paginator._intl.firstPageLabel = "Primeira página";
    this.listaDeMarcas(),
    this.listaDeColecoes(),
    this.listaDeRepres()
  }
  // public aplicarFiltro(filtroValor: string) {
  //   this.dataSource.filter = filtroValor.trim().toLowerCase();
  // }


  public listaDeMarcas() { 

    this.serviceMarcas.listarMarcas(this.brand_Id).subscribe(dados =>
      {this.marcas = dados;},
      (error:any) => {this.erroMarcas = error;
      console.log('ERRO: ' + this.erroMarcas)}
    )
  }

  public listaDeColecoes() { 

  this.serviceColecao.listarColecoes(this.brand_Id).subscribe(dados =>
    {this.colecoes = dados;},
    (error:any) => {this.erroColecoes = error;
    console.log('ERRO: ' + this.erroColecoes)}
    )
  }

  public listaDeRepres() { 

  this.serviceRepres.listarRepres(this.brand_Id).subscribe(dados =>
    {this.repres = dados;},
    (error:any) => {this.erroColecoes = error;
    console.log('ERRO: ' + this.erroColecoes)}
    )
  }

  public buscarCnpj() {
    
  }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
  
}

export class InvoicesDataSource extends DataSource<any> {

  company_doc: string = '';
  
  constructor(private consultaCnpjService: ConsultaCnpjService) {
    super();
  }

  connect(): Observable<ConsultaCnpj[]> {
    return this.consultaCnpjService.listarInvoices(this.company_doc);
  }

  disconnect() {}

}
