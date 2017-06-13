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
    // Process search
    console.log("Searching " + this.query + " for " + this.subquery);
    if (this.query === "type") {
      result = FLASHCARDS.filter(searchCard => searchCard.type === this.subquery);
    } else if (this.query === "system") {
      result = FLASHCARDS.filter(searchCard => searchCard.system.includes(this.subquery));
    } else if (this.query === "year") {
      result = FLASHCARDS.filter(searchCard => searchCard.year === Number(this.subquery));
    } else {
      // err.
    }
    this.setCards(result);
  }

  setCards(cards) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

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
