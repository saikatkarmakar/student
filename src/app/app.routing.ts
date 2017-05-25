import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   component: MainComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routingComponents = [
  MainComponent,
  PageNotFoundComponent
];