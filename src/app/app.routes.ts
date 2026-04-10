import { Routes } from '@angular/router';
import {HomeScreenComponent} from './components/screens/home-screen-component/home-screen-component';
import {ServicesScreenComponent} from './components/screens/services-screen-component/services-screen-component';
import {FormScreenComponent} from './components/screens/form-screen-component/form-screen-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'services',
    component: ServicesScreenComponent
  },
  {
    path: 'form',
    component: FormScreenComponent
  },
];
