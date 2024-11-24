import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './main-routes/home/home.component';
import { DetailComponent } from './main-routes/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/photos-home',  // Redirects from empty path to '/home'
        pathMatch: 'full'
      },
    { path: 'photos-home', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    // {
    //     path: '',
    //     redirectTo: '/home',  // Redirects from empty path to '/home'
    //     pathMatch: 'full'
    //   },
    // {
    //     path: 'home',
    //     loadComponent: () => import('./main-routes/home/home.component').then(m => m.HomeComponent)
    //   },
    //   {
    //     path: 'detail/:id',
    //     loadComponent: () => import('./main-routes/detail/detail.component').then(m => m.DetailComponent)
    //   },
];
export const appRouterProviders = [
    provideRouter(routes),
  ];
