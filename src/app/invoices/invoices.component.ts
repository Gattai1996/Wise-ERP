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
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'
<<<<<<< Updated upstream

const ELEMENT_DATA: InvoiceInterface[] = [
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '07186101000148', pedido_linx: '11885337Q1', pedido_wise: 'W054108', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$500,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '28150031000148', pedido_linx: '11056161Q1', pedido_wise: 'W084949', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$784.440,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '23514568000184', pedido_linx: '10656101Q1', pedido_wise: 'W051051', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA FEM', total_pecas_pedido: 35, total_valor_pedido: 'R$878.454,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '15640448000141', pedido_linx: '56484864Q1', pedido_wise: 'W050480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'LE LIS BLANC', total_pecas_pedido: 35, total_valor_pedido: 'R$987,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '02313132154845', pedido_linx: '74984084Q1', pedido_wise: 'W051840', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$2.916,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '08970874150464', pedido_linx: '51084184Q1', pedido_wise: 'W028480', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'JOHN JOHN', total_pecas_pedido: 35, total_valor_pedido: 'R$9.355,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '97898465151464', pedido_linx: '64904848Q1', pedido_wise: 'W050489', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'DUDALINA MASC', total_pecas_pedido: 35, total_valor_pedido: 'R$14.400,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'},
  {clifor: 513595, cnpj: '48456164110121', pedido_linx: '64084894Q1', pedido_wise: 'W015014', nf: '000167428', dt_faturamento: '30/01/2020', dt_fat_relat: '03/02/2020', 
  marca: 'INDIVIDUAL', total_pecas_pedido: 35, total_valor_pedido: 'R$29.587,50', qtde_embalada: 0, valor_embalado: 'R$0,00', total_pecas_faturadas: 35, 
  total_valor_faturado: 'R$0,00', porcentagem_fat: '100%'}
]
=======
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

<<<<<<< Updated upstream
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['cnpj', 'pedido_linx', 'pedido_wise',
    'nf', 'dt_faturamento', 'dt_fat_relat', 'marca', 'total_pecas_pedido', 
    'total_valor_pedido', 'qtde_embalada', 'valor_embalado',
    'total_pecas_faturadas', 'total_valor_faturado', 'porcentagem_fat'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
=======
  displayedColumns: string[] = ['customerFab_Id', 'company_doc', 'orderFactory_Id', 'order_Id',
    'invoice', 'dt_invoice', 'dt_invoice_relat', 'brand_name', 'total_quantity', 
    'total_price', 'packed_quantity', 'packed_price', 'total_quantity_invoiced',
    'total_price_invoiced', 'percentual_invoiced'];
>>>>>>> Stashed changes

  clientes: ConsultaCnpj;
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
  dataSource: any;

  constructor(

    private router: Router,
<<<<<<< Updated upstream
    private serviceCnpj: ConsultaCnpjService,
=======
    private consultaCnpjService: ConsultaCnpjService,
>>>>>>> Stashed changes
    private serviceMarcas: BrandsService,
    private serviceColecao: CollectionsService,
    private serviceRepres: AgentsService

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

<<<<<<< Updated upstream
=======
  // public buscarCnpj () {

  //   this.serviceConsultaCnpj.listarInvoices(this.company_doc).subscribe(dados => 
  //     {this.invoice = dados;
  //     console.log(this.invoice);
      
      // if(this.invoice.customer_name != undefined && this.invoice.customerFab_Id != undefined) 
      //   this.clienteValido = true;
      // else 
      //   this.clienteValido = false;
  //     },
  //     (error: any) => {this.erroCnpj = error;
  //     this.clienteValido = false;
  //     console.log('ERRO: ' + this.erroCnpj)}
  //     )
  // }

  public buscarCnpj() {
    this.dataSource = new InvoicesDataSource(this.consultaCnpjService);
  }

>>>>>>> Stashed changes
  public voltarAoLogin() {
    this.router.navigate(['/']);
  }
  
}

export class InvoicesDataSource extends DataSource<any> {
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  company_doc: string = '';
  
  constructor(private consultaCnpjService: ConsultaCnpjService) {
    super();
  }

  connect(): Observable<ConsultaCnpj[]> {
    return this.consultaCnpjService.listarInvoices(this.company_doc);
  }

  disconnect() {}

}
