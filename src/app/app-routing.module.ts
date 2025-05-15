import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./apresentacao-jr/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./apresentacao-jr/sobre/sobre.component').then(m => m.SobreComponent)
  },
  {
    path: 'projetos',
    loadComponent: () => import('./apresentacao-jr/projetos/projetos.component').then(m => m.ProjetosComponent)
  },
  {
    path: 'frase',
    loadComponent: () => import('./apresentacao-jr/frase/frase.component').then(m => m.FraseComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import('./apresentacao-jr/chat/chat.component').then(m => m.ChatComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
