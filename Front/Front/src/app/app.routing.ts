import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const applicationRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

export const applicationRoutingProvider: any[] = [];
export const routingApplication: ModuleWithProviders = RouterModule.forRoot(applicationRoutes);
