import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {EditpageComponent} from "./editpage/editpage.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'edit/:id',
    component: EditpageComponent,
    title: 'Edit'
  }
];
