import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { RoutingService } from './routing.service';
import { ShoppingComponent } from './shopping/shopping.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HomeComponent,
    ShoppingComponent,
  ],
  imports: [BrowserAnimationsModule, AppRoutingModule, CollapseModule.forRoot(), FormsModule],
  providers: [RoutingService, {provide: APP_BASE_HREF, useValue: '/obe/'}],
  bootstrap: [],
})
export class AppModule {
  ngDoBootstrap() {}
}
