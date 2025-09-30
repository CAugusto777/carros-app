import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Marcas } from './marcas/marcas';
import { Galeria } from './galeria/galeria';
import { Servicos } from './servicos/servicos';
import { CompararCarros } from './comparar-carros/comparar-carros';
import { Contato } from './contato/contato';
import { PagPorsche } from './pag-porsche/pag-porsche';
import { PagMercedes } from './pag-mercedes/pag-mercedes';
import { PagLambo } from './pag-lambo/pag-lambo';
import { Marcablindagem } from './marcablindagem/marcablindagem';
import { BlindagemGlobal } from './blindagem-global/blindagem-global';
import { BlindagemSbi } from './blindagem-sbi/blindagem-sbi';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'marcas', component: Marcas },
  { path: 'galeria', component: Galeria },
  { path: 'servicos', component: Servicos },
  { path: 'comparar-carros', component: CompararCarros },
  { path: 'contato', component: Contato },
  { path: 'Porsche', component: PagPorsche},
  { path: 'Mercedes', component: PagMercedes},
  { path: 'Lamborghini', component: PagLambo},
  { path: 'Blindagem' , component: Marcablindagem},
  { path: 'Global', component: BlindagemGlobal},
  { path: 'Sbi', component: BlindagemSbi},
  { path: '**', redirectTo: '' } // Rota wildcard para redirecionar para home
];
