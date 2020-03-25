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
import { MatDialog } from '@angular/material'
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  marcas: Brands;
  repres: Agents;
  invoices: Invoices;
  colecoes: Collections;
  total: TotalInvoices;
  clientes: ConsultaString;
  companyId: string = '1';
  deptId: string = '1';
  orderBy: string = '1';
  filtro: string;
  cnpjDigitado: string;
  agentId: string;
  brandId: string;
  brandName: string;
  collectionId: string;
  collectionName: string;
  companyName: string;
  razaoSocial: string;
  companyDoc: string = '';
  customerFabId: string = '';
  orderByName: string;
  erroCnpj: any;
  erroMarcas: any;
  erroRepres: any;
  erroColecoes: any;
  erroInvoices: any;
  erroClientes: any;
  selecionouMarca: boolean = false;
  selecionouColecao: boolean = false;
  consultado: boolean = false;
  mostrarTodosOsFaturamentos: boolean = false;

  login: Login = new Login();
  invoicesForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private buscaInvoices: BuscaInvoices,
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService,
    private buscaTotalInvoicesService: BuscaTotalInvoicesService,
    private consultaStringService: ConsultaStringService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.invoicesForm = this.formBuilder.group({
      brand: ['', Validators.required],
      collection: ['', Validators.required]
    });

    this.loginService.login$.subscribe(
      dados => {
        this.login = dados;
        this.agentId = this.login.agent_Id;
        console.log('TESTE 1= ' + this.agentId);
      });
    console.log('TESTE 2= ' + this.agentId);

    // Pega o Agent_Id do arquivo armazenado
    this.agentId = localStorage.getItem('token');
    console.log('TESTE 3= ' + this.agentId)

    // Lista as marcas
    this.listaDeMarcas();
  }

  openLoadingDialog() {
    this.dialog.open(LoadingIndicatorComponent);
  }

  closeLoadingDialog() {
    this.dialog.closeAll();
  }

  public listaDeMarcas() {
    this.serviceMarcas.listarMarcas(this.companyId, this.deptId)
      .subscribe(dados => { this.marcas = dados; },
        (error: any) => {
          this.erroMarcas = error;
          console.log('ERRO: ' + this.erroMarcas.message);
        });
  }

  public mudarMarca(event: string) {
    // this.resetar();
    this.selecionouMarca = true;
    console.log('Selecionou brand_Id: ' + event);
    this.brandId = event;
    console.log(this.brandId);
    this.listaDeColecoes();
  }

  public listaDeColecoes() {
    this.serviceColecao.listarColecoes(this.companyId, this.deptId, this.brandId)
      .subscribe(dados => { this.colecoes = dados; },
        (error: any) => {
          this.erroColecoes = error;
          console.log('ERRO: ' + this.erroColecoes.message);
        }
      );
  }

  public mudarColecao(event: string) {
    this.selecionouColecao = true;
    console.log('Selecionou collection_Id: ' + event);
    this.collectionId = event;
    this.listaDeRepres();
  }

  public listaDeRepres() {
    this.serviceRepres.listarRepres(this.companyId, this.deptId, this.brandId)
      .subscribe(dados => { this.repres = dados; },
        (error: any) => {
          this.erroColecoes = error;
          console.log('ERRO: ' + this.erroColecoes.message);
        }
      );
  }

  public mudarRepres(event: string) {
    console.log('Selecionou agent_Id: ' + event);
    this.agentId = event;
  }

  public mudarOrdem(event: string) {
    console.log('Selecionou orderBy: ' + event);
    this.orderBy = event;
    if (event == '1') {
      this.orderByName = 'COLEÇÃO EM ORDEM CRESCENTE';
    }
    if (event == '2') {
      this.orderByName = 'COLEÇÃO EM ORDEM DECRESCENTE';
    }
    if (event == '3') {
      this.orderByName = 'DATA DE ENTRADA EM ORDEM CRESCENTE';
    }
    if (event == '4') {
      this.orderByName = 'DATA DE ENTRADA EM ORDEM DECRESCENTE';
    }
    if (event == '5') {
      this.orderByName = 'NÚMERO DO PEDIDO EM ORDEM CRESCENTE';
    }
    if (event == '6') {
      this.orderByName = 'NÚMERO DO PEDIDO EM ORDEM DECRESCENTE';
    }
    if (event == '7') {
      this.orderByName = 'A - Z';
    }
    if (event == '8') {
      this.orderByName = 'Z - A';
    }
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
    this.openLoadingDialog();
    this.consultaStringService.consultarString(
      this.companyId, this.deptId, this.brandId, this.companyName, this.agentId)
      .subscribe(dados => {
        console.log(dados);
        this.clientes = dados;
        this.closeLoadingDialog();
      },
        (error: any) => {
          this.erroClientes = error;
          console.log('ERRO INVOICES: ' + this.erroClientes.message);
          this.closeLoadingDialog();
        }
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
    if (cliente != undefined) {
      return cliente.customer_name;
    }
  }

  public buscarInvoices() {
    this.openLoadingDialog();
    this.buscaInvoices.listarInvoices(
      this.companyId, this.deptId, this.brandId, this.collectionId, this.agentId,
      this.orderBy, this.companyDoc, this.customerFabId
    )
      .subscribe(dados => {
        this.consultado = true;
        this.invoices = dados;
        this.buscarTotalInvoices();
        this.closeLoadingDialog();
      },
        (error: any) => {
          this.erroInvoices = error;
          console.log('ERRO INVOICES: ' + this.erroInvoices.message);
          this.closeLoadingDialog();
        }
      );
  }

  public buscarTotalInvoices() {
    this.buscaTotalInvoicesService.buscaTotalInvoices(this.invoices).subscribe((res: TotalInvoices) => {
      this.total = res;
      return this.total;
    });
  }

  scroll(e: HTMLElement) {
    e.scrollIntoView();
  }
  
}
