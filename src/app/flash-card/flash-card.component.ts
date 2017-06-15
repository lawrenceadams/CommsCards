import { Component, OnInit, HostBinding, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { routeFadeStateTrigger } from "../common/route.animations";
import { Card } from "../common/cards/card.model";
import { CardProviderService } from "../common/services/card-provider.service";
import { MessageService } from "../common/services/messenger.service";

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css'],
  animations: [routeFadeStateTrigger]
})
export class FlashCardComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimation = true;

  subscription: Subscription;

  query: string;
  queryterm: string;
  cardsToStudy: Card[];

  private sub: any;

  constructor(private route: ActivatedRoute, private service: CardProviderService, private messageService: MessageService) {
    /*
    * Setup a service listener to recieve each message and act upon it accordingly
    */
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.info(message);

      if (message === 'next') {
        this.nextCard()
      } else if (message === 'previous') {
        this.previousCard();
      }


    });
  }

  ngOnInit() {
    // Set navbar to studymode.
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query']; // Get the 'queryby' (system/type/year) from the url
      this.queryterm = params['queryterm']; // Get the 'query' (year 1/2/3) from the url. Bit hacky ~ might need to replace at somepoint
    });

    this.cardsToStudy = this.service.getCards();

    if (this.cardsToStudy.length === 0) {
      console.warn("Route was hotlinked! No current card state is set.");
      console.log("Rebuilding cardsToStudy");

      this.service.setCardQuery(this.query, this.queryterm); // Service --> Set cards to get for the given query
      this.service.setStudyCards(); // Sets the service cards[] instance to the required cards
      this.cardsToStudy = this.service.getCards(); // Sets the local card instance to the required cards
    }
  }

  ngOnDestroy() {
    // Prevents memory leaks
    this.subscription.unsubscribe();
  }

  nextCard() {
    // TODO
  }

  previousCard() {
    // TODO
  }

}
