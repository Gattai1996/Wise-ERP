import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ConsultaCnpjService } from '../services/consulta-cnpj.service';
import { ConsultaCnpj } from '../models/consulta-cnpj.model';
import { BrandsService } from '../services/brands.service';
import { Brands } from '../models/brands.models';
import { CollectionsService } from '../services/collections.service';
import { Collections } from '../models/collections.model';
import { Agents } from '../models/agents.model'
import { AgentsService } from '../services/agents.service';





export interface InvoiceInterface {
  clifor: number;
  cnpj: string;
  pedido_linx: string;
  pedido_wise: string;
  nf: string;
  dt_faturamento: string;
  dt_fat_relat: string;
  marca: string;
  total_pecas_pedido: number;
  total_valor_pedido: string;
  qtde_embalada: number;
  valor_embalado: string;
  total_pecas_faturadas: number;
  total_valor_faturado: string;
  porcentagem_fat: string;
}

const ELEMENT_DATA: InvoiceInterface[] = [
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W014138', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'}
]





@Component({
  selector: 'app-dashboard',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {




  displayedColumns: string[] = ['cnpj', 'pedido_linx', 'pedido_wise',
    'nf', 'dt_faturamento', 'dt_fat_relat', 'marca', 'total_pecas_pedido', 
    'total_valor_pedido', 'qtde_embalada', 'valor_embalado',
    'total_pecas_faturadas', 'total_valor_faturado', 'porcentagem_fat'];
  dataSource = ELEMENT_DATA;



  clientes: ConsultaCnpj;
  filtro: string = '';
  company_doc: string = '';
  marcas: Brands;
  erroCnpj: any;
  erroMarcas: any;
  clienteValido: boolean = false;
  brand_Id = '1';
  erroRepres: any;
  erroColecoes: any;
  colecoes: Collections;
  repres: Agents;

  constructor(

    private router: Router,
    private serviceCnpj: ConsultaCnpjService,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService

    ) {};

  ngOnInit() { 
    this.listaDeMarcas(),
    this.listaDeColecoes(),
    this.listaDeRepres()
  }

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

  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
  
}
