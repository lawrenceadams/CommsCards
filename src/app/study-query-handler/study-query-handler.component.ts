import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { routeFadeStateTrigger } from "../common/route.animations";
import { CardProviderService } from "../common/services/card-provider.service";
import { Card } from "../common/cards/card.model";

@Component({
  selector: 'app-study-query-handler',
  templateUrl: './study-query-handler.component.html',
  styleUrls: ['./study-query-handler.component.css'],
  animations: [routeFadeStateTrigger]
})
export class StudyQueryHandlerComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  query: string;
  queryterm: string;
  private sub: any;
  cardsToStudy: Card[];
  noCards: boolean;

  constructor(private route: ActivatedRoute, private service: CardProviderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query']; // Get the 'queryby' (system/type/year) from the url
      this.queryterm = params['queryterm']; // Get the 'query' (year 1/2/3) from the url. Bit hacky ~ might need to replace at somepoint
    });

    this.service.setCardQuery(this.query, this.queryterm); // Service --> Set cards to get for the given query
    this.service.setStudyCards(); // Sets the service cards[] instance to the required cards
    this.cardsToStudy = this.service.getCards(); // Sets the local card instance to the required cards
  }

  logClick(id) {
    console.log(id);
    console.log(typeof (id));
  }
}
