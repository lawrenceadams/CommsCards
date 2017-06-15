import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { routeFadeStateTrigger } from "./common/route.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeFadeStateTrigger]
})
export class AppComponent {
  @HostBinding('@routeFadeState') routeAnimation = true;

  title = 'app';
  cards: string[];

  private isStudying: boolean = false;

  constructor(private router: Router) {
    // Get the currently set route/URL
    router.events.subscribe((val) => {
      // If the user is studying (route ../study/:cardID)
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        if (val.url.includes('/card/')) {
          this.isStudying = true;
        } else {
          this.isStudying = false;
        }
      }
    });
  }

  /**
   * Setup previous and next card click
   * TODO: Build a messenger service to communicate these clicks
   */

  previousCardClick() {
    // TODO
  }

  nextCardClick() {
    // TODO
  }

}
