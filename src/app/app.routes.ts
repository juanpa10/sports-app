import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HistoryComponent } from './components/history/history.component';
import { SuccessfulRegComponent } from './components/successful-reg/successful-reg.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'history', component: HistoryComponent }
  { path: 'successful', component: SuccessfulRegComponent }
  { path: 'menu', component: ProfileMenuComponent }
];
