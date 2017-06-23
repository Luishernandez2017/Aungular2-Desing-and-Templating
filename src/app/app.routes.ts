import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

//create router object
export const router:Routes =[
  //paths
  { path: '', redirectTo: 'products',  pathMatch: 'full' },//redirect to products
  { path: 'about',   component: AboutComponent }, // path is appcomponent
  { path: 'products', component: ProductsComponent } //path to products component
];

//export constant
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
