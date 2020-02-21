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
import { InvoiceInterface } from '../models/invoice.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'

var ELEMENT_DATA: InvoiceInterface[] = [
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'}
]

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['clifor', 'cnpj', 'pedido_linx', 'pedido_wise',
    'nf', 'dt_faturamento', 'dt_fat_relat', 'marca', 'total_pecas_pedido', 
    'total_valor_pedido', 'qtde_embalada', 'valor_embalado',
    'total_pecas_faturadas', 'total_valor_faturado', 'porcentagem_fat'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  sidenavAberta = false; // Variável que controla a Sidenavbar
  invoice: ConsultaCnpj;
  filtro: string = '';
  company_doc: string = '';
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
    private serviceConsultaCnpj: ConsultaCnpjService,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,

    ) {};

  ngOnInit() { 
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = "Número de linhas por página:";
    this.paginator._intl.nextPageLabel = "Próxima página";
    this.paginator._intl.previousPageLabel = "Página anterior";
    this.paginator._intl.lastPageLabel = "Última página";
    this.paginator._intl.firstPageLabel = "Primeira página";
    this.listaDeMarcas(),
    this.listaDeColecoes(),
    this.listaDeRepres()
  }

  public aplicarFiltro(filtroValor: string) {
    this.dataSource.filter = filtroValor.trim().toLowerCase();
  }

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

  public buscarCnpj () {

    this.serviceConsultaCnpj.listarInvoices(this.company_doc).subscribe(dados => 
      {this.invoice = dados;
      console.log(this.invoice);
      
      // if(this.invoice.customer_name != undefined && this.invoice.customerFab_Id != undefined) 
      //   this.clienteValido = true;
      // else 
      //   this.clienteValido = false;
      },
      (error: any) => {this.erroCnpj = error;
      this.clienteValido = false;
      console.log('ERRO: ' + this.erroCnpj)}
      )
  }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
  
}
