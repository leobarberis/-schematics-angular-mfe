import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%= classify(name) %>Component } from './<%= name %>/<%= name %>.component';
import { SomeComponent } from './some/some.component';

const routes: Routes = [
  {
    path: '<%= name %>/someRoute',
    component: SomeComponent,
  },
  {
    path: '<%= name %>',
    component: <%= classify(name) %>Component,
    pathMatch: 'full',
  },
  {
    path: '',
    pathMatch: 'full',
    component: <%= classify(name) %>Component,
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