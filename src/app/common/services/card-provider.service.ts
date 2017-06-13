import { Injectable } from '@angular/core';
import { Card } from "../cards/card.model";

@Injectable()
export class CardProviderService {
  cards: string[] = []
  query: string;
  subquery: string;

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
