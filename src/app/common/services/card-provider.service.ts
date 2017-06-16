import { Injectable } from '@angular/core';
import { Card } from "../cards/card.model";
import { FLASHCARDS } from "../cards/card.store";

@Injectable()
export class CardProviderService {
  cards: Card[] = []
  query: string;
  subquery: string;

  setStudyCards() {
    this.query;
    this.subquery;

    var result: Card[];
    /**
     * Searches card store for the correct card by filtering by type/year/system.
     */
    console.log("Searching " + this.query + " for " + this.subquery);
    if (this.query === "type") {
      result = FLASHCARDS.filter(searchCard => searchCard.type === this.subquery);
    } else if (this.query === "system") {
      result = FLASHCARDS.filter(searchCard => searchCard.system.includes(this.subquery));
    } else if (this.query === "year") {
      result = FLASHCARDS.filter(searchCard => searchCard.year === Number(this.subquery));
    } else {
      console.error("Route was likely set to an unknown search type")
    }
    this.setCards(result);
  }

  /**
   * Takes a Card[] object and sets the current card session to those cards.
   * @param cards 
   */
  setCards(cards: Card[]) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

  /**
   * Resets the card provider service in order to prevent errors.
   */
  destroyCards() {
    this.cards = [];
  }

  setCardQuery(query: string, subquery: string) {
    this.query = query;
    this.subquery = subquery;
  }

  getCardQuery() {
    return {
      "currentSelector": this.query,
      "currentSelection": this.subquery
    }
  }

  destroyCardQuery() {
    this.query = ""
    this.subquery = "";
  }
}
