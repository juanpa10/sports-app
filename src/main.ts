// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HistoryComponent } from './app/components/history/history.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { provideHttpClient } from '@angular/common/http';

import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SuccessfulRegComponent } from './app/components/successful-reg/successful-reg.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'successful', component: SuccessfulRegComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ]
}).catch(err => console.error(err));
