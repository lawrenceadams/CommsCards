import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";

import { routeFadeStateTrigger } from "./common/route.animations";
import { MessageService } from "./common/services/messenger.service";

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
  queryMenuUrl: string;


  isStudying: boolean = false;
  isStudyMenu: boolean = true;

  constructor(private router: Router, private messageService: MessageService, private location: Location) {
    // Get the currently set route/URL
    router.events.subscribe((val) => {
      /**
      * If the user is studying (route ../study/:cardID)
      * then set isStudying to true in order to set the 
      * navbar to change.
      */
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        if (val.url.includes('/study')) {
          this.isStudying = true;
          if (val.url.includes('/card/')) {
            this.isStudyMenu = false;
          } else {
            this.isStudyMenu = true;
          }
        } else {
          this.isStudying = false;
        }
      }

      // Set URL for backing up to card menu
      var currentURL = this.location.path().split('/');
      currentURL.pop(); // Remove /card/:id
      if (!this.isStudyMenu) {
        currentURL.pop(); // Remove /card/ if studying!
      }
      this.queryMenuUrl = currentURL.join('/');

    });



  }

  /**
   * Setup previous and next card click
   * TODO: Build a messenger service to communicate these clicks
   */

  sendMessage(msg): void {
    this.messageService.sendMessage(msg);
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }
}
