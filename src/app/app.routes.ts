import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '', // Default route for the home page
    component: HomePageComponent,
  },
];
