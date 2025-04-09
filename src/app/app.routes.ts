import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',redirectTo: '/home',pathMatch: 'full'
  },
  {
    path: 'home',loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'party-form',loadComponent: () => import('./feature/party-form/party-form.component').then(m => m.PartyFormComponent)
  },
  {
    path: 'tailwind-css',
    loadComponent: () => import('./feature/tailwind/tailwind.component').then(m => m.TailwindComponent)
  },
  {
    path: 'content-projection',loadComponent: () => import('./feature/content-projection/content-projection.component').then(m => m.ContentProjectionComponent)
  }


];
