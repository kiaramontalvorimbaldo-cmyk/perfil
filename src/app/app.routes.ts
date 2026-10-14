import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Kiara Montalvo | Portafolio académico' },
  {
    path: 'portfolio/:id',
    loadComponent: () =>
      import('./pages/portfolio-details.component').then((m) => m.PortfolioDetailsComponent),
    title: 'Proyecto | Kiara Montalvo',
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import('./pages/service-details.component').then((m) => m.ServiceDetailsComponent),
    title: 'Áreas de interés | Kiara Montalvo',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Página no encontrada | Kiara Montalvo',
  },
];
