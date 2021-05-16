import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RoutingService } from "./services/routing.service";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  imports: [AppRoutingModule],
  declarations: [AppComponent],
  providers: [RoutingService, { provide: APP_BASE_HREF, useValue: "/obe/" }],
  bootstrap: [],
})
export class AppModule {
  ngDoBootstrap() {}
}
