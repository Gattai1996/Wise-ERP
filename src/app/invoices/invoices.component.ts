import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { BuscaInvoices } from '../services/busca-invoices.service';
import { Invoices } from '../models/invoices.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model';
import { AgentsService } from '../services/agents.service';
import { MatSort, MatPaginator } from '@angular/material';
import { TotalInvoices } from '../models/total-invoices.model'
import { BuscaTotalInvoicesService } from '../services/busca-total-invoices.service'
 
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {  

  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  sidenavAberta = false;
  invoices: Invoices;
  filtro: string = '';
  marcas: Brands;
  colecoes: Collections;
  repres: Agents;

  listaDeInvoices: Object;
  total: Object;
  consultado = false;
  
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
  diferença: any;

  constructor(
    private router: Router,
    private buscaInvoices: BuscaInvoices,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,
    private buscaTotalInvoicesService: BuscaTotalInvoicesService
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
    var totalQtde = 0;
    var totalQtdeFat = 0;
    var resultado = 0;
    this.buscaInvoices.listarInvoices(this.company_Id, this.dept_Id, this.brand_Id, this.collection_Id, this.agent_Id, this.orderBy).subscribe(dados =>
      {
        this.invoices = dados;
        console.log("Retorno de invoice: " + this.invoices);
        this.listaDeInvoices = dados;
        this.consultado = true;
        this.buscarTotalInvoices();
        totalQtde = parseInt(this.invoices.total_quantity);
        totalQtdeFat = parseInt(this.invoices.total_quantity_invoiced);
        resultado = totalQtde / totalQtdeFat * 100;
        console.log('RESULTADO= ' + resultado)
        if(resultado < 0){
          resultado = 0;
        }
      },
      (error:any) => {this.erroInvoices = error;
      console.log('ERRO INVOICES: ' + this.erroInvoices)}
      )
  }

  public buscarTotalInvoices() {
    this.buscaTotalInvoicesService.buscaTotalInvoices(this.listaDeInvoices).subscribe(res => {
      console.log("Total Invoices: " + res);
      this.total = res;
      return this.total;
    })
  }

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
}
