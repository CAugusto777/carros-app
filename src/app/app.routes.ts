import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Marcas } from './marcas/marcas';
import { Galeria } from './galeria/galeria';
import { Servicos } from './servicos/servicos';
import { CompararCarros } from './comparar-carros/comparar-carros';
import { Contato } from './contato/contato';
import { PagPorsche } from './pag-porsche/pag-porsche';
import { PagMercedes } from './pag-mercedes/pag-mercedes';
import { PagFord } from './pag-ford/pag-ford';
import { PagLambo } from './pag-lambo/pag-lambo';
import { Oficinaford } from './oficinaford/oficinaford';
import { Oficinalambo } from './oficinalambo/oficinalambo';
import { Oficinamercedes } from './oficinamercedes/oficinamercedes';
import { Oficinaporshe } from './oficinaporshe/oficinaporshe';
import { Detail } from './detail/detail';
import { Oficina } from './oficina/oficina';
import { Perfomancedetail } from './perfomancedetail/perfomancedetail';
import { Souzzadetail } from './souzzadetail/souzzadetail';
import { Limpcar } from './limpcar/limpcar';
import { Marcablindagem } from './marcablindagem/marcablindagem';
import { BlindagemGlobal } from './blindagem-global/blindagem-global';
import { BlindagemSbi } from './blindagem-sbi/blindagem-sbi';
import { Component } from '@angular/core';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'marcas', component: Marcas },
  { path: 'Mercedes', component: PagMercedes},
  { path: 'Lamborghini', component: PagLambo},
  { path: 'Porsche', component: PagPorsche},
  { path: 'Ford', component: PagFord},
  { path: 'galeria', component: Galeria },
  { path: 'comparar-carros', component: CompararCarros },  
  { path: 'servicos', component: Servicos },
  { path: 'Detail', component: Detail},
  { path: 'Perfomancedetail', component: Perfomancedetail},
  { path: 'Souzzadetail', component: Souzzadetail},
  { path: 'Limpcar', component: Limpcar},
  { path: 'Oficina', component: Oficina},
  { path: 'OficinaFord', component: Oficinaford},
  { path: 'OficinaPorshe', component: Oficinaporshe},
  { path: 'OficinaMercedes', component: Oficinamercedes},
  { path: 'OficinaLambo', component:Oficinalambo},
  { path: 'Blindagem' , component: Marcablindagem},
  { path: 'Global', component: BlindagemGlobal},
  { path: 'Sbi', component: BlindagemSbi},
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' } // Rota wildcard para redirecionar para home
];
