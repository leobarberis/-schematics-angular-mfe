import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  public navigate(path: string): void {
    this.routingService.navigate(path);
  }

  ngOnInit(): void {}
}
