import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: '<%= name %>/pricing',
    component: PricingComponent,
  },
  {
    path: '<%= name %>/shopping',
    component: ShoppingComponent,
  },
  {
    path: '<%= name %>',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '**',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
