import { Component, OnInit } from '@angular/core';

export interface listaDeClientes {
  nome_fantasia: string;
  cnpj: string;
}
const ELEMENT_DATA: listaDeClientes[] = [
  {nome_fantasia: 'KAROLINA MODAS', cnpj: '17567422000146'},
  {nome_fantasia: 'A A DE BRITO - ME', cnpj: '11182548000116'},
  {nome_fantasia: 'LOJA ARLICENTER', cnpj: '24103224000197'},
  {nome_fantasia: 'KAROLINA MODAS', cnpj: '17567422000146'},
  {nome_fantasia: 'A A DE BRITO - ME', cnpj: '11182548000116'},
  {nome_fantasia: 'LOJA ARLICENTER', cnpj: '24103224000197'},
  {nome_fantasia: 'KAROLINA MODAS', cnpj: '17567422000146'},
  {nome_fantasia: 'A A DE BRITO - ME', cnpj: '11182548000116'},
  {nome_fantasia: 'LOJA ARLICENTER', cnpj: '24103224000197'},
  {nome_fantasia: 'KAROLINA MODAS', cnpj: '17567422000146'},
  {nome_fantasia: 'A A DE BRITO - ME', cnpj: '11182548000116'},
  {nome_fantasia: 'LOJA ARLICENTER', cnpj: '24103224000197'}
]
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nome_fantasia', 'cnpj'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
