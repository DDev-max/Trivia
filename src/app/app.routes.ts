import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeographyComponent } from './geography/geography.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'geography',
    component: GeographyComponent,
  },
];
