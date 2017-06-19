import { Component, OnInit, HostBinding, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Subscription } from "rxjs";

import { routeFadeStateTrigger } from "../common/route.animations";
import { Card } from "../common/cards/card.model";
import { CardProviderService } from "../common/services/card-provider.service";
import { MessageService } from "../common/services/messenger.service";
import { SafeHTMLPipe } from "../common/pipes/htmlSanitizerBypass.pipe";

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
  currentCardIndex: number;
  isFlipped: boolean = false;
  isNotAnimating: boolean = false;
  isFadeOut: boolean = false;

  private sub: any;
  private currentURL: string;

  constructor(
    private route: ActivatedRoute,
    private service: CardProviderService,
    private messageService: MessageService,
    private location: Location
  ) {
    /*
    * Setup a service listener to recieve each message and act upon it accordingly
    */
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.info(message);

      if (message.text === 'next') {
        this.nextCard();
      } else if (message.text === 'previous') {
        this.previousCard();
      }
    });
  }

  ngOnInit() {
    // Set navbar to studymode.
    this.sub = this.route.params.subscribe(params => {
      this.query = params['query']; // Get the 'queryby' (system/type/year) from the url
      this.queryterm = params['queryterm']; // Get the 'query' (year 1/2/3) from the url. Bit hacky ~ might need to replace at somepoint
      this.currentCardIndex = params['id']; // Sets the current card index from the URL.
    });

    this.cardsToStudy = this.service.getCards();
    this.currentURL = this.location.path();

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

  /**
   * Checks if end of index or not, if so then set currentCardIndex to 0
   * If active card is last in stack of cards, start again over deck
   * Otherwise, increase activeCardID
   */
  nextCard() {
    // First, set the front of the card to be viewed.
    this.isNotAnimating = true;
    this.isFadeOut = true;
    this.isFlipped = false;


    if ((this.currentCardIndex + 1) === this.cardsToStudy.length) {
      this.currentCardIndex = 0;
      // TODO Notify user that we are looping
    } else if (this.currentCardIndex > this.cardsToStudy.length) {
      console.warn("This is strange. Resetting currentCardIndex to 0");
      this.currentCardIndex = 0;
    } else {
      this.currentCardIndex++;
    }

    this.updateURLPath();

    // Disable no animation after allowing DOM to update.
    setTimeout(() => { this.isNotAnimating = false; this.isFadeOut = false; }, 50);
  }

  /**
   * Check if beginning of index or not, if so then set currentCardIndex to end of cardsToStudy array
   * If active card is first in stack of cards, goto end of deck
   * Otherwise, decrease activeCardID
   */
  previousCard() {
    // First, set the front of the card to be viewed.
    this.isNotAnimating = true;
    this.isFadeOut = true;
    this.isFlipped = false;

    if (this.currentCardIndex <= 0) {
      this.currentCardIndex = this.cardsToStudy.length - 1;
      // TODO Notify user that we are looping back.
      console.info("At beginning of deck - Looping back to end.")
    } else {
      this.currentCardIndex--;
    }
    this.updateURLPath();

    // Disable no animation after allowing DOM to update.
    setTimeout(() => { this.isNotAnimating = false; this.isFadeOut = false; }, 50);
  }

  /**
   * Used to update the URL for ease of use and allowing of sharing of cards.
   * 
   * Gets the current url, splits it into an array of string, deletes the last item in array
   * then adds the new card index and sets the URL bar to this string
   */
  updateURLPath() {
    let strippedURL = this.currentURL.split('/');
    strippedURL.pop();
    strippedURL.push(String(this.currentCardIndex));

    this.currentURL = strippedURL.join('/');
    this.location.go(this.currentURL);
  }

  /**
   * On clicking the front or back of the card the flip state it toggled
   */
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}