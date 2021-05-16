import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../services/routing.service";

@Component({
  selector: "app-some",
  template: `<h1>Hi from SomeComponent!</h1>`,
})
export class SomeComponent implements OnInit {}
