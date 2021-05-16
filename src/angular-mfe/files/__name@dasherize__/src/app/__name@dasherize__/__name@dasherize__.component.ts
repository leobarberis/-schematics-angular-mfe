import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-<%= classify(name) %>',
  template: `<h1>Welcome</h1>
             <hr />
             <button
            (click)="navigate('/<%= name %>/someRoute')"
            >
            SomeComponent
            </button>`,
})
export class <%= classify(name) %>Component implements OnInit {
  constructor(private routingService: RoutingService) {}

  public navigate(path: string): void {
    this.routingService.navigate(path);
  }

  ngOnInit(): void {}
}