import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { routeFadeStateTrigger } from "../common/route.animations";
import { Card } from "../common/cards/card.model";
import { CardProviderService } from "../common/services/card-provider.service";

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css'],
  animations: [routeFadeStateTrigger]
})
export class FlashCardComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  query: string;
  queryterm: string;
  cardsToStudy: Card[];

  private sub: any;

  constructor(private route: ActivatedRoute, private service: CardProviderService) { }

  ngOnInit() {
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

}
