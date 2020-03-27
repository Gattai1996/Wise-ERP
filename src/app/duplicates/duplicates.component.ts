import { Component, OnInit } from '@angular/core';

export interface ClientesDevedores {
  codigo: string
  nome: string;
  marca: string;
  divida: string;
  outraDivida: string;
}

const CLIENTES_DEVEDORES: ClientesDevedores[] = [
  {codigo: '005318', nome: 'Cliente Exemplo 1', marca: 'BRAND ONE', divida: 'R$ 15.800', outraDivida: 'R$ 318.000'},
  {codigo: '001087', nome: 'Cliente Exemplo 2', marca: 'BRAND ONE', divida: 'R$ 169.250', outraDivida: 'R$ 17.900'},
  {codigo: '007641', nome: 'Cliente Exemplo 3', marca: 'BRAND ONE', divida: 'R$ 80.100', outraDivida: 'R$ 568.300'},
  {codigo: '004568', nome: 'Cliente Exemplo 4', marca: 'BRAND ONE', divida: 'R$ 53.000', outraDivida: 'R$ 1.200.000'},
  {codigo: '007984', nome: 'Cliente Exemplo 5', marca: 'BRAND ONE', divida: 'R$ 110.600', outraDivida: 'R$ 498.000'},
  {codigo: '005318', nome: 'Cliente Exemplo 1', marca: 'BRAND ONE', divida: 'R$ 15.800', outraDivida: 'R$ 318.000'},
  {codigo: '001087', nome: 'Cliente Exemplo 2', marca: 'BRAND ONE', divida: 'R$ 169.250', outraDivida: 'R$ 17.900'},
  {codigo: '007641', nome: 'Cliente Exemplo 3', marca: 'BRAND ONE', divida: 'R$ 80.100', outraDivida: 'R$ 568.300'},
  {codigo: '004568', nome: 'Cliente Exemplo 4', marca: 'BRAND ONE', divida: 'R$ 53.000', outraDivida: 'R$ 1.200.000'},
  {codigo: '007984', nome: 'Cliente Exemplo 5', marca: 'BRAND ONE', divida: 'R$ 110.600', outraDivida: 'R$ 498.000'},
]

@Component({
  selector: 'app-duplicates',
  templateUrl: './duplicates.component.html',
  styleUrls: ['./duplicates.component.css']
})

export class DuplicatesComponent implements OnInit {

  detalhar: boolean = false;
  clientes = CLIENTES_DEVEDORES;

  constructor() { }

  ngOnInit() {
  }

}
